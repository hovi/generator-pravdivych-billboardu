package generator.data

import generator.SimpleGenerator


private val simples = arrayOf(
        "<loving-header> +++ Tato země je naše!",
        "Srdcem +++ za lidi, \nrozumem za republiku",
        "<loving-header> +++ Zeman říká \n vždycky pravdu!",
        "<loving-header> +++ Nestydím se \n za prezidenta!"
)


val commonRespectedPeople = arrayOf(
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

val commonBadGuys = arrayOf(
        "imigrantům",
        "Drahošovi",
        "islámu"
)

val commonPatrioticLine = arrayOf(
        "Tato země\n je naše!",
        "Zemi si vzít\n nenecháme!",
        "Proti \nislámu!",
        "Za naše děti!",
        "Svou zemi vám nedáme!"
)


val commonLovingFooter = arrayOf(
        "Volte \nZemana!",
        "Nevolte \nDrahoše!",
        "Zeman \nna Hrad!",
        "Zeman \nznovu!"
)

val commonLovingHeader = arrayOf(
        "Náš prezident",
        "Srdcem",
        "Rozumem"
)

val commonStop = arrayOf(
        "lžím, strachu a\n nenávisti",
        "Moskvě a\n Kremlu",
        "hlupákům a\n omezencům",
        "starým strukturám"
)

val commonContent = """

content = <simples> +++ <footer>
content = Stop +++ <bad-guys> a\n <bad-guys> +++ <footer>
content = Stop +++ <stop> +++\n<footer>
content = <loving-header> +++ Volí ho i\n <respected-people> +++ <footer>

footer =  <loving-footer> | <patriotic-line>

"""