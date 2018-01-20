package generator.data

import generator.SimpleGenerator


val simples = arrayOf(
        "<loving-header> +++ Tato země je naše!",
        "Srdcem +++ za lidi, \nrozumem za republiku",
        "<loving-header> +++ Zeman říká \n vždycky pravdu!",
        "<loving-header> +++ Nestydím se \n za prezidenta!"
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
        "Proti \nislámu!",
        "Za naše děti!"
)


val lovingFooter = arrayOf(
        "Volte \nZemana!",
        "Nevolte \nDrahoše!",
        "Zeman \nna Hrad!",
        "Zeman \nznovu!"
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

object Zeman {

    fun generate(): SimpleGenerator {
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