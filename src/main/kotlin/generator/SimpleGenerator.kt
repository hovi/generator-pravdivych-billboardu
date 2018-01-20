package generator

import generator.data.ZemanMameRadi
import generator.data.ZemanNeMameRadi


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
        if (!keys.containsKey(key)) {
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
        val sections = content.split("+++")
        if (sections.size != 3) {
            throw IllegalStateException("Invalid result: $content")
        }
        return GeneratorResult(sections[0].trim(), sections[1].trim(), sections[2].trim())
    }

    companion object {

        val ZEMAN_NAME_RADI = ZemanMameRadi.generate()
        val ZEMAN_NENAME_RADI = ZemanNeMameRadi.generate()
        val DEFAULT = ZEMAN_NAME_RADI

    }
}


data class GeneratorResult(val header: String, val content: String, val footer: String)