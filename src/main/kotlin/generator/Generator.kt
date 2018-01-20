package generator
interface Literal {

    fun evaluate(): String
}

data class StringLiteral(val content: String) : Literal {
    override fun evaluate(): String {
        return content
    }

}

data class GroupLiteral(val key: String, val literals: Array<Literal>) : Literal {
    override fun evaluate(): String {
        return literals.getRandomElement().evaluate()
    }

}


fun grammar(init: Builder.() -> Unit): Builder {
    val builder = Builder()
    builder.init()
    return builder

}


class Builder {

    val keyRegex = "<([^>]*)>".toRegex()

    val lineRegex = "([^=]*)=(.*)"

    var groupLiterals = mutableMapOf<String, Literal>()


    inner class KeyLiteral(val key: String) : Literal {
        override fun evaluate(): String {
            return groupLiterals[key]!!.evaluate()
        }

    }

    inner class GroupLiteralBuilder(var key: String? = null, var literals: MutableList<String> = mutableListOf()) {

        fun build(): GroupLiteral {
            val literalObjects = mutableListOf<Literal>()
            for (literalValue in literals) {
                literalObjects.add(parse(literalValue))
            }
            return GroupLiteral(key = key!!, literals = literalObjects.toTypedArray())
        }

    }

    fun parse(value: String): Literal {
        println("parse: $value")
        if (value.matches(keyRegex)) {
            return KeyLiteral(value.replace(keyRegex, "$1"))
        } else {
            return StringLiteral(value)
        }
    }

    inner class LineBuilder(var line: String? = null) {

        fun build(): GroupLiteral {
            val key = line!!.replace(lineRegex, "$1")
            val literalObjects = mutableListOf<Literal>()
            val restLiteralValues: String = line!!.replace(lineRegex, "$2")
            println("KEY: $key")
            println("RLV: $restLiteralValues    ")
            for (literalValue in restLiteralValues.split("|")) {
                println("LV: $literalValue")
                literalObjects.add(parse(literalValue))
            }
            return GroupLiteral(key = key, literals = literalObjects.toTypedArray())
        }

    }

    fun group(init: GroupLiteralBuilder.() -> Unit): GroupLiteral {
        val stringBuilder = GroupLiteralBuilder()
        stringBuilder.init()
        val groupLiteral = stringBuilder.build()
        groupLiterals.put(groupLiteral.key, groupLiteral)
        return groupLiteral
    }

    fun line(init: LineBuilder.() -> Unit): GroupLiteral {
        val stringBuilder = LineBuilder()
        stringBuilder.init()
        val groupLiteral = stringBuilder.build()
        groupLiterals.put(groupLiteral.key, groupLiteral)
        return groupLiteral
    }


}


val g = grammar {
    group {
        key = "vyrok"
        literals = mutableListOf("<vyrok3>", "všichni jsou šílení")
    }
    line {
        line = "vyrok2 = 1 | 2 | 3"
    }
}


fun main(args: Array<String>) {
    println("Hello JavaScript!")
    //println(g.groupLiterals)
    //println(g.groupLiterals["vyrok"]!!.evaluate())
    //println(g.groupLiterals["vyrok2"]!!.evaluate())
}