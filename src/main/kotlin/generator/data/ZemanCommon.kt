package generator.data


val images = arrayOf(
        "drsny.gif",
        "prekvapeny.png",
        "recnicky.png",
        "vyjukany.png",
        "vysmaty.png"
)

val commonSimples = arrayOf(
        "<loving-header> +++ Tato země je naše!",
        "Srdcem +++ za lidi, \nrozumem za republiku",
        "<loving-header> +++ Zeman říká \n vždycky pravdu!",
        "<loving-header> +++ Nestydím se \n za prezidenta!"
        "<loving-header> +++ Miluji \n prezidenta!",
        "<loving-header> +++ Peroutka byl \n gentleman!",
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
        "hnutí ANO",
        "Jiří Kájínek",
        "jeho Ovčáček",
        "Václav Klaus",
)

val commonBadGuys = arrayOf(
        "imigrantům",
        "Drahošovi",
        "islámu",
        "kmotrům",
        "emigrantům",
        "zlodějům",
        "tunelářům",
        "politickým dinosaurům",
        "kolaboraci",
        "okupaci",
        "politickým náměstkům",
        "prostitutkám",
        "narkomafii",
        "lobbistům",           
)

val commonPatrioticLine = arrayOf(
        "Tato země\n je naše!",
        "Zemi si vzít\n nenecháme!",
        "Proti \nislámu!",
        "Proti \nterorismu!",
        "Za naše děti!",
        "Svou zemi vám nedáme!"
        "Rovnost, svornost, bratrství!",
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
        "hlupákům a\n populistům",
        "starým strukturám",
        "<bad-guys> a\\n <bad-guys>"
)

val commonContent = """

content = <simples> +++ <footer>
content = Stop +++ <stop> +++\n<footer>
content = <loving-header> +++ Volí ho i\n <respected-people> +++ <footer>

footer =  <loving-footer> | <patriotic-line>

"""
