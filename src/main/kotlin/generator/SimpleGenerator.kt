package generator


val simples = arrayOf(
        "<loving-header> +++ Tato země je naše!",
        "Srdcem +++ za lidi, rozumem za republiku",
        "<loving-header> +++ Zeman říká vždycky pravdu!",
        "<loving-header> +++ Nestydím se za prezidenta!"
        )


val respectedPeople = arrayOf(
        "Martin Konvička",
        "František Ringo Čech",
        "Tereza Pergnerová",
        "Dan Hůlka"
)

val badGuys = arrayOf(
        "imigrantům",
        "Drahošovi",
        "mimozemšťanům",
        "islámu",
        "podnikatelům",
        "kavárníkům",
        "Kalouskovi",
        "chemtrails"
)

val patrioticLine = arrayOf(
        "Tato země\n je naše!",
        "Zemi si vzít\n nenecháme!",
        "Proti islámu!",
        "Za naše děti!"
)


val lovingFooter = arrayOf(
        "Volte Zemana!",
        "Nevolte Drahoše!",
        "Zeman na Hrad!",
        "Zeman znovu!"
)

val lovingHeader = arrayOf(
        "Náš prezident",
        "Srdcem"
)

val content = """
content = <simples> +++ <footer>
content = Stop +++ <bad-guys> a\n <bad-guys> +++ <footer>
content = Stop +++ lžím, strachu a\n nenávisti +++\n<footer>
content = <loving-header> +++ Volí ho i\n <respected-people> +++ <footer>


footer =  <loving-footer> | <patriotic-line>

"""

class SimpleGenerator() {
    val keys = mutableMapOf<String, List<String>>()

    val lineRegex = "([A-Za-z-]*) = (.*)".toRegex()

    val replacementRegex = "(?:<([A-Za-z-]*)>)".toRegex()

    fun add(text: String) {
        for (line in text.split("\n".toRegex())) {
            addLine(line)
        }
    }

    fun addLine(line: String) {
        if (line.isBlank()) {
            return
        }
        if (!line.matches(lineRegex)) {
            throw IllegalArgumentException("Illegal line: $line")
        }
        val key = line.replace(lineRegex, "$1")
        val values = line.replace(lineRegex, "$2").replace("\\n", "\n").split("|")
        add(key, values)
    }

    fun add(key: String, value: String) {
        add(key, arrayOf(value))
    }

    fun add(key: String, values: List<String>) {
        if (keys.containsKey(key)) {
            val merged = keys[key]!! + values
            keys.put(key, merged)
        } else {
            keys.put(key, values)
        }
    }

    fun add(key: String, values: Array<String>) {
        add(key, values.toList())
    }

    fun evaluateKey(key: String): String {
        if (! keys.containsKey(key)) {
            throw IllegalArgumentException("Key not found: $key")
        }
        return evaluate(keys[key]!!.getRandomElement())
    }

    fun evaluate(value: String): String {
        val results = replacementRegex.findAll(value)
        var evaluated = value
        for (result in results) {
            val key = result.groupValues[1].trim()
            val group = result.groupValues[0].trim()
            evaluated = evaluated.replaceFirst(group, evaluateKey(key))
        }
        return evaluated
    }

    fun generate(): GeneratorResult {
        val content = evaluateKey("content")
        val sections =  content.split("+++")
        if (sections.size != 3) {
            throw IllegalStateException("Invalid result: $content")
        }
        return GeneratorResult(sections[0], sections[1], sections[2])
    }

    companion object {

        val DEFAULT = generateDefault()

        fun generateDefault (): SimpleGenerator {
            val simpleGenerator = SimpleGenerator()
            simpleGenerator.add("test", "tested")
            simpleGenerator.add("simples", simples)
            simpleGenerator.add("loving-footer", lovingFooter)
            simpleGenerator.add("loving-header", lovingHeader)
            simpleGenerator.add("respected-people", respectedPeople)
            simpleGenerator.add("bad-guys", badGuys)
            simpleGenerator.add("patriotic-line", patrioticLine)
            simpleGenerator.add(content)
            return simpleGenerator
        }
    }
}


data class GeneratorResult(val header: String, val content: String, val footer: String)