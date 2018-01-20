package generator.data

import generator.SimpleGenerator


private val simples = commonSimples

private val respectedPeople = commonRespectedPeople

private val badGuys = commonBadGuys

private val patrioticLine = commonPatrioticLine


private val lovingFooter = commonLovingFooter

private val lovingHeader = commonLovingHeader

private val stop = commonStop

private val content = """


""" + commonContent

object ZemanMameRadi {

    fun generate(): SimpleGenerator {
        val simpleGenerator = SimpleGenerator()
        simpleGenerator.add("test", "tested")
        simpleGenerator.add("simples", simples)
        simpleGenerator.add("loving-footer", lovingFooter)
        simpleGenerator.add("loving-header", lovingHeader)
        simpleGenerator.add("respected-people", respectedPeople)
        simpleGenerator.add("bad-guys", badGuys)
        simpleGenerator.add("stop", stop)
        simpleGenerator.add("patriotic-line", patrioticLine)
        simpleGenerator.add(content)
        return simpleGenerator
    }
}
