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
        "Dan Hůlka",
        "Andrej Babiš",
        "Vaše babička",
        "KSČM",
        "Zdeněk Troška",
        "SPD",
        "Tomio Okamura",
        "ANO"
)

val badGuys = arrayOf(
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
)

val patrioticLine = arrayOf(
        "Tato země\n je naše!",
        "Zemi si vzít\n nenecháme!",
        "Proti \nislámu!",
        "Za naše děti!",
        "Za naše pejsky!",
        "Svou zemi vám nedáme!",
        "Za Vysočinu!",
        "Za Bechera!"
)


val lovingFooter = arrayOf(
        "Volte \nZemana!",
        "Nevolte \nDrahoše!",
        "Zeman \nna Hrad!",
        "Zeman \nznovu!",
        "Volte \nTrumpa!",
        "Volte \nKreml!",
        "Volte \nLosnu!",
        "Volte \nMažňáka!",
        "Losnu \nnebo Mažňáka",
        "Volte \nBažňáka!",
        "Volte \nkrále Vysočiny!"
)

val lovingHeader = arrayOf(
        "Náš prezident",
        "Srdcem",
        "Rozumem",
        "Citečky",
        "Nemyslete!"
)

val content = """
content = <simples> +++ <footer>
content = Stop +++ <bad-guys> a\n <bad-guys> +++ <footer>
content = Stop +++ lžím, strachu a\n nenávisti +++\n<footer>
content = Stop +++ vulgaritě a\n dezinformaci +++\n<footer>
content = Stop +++ vulgaritě a\n neurvalosti +++\n<footer>
content = Stop +++ zednářům a\n Římskému klubu +++\n<footer>
content = Stop +++ Moskvě a\n Kremlu +++\n<footer>
content = Stop +++ hlupákům a\n omezencům +++\n<footer>
content = Stop +++ satarým strukturám +++\n<footer>
content = Stop +++ hlupákům a\n populistům +++\n<footer>
content = Stop +++ Nejedlému, Mynářovi a\n dalším přátelům +++\n<footer>
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
