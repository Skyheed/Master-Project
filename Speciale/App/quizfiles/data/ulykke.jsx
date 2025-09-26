export default [
    {
        question: "Hvordan får du adgang til aflåste lokaliteter eller områder?",
        options:[
            {
                id:"0",
                options:"A",
                answer:"Du skal have hjælp fra en kollega.",
                explain:"FORKERT! - En kollega kan ikke altid være der til at hjælpe dig med adgang til aflåste lokaliteter."
            },
            {
                id:"1",
                options:"B",
                answer:"Du skal følges ad med arbejdslederen.",
                explain:"FORKERT! - Arbejdslederen er ikke tilgængelig hele tiden og kan ikke lede dig hen hvor du skal være."
            },
            {
                id:"2",
                options:"C",
                answer:"Du får givet en pin-kode.",
                explain:"FORKERT! - En pin-kode er ikke nok."
            },
            {
                id:"3",
                options:"D",
                answer:"Du skal have et gæstekort og nøgle.",
                explain:"KORREKT! - Disse bliver udleveret og skal bruges for at få adgang."
            },
        ],
        correctAnswerIndex: 3
    },
    {
        question: "Er rygning tilladt hos VandCenter Syd?",
        options:[
            {
                id:"0",
                options:"A",
                answer:"Rygning er ikke tilladt hverken på vores arealer eller byggepladser.",
                explain:"KORREKT! - Du må slet ikke ryge hverken på vores arealer eller byggepladser."
            },
            {
                id:"1",
                options:"B",
                answer:"Rygning er kun tilladt i kantinen.",
                explain:"FORKERT! - Du må slet ikke ryge indenfor. Især ikke i kantinen hvor folk spiser."
            },
            {
                id:"2",
                options:"C",
                answer:"Rygning er tilladt på både vores arealer og byggepladser.",
                explain:"FORKERT! - Det er ikke tilladt at ryge hverken på vores arealer eller byggepladser af hensyn til andre og sikkerhed."
            },
            {
                id:"3",
                options:"D",
                answer:"Rygning er kun tilladt i vores rygeskure eller rygeområder.",
                explain:"FORKERT! - VandCenter Syd har ikke disse faciliteter på hverken arealer eller byggepladser."
            },
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Hvilket udsagn er sandt?",
        options:[
            {
                id:"0",
                options:"A",
                answer:"I kantinen må du gerne bære dit overtøj.",
                explain:"FORKERT! - Dit overtøj kan være beskidt og have mange bakterier på sig og må derfor ikke medbringes i kantinen hvor mange befinder sig."
            },
            {
                id:"1",
                options:"B",
                answer:"Du skal altid bære minimum en refleksvest klasse 2 når du færdes udendørs på vores produktionsanlæg.",
                explain:"FORKERT! - Når du færdes udendørs på vores produktionsanlæg, skal du bære som minimum en klasse 1 refleksvest."
            },
            {
                id:"2",
                options:"C",
                answer:"Du skal være OBS på hastighedsbegrænsninger på vores arealer.",
                explain:"KORREKT! - Du kan ikke bare køre som du vil. Folk går rundt på vores arealer, så du skal være opmærksom på hastighedsbegrænsningerne og overholde dem."
            },
            {
                id:"3",
                options:"D",
                answer:"Der er ingen hastighedsbegrænsninger på vores arealer.",
                explain:"FORKERT! - Der er hastighedsbegrænsninger på vores arealer."
            },
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Skal du være vaccineret hvis du arbejder med spildevand?",
        options:[
            {
                id:"0",
                options:"A",
                answer:"Ja.",
                explain:"KORREKT! - Der kan være diverse bakterier, virus og andet i spildevandet, og derfor er det vigtigt at være vaccineret."
            },
            {
                id:"1",
                options:"B",
                answer:"Nej.",
                explain:"FORKERT! - Der kan være diverse bakterier, virus og andet i spildevandet, og derfor er det vigtigt at være vaccineret."
            },
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Hvilken sygdom skal du være opmærksom på når du arbejder med spildevand?",
        options:[
            {
                id:"0",
                options:"A",
                answer:"Roskildesyge.",
                explain:"FORKERT! - Dette er en maveinfektion, typisk associeret med madforgiftning."
            },
            {
                id:"1",
                options:"B",
                answer:"Weils-syge.",
                explain:"KORREKT! - Weils sygdom er en særlig alvorlig manifestation af leptospirose og er med icterus (gulsot), nyresvigt, lungebetændelse og øget blødningstendens."
            },
            {
                id:"2",
                options:"C",
                answer:"Papegøjesyge.",
                explain:"FORKERT! - Dette er en mild sygdom med influenzalignende symptomer, som feber, muskelsmerter og hovedpine."
            },
            {
                id:"3",
                options:"D",
                answer:"Von Willebrands sygdom.",
                explain:"FORKERT! - Dette er en blødersygdom og skyldes mangel på et protein, kaldet Von Willebrands faktor."
            },
        ],
        correctAnswerIndex: 1
    },
    {
        question: "VandCenter Syd stiller høje krav til hygiejne. Hvor kan man læse om hygiejnereglerne?",
        options:[
            {
                id:"0",
                options:"A",
                answer:"I folderen: “Hygiejne og mig”.",
                explain:"FORKERT! - Denne folder eksisterer ikke hos VandCenter Syd."
            },
            {
                id:"1",
                options:"B",
                answer:"I folderen: “Sikker arbejdsplads”.",
                explain:"FORKERT! - Denne folder informerer dig om sikkerhedsorientering ved diverse arbejdsopgaver, men ikke om hygiejneregler."
            },
            {
                id:"2",
                options:"C",
                answer:"I folderen: “Hvordan holder du god hygiejne?”.",
                explain:"FORKERT! - Denne folder eksisterer ikke hos VandCenter Syd."
            },
            {
                id:"3",
                options:"D",
                answer:"I folderen: “God hygiejne ved arbejde med drikkevand”.",
                explain:"KORREKT! - Denne folder er VandCenter Syd’s egen og informere om hygiejne."
            },
        ],
        correctAnswerIndex: 3
    },
    {
        question: "Hvad er de tre skridt i rækkefølge hvis der opstår brand?",
        options:[
            {
                id:"0",
                options:"A",
                answer:"1. Løb mod nærmest vandkilde, 2. Indsaml vand i en beholder, 3. Prøv at slukke ilden.",
                explain:"FORKERT! - Du skal ikke prøve at slukke ilden. Det er vigtigst at du kommer ud."
            },
            {
                id:"1",
                options:"B",
                answer:"1. Saml dine ejendele, 2. Evakuer, 3. Tjek dig selv for skader.",
                explain:"FORKERT! - Ved at forsøge at samle sine ting, spilder man vigtig tid og kommer i større risiko."
            },
            {
                id:"2",
                options:"C",
                answer:"1. Tilkald hjælp på 112, 2. Advar om branden, 3. Evakuer.",
                explain:"FORKERT! - Dette er den forkerte rækkefølge at udføre disse skridt i."
            },
            {
                id:"3",
                options:"D",
                answer:"1. Advar om Branden, 2. Evakuer, 3. Tilkald hjælp på 112.",
                explain:"KORREKT! - Dette er den rigtige rækkefølge at udføre de tre skridt i. Det er vigtigt at sikre andre og dig selv, inden du bruger tid på andet."
            },
        ],
        correctAnswerIndex: 3
    },
    {
        question: "Ved evakuering pga. alarm eller anden ulykke skal jeg blive på samlingsstedet i 10-15 min, Sandt eller Falsk?",
        options:[
            {
                id:"0",
                options:"A",
                answer:"Sandt.",
                explain:"FORKERT! - 10-15 min er ikke nødvendigvis lang nok tid at blive på samlingsstedet."
            },
            {
                id:"1",
                options:"B",
                answer:"Falsk.",
                explain:"KORREKT! - Du skal blive på samlingsstedet indtil alarmen afblæses."
            },
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Hvor kan du finde hjertestarteren ved Ejby Mølle renseanlæg?",
        options:[
            {
                id:"0",
                options:"A",
                answer:"På bagsiden af den hvide mølle-bygning, ud mod stien langs Odense Å.",
                explain:"KORREKT! - Dette er den rigtige lokation for hjertestarteren ved Ejby Mølle renseanlæg."
            },
            {
                id:"1",
                options:"B",
                answer:"Under halvtag ved indgang til laboratoriebygning (ved porten).",
                explain:"FORKERT! - Dette er lokationen ved Skt. Jørgens Gade 213."
            },
            {
                id:"2",
                options:"C",
                answer:"Under halvtag ved hovedindgangen.",
                explain:"FORKERT! - Dette er lokationen ved Vandværksvej 7."
            },
            {
                id:"3",
                options:"D",
                answer:"Udvendigt ved hovedindgangen.",
                explain:"FORKERT! - Dette er lokationen ved Hjorslevvej 25."
            },
        ],
        correctAnswerIndex: 0   
    },
]