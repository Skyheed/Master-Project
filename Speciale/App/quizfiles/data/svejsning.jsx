export default [
    {
        question: "Hvilken uddannelse skal man have for at må svejse?",
        options:[
            {
                id:"0",
                options:"A",
                answer:"§26-uddannelse.",
                explain:"FORKERT! - Dette var hvad uddannelsen hed før, men den har siden skiftet navn."
            },
            {
                id:"1",
                options:"B",
                answer:"§9-uddannelse.",
                explain:"FORKERT! - Dette er den lovpligtige arbejdsmiljøuddannelse."
            },
            {
                id:"2",
                options:"C",
                answer:"§17-uddannelse.",
                explain:"KORREKT! - Dette er et kursus omkring svejsning og er et lovkrav, hvis man skal svejse."
            },
            {
                id:"3",
                options:"D",
                answer:"§12-uddannelse.",
                explain:"FORKERT! - Denne uddannelse eksisterer ikke."
            },
        ],
        correctAnswerIndex: 2
    },
    {
        //exemple på struktur af data pakke for spørgsmål
        question: "Hvilke værnemidler er ikke nødvendige, når man svejser?",
        options:[
            {
                id:"0",
                options:"A",
                answer:"Åndedrætsværn.",
                explain:"FORKERT! - Du skal altid have åndedrætsværn eller udsugningssystemer til for at beskytte mod svejserøg."
            },
            {
                id:"1",
                options:"B",
                answer:"Sikkerhedsstøvler.",
                explain:"KORREKT! - Sikkerhedsstøvler er ikke nødvendige når det kommer til svejsning."
            },
            {
                id:"2",
                options:"C",
                answer:"Handsker.",
                explain:"FORKERT! - Du skal altid anvende handsker når du svejser, for at beskytte mod høje temperaturer."
            },
            {
                id:"3",
                options:"D",
                answer:"Svejseskærm.",
                explain:"FORKERT! - Du skal altid anvende en svejseskærm for at beskytte dine øjne og dit ansigt."
            },
        ],
        correctAnswerIndex: 1
    },
    {
        //exemple på struktur af data pakke for spørgsmål
        question: "Hvad er det første, du skal have styr på, inden du svejser?",
        options:[
            {
                id:"0",
                options:"A",
                answer:"Svejsepladsen skal ikke generer andre.",
                explain:"FORKERT! - Dette er ikke det vigtigste, men du skal selvfølgelig ikke udsætte andre for passiv svejsning/”svejseøjne” og svejserøg."
            },
            {
                id:"1",
                options:"B",
                answer:"Svejsepladsen må ikke være for stor.",
                explain:"FORKERT! - Dette er ikke vigtigt."
            },
            {
                id:"2",
                options:"C",
                answer:"Svejsepladsen skal være stabil.",
                explain:"FORKERT! - Dette er vigtigt, men ikke det vigtigste eller første du skal have styr på."
            },
            {
                id:"3",
                options:"D",
                answer:"Svejsepladsen skal være velventileret.",
                explain:"KORREKT! - Ventilation er utrolig vigtig når det kommer til svejsning, da der kan opstå farlig røg undervejs."
            },
        ],
        correctAnswerIndex: 3
    },
    {
        //exemple på struktur af data pakke for spørgsmål
        question: "Hvad skal værnemidlerne bl.a. beskytte dig imod?",
        options:[
            {
                id:"0",
                options:"A",
                answer:"Sved og ubehag under arbejdet.",
                explain:"FORKERT! - Det kan godt blive varmt at have et tykt lag af arbejdstøj på, men det må man leve med. Din sikkerhed er vigtigere."
            },
            {
                id:"1",
                options:"B",
                answer:"Gløder og IR-stråler.",
                explain:"FORKERT! - Selvom svejsning laver gløder, er det ikke Infrarød stråling  som er biprodukt af det."
            },
            {
                id:"2",
                options:"C",
                answer:"Regn og slud.",
                explain:"FORKERT! - Ingen værnemidler beskytter mod vejret."
            },
            {
                id:"3",
                options:"D",
                answer:"Gnister og UV-stråler.",
                explain:"KORREKT! - Svejseskærmen sørger for at beskytte dine øjne mod UV stråler og gnister fra svejsningen."
            },
        ],
        correctAnswerIndex: 3
    },
]