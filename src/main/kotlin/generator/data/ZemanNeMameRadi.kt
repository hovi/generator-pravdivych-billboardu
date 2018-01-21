package generator.data

import generator.SimpleGenerator


private val simples = commonSimples

private val respectedPeople = commonRespectedPeople

private val badGuys = arrayOf(
        "mimozemšťanům",
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
        "veganům",
        "veganům",
        "zelenině",
        "židozednářům",
        "hackerům",
        "volnomyšlenkářům",
        "čestnosti",
        "státním podnikům",
        "lenosti",
        "pohodlnosti",
        "zabijačkám",
        "podbradkům",
        "impotentům",
        "nekuřákům",
        "nezávislosti",
        "terorismu",
        "slovenskému pivu",
        "lobotomii"
) + commonBadGuys

private val patrioticLine = arrayOf(
        "Za naše pejsky!",
        "Za Vysočinu!",
        "Za Bechera!",
        "Za naše vojáky!",
        "Za naše matky!",
        "Za naše nesvéprávné!",
        "Ku*da sem, \n ku*da tam!"
) + commonPatrioticLine


private val lovingFooter = arrayOf(
        "Volte \nTrumpa!",
        "Volte \nKreml!",
        "Volte \nLosnu!",
        "Volte \nMažňáka!",
        "Losnu \nnebo Mažňáka",
        "Volte \nBahňáka!",
        "Volte \nkrále Vysočiny!",
        "Volte Drahoše!",
        "Volte mě!",
        "Chcete mě?",
        "Volte svobodu!",
        "Volte demokracii!",
        "Volte pravdu!"
) + commonLovingFooter

private val lovingHeader = arrayOf(
        "Citečky",
        "Nemyslete!",
        "Myslete!"
) + commonLovingHeader

private val stop = arrayOf(
        "hlupákům a\n populistům",
        "maskotům a\n loutkám",
        "vulgaritě a\n dezinformaci",
        "vulgaritě a\n neurvalosti",
        "zednářům a\n Římskému klubu",
        "Nejedlému, Mynářovi a\n dalším přátelům"
) + commonStop

private val content = """


""" + commonContent

object ZemanNeMameRadi {

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
