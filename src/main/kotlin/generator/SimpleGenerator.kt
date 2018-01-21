package generator

import generator.data.ZemanMameRadi
import generator.data.ZemanNeMameRadi
import generator.data.images


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
        val repetitiveReplacements = mutableMapOf<String, String>()
        val maxTries = 10
        for (result in results) {
            val key = result.groupValues[1].trim()
            val group = result.groupValues[0].trim()
            var evaluatedKey = evaluateKey(key)
            var tryIndex = 0
            while (repetitiveReplacements.containsKey(group) && repetitiveReplacements[group] == evaluatedKey && tryIndex < maxTries) {
                tryIndex += 1
                evaluatedKey = evaluateKey(key)
            }
            repetitiveReplacements.put(group, evaluatedKey)
            evaluated = evaluated.replaceFirst(group, evaluatedKey)
        }
        return evaluated
    }

    fun generate(): GeneratorResult {
        val content = evaluateKey("content")
        val sections = content.split("+++")
        if (sections.size != 3) {
            throw IllegalStateException("Invalid result: $content")
        }
        return GeneratorResult(sections[0].trim(), sections[1].trim(), sections[2].trim(), foto = images.getRandomElement())
    }

    companion object {

        val ZEMAN_NAME_RADI = ZemanMameRadi.generate()
        val ZEMAN_NENAME_RADI = ZemanNeMameRadi.generate()
        val DEFAULT = ZEMAN_NAME_RADI

    }
}


data class GeneratorResult(val header: String, val content: String, val footer: String, val foto: String)