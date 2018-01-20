package generator.data

import generator.SimpleGenerator


private val simples = arrayOf(
        "<loving-header> +++ Tato země je naše!",
        "Srdcem +++ za lidi, \nrozumem za republiku",
        "<loving-header> +++ Zeman říká \n vždycky pravdu!",
        "<loving-header> +++ Nestydím se \n za prezidenta!"
)


private val respectedPeople = commonRespectedPeople

private val badGuys = arrayOf(
        "imigrantům",
        "Drahošovi",
        "mimozemšťanům",
        "islámu",
        "podnikatelům",
        "kavárníkům",
        "Kalouskovi",
        "chemtrails",
        "intelektuálům",
        "slušnosti",
        "lidskosti",
        "evangelíkům",
        "novinářům",
        "víře",
        "solidaritě",
        "rozumu",
        "abstinentům",
        "spravedlnosti",
        "soudnosti",
        "Třetí velmoci",
        "Pussy Riot",
        "akademikům",
        "vzdělancům",
        "aktivistům",
        "důstojnosti",
        "fotbalovým fanouškům",
        "vegetariánům",
        "veganům"
) + commonBadGuys

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
