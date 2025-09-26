export default [
    {
        question: "Hvilke værnemidler skal du bl.a. bruge når du arbejder med kemikalier?",
        options:[
            {
                id:"0",
                options:"A",
                answer:"Høreværn.",
                explain:"FORKERT! - Det er ikke det primære værnemiddel til opgaver med kemikalier."
            },
            {
                id:"1",
                options:"B",
                answer:"Ansigtsværn.",
                explain:"FORKERT! - Selv om det vil beskytte dine øjne, er der ikke plads til andre vigtigere værnemidler."
            },
            {
                id:"2",
                options:"C",
                answer:"Åndedrætsværn.",
                explain:"KORREKT! - Udover sikkerhedsbriller, handsker og arbejdstøj kan det være nødvendigt at benytte åndedrætsværn, da nogle kemikalier danner farlige gasser."
            },
            {
                id:"3",
                options:"D",
                answer:"Hjelm.",
                explain:"FORKERT! - Der er ikke risiko for at få noget i hovedet under arbejde med kemikalier."
            },
        ],
        correctAnswerIndex: 2
    },
    {
        //exemple på struktur af data pakke for spørgsmål
        question: "Hvilken app skal du have installeret på din telefon, når du arbejder med kemikalier?",
        options:[
            {
                id:"0",
                options:"A",
                answer:"KemiData.",
                explain:"FORKERT! - Dette er ikke appen VandCenter Syd bruger i forbindelse med kemikalier."
            },
            {
                id:"1",
                options:"B",
                answer:"Førstehjælp - Røde Kors.",
                explain:"FORKERT! - Denne app lærer dig om førstehjælp til forskellige situationer og passer ikke ind i arbejde med kemikalier."
            },
            {
                id:"2",
                options:"C",
                answer:"Av Min Arm.",
                explain:"FORKERT! - Denne app bruges i forbindelse med at rapportere forskellige risici. Det er ikke vigtigt at have i forbindelse med arbejde med kemikalier."
            },
            {
                id:"3",
                options:"D",
                answer:"Chemical Manager.",
                explain:"KORREKT! - Denne app kan bruges til at se SDS og kemiske risikovurderinger for kemikalierne du arbejder med."
            },
        ],
        correctAnswerIndex: 3
    },
    {
        //exemple på struktur af data pakke for spørgsmål
        question: "Hvilke af følgende er ikke kemikalier du skal passe på?",
        options:[
            {
                id:"0",
                options:"A",
                answer:"Spildevand.",
                explain:"KORREKT! - Dette er ikke et kemikalie, men man skal stadig være forsigtig, da det kan indeholde diverse bakterier mm."
            },
            {
                id:"1",
                options:"B",
                answer:"Rengøringsmidler.",
                explain:"FORKERT! - Dette indeholder kemikalier du skal passe på."
            },
            {
                id:"2",
                options:"C",
                answer:"Fældningsmidler.",
                explain:"FORKERT! - Dette indeholder kemikalier du skal passe på."
            },
            {
                id:"3",
                options:"D",
                answer:"Olieprodukter.",
                explain:"FORKERT! - Dette indeholder kemikalier du skal passe på."
            },
        ],
        correctAnswerIndex: 0
    },
]