export default [
    {
        question: "Hvis arbejdet ikke kan observeres på grund af terræn, skal der en ekstra vagt på. Sandt eller falsk?",
        options:[
            {
                id:"0",
                options:"A",
                answer:"Sandt.",
                explain:"KORREKT! -  Den ekstra vagt sørger for, at der er udsyn fra flere vinkler, hvis der ikke kan observeres på grund af terræn. Vagtfordelingen er 2 oppe og 1 nede."
            },
            {
                id:"1",
                options:"B",
                answer:"Falsk.",
                explain:"FORKERT! -  Den ekstra vagt sørger for, at der er udsyn fra flere vinkler, hvis der ikke kan observeres på grund af terræn. Vagtfordelingen er 2 oppe og 1 nede."
            },
        ],
        correctAnswerIndex: 0
    },
    {
        //exemple på struktur af data pakke for spørgsmål
        question: "Hvornår skal du måle gasniveauet første gang?",
        options:[
            {
                id:"0",
                options:"A",
                answer:"Inden arbejdet begynder.",
                explain:"KORREKT! - Toximeter skal bruges inden arbejdet for at kontrollere at arbejdsforhold er sikre. "
            },
            {
                id:"1",
                options:"B",
                answer:"Mens arbejdet er i gang.",
                explain:"FORKERT! - Du skal stadig holde øje med gasniveauet mens du arbejder, men det er ikke første gang du skal gøre det."
            },
            {
                id:"2",
                options:"C",
                answer:"Efter arbejdet er færdigt.",
                explain:"FORKERT! - Når arbejdet er færdigt behøver du ikke at måle gasniveauet."
            },
        ],
        correctAnswerIndex: 0
    },
    {
        //exemple på struktur af data pakke for spørgsmål
        question: "Hvad er ikke en vagts opgave?",
        options:[
            {
                id:"0",
                options:"A",
                answer:"Være i kontakt med arbejdende kollegaer.",
                explain:"FORKERT! - Dette er en vagts opgave."
            },
            {
                id:"1",
                options:"B",
                answer:"Tilkalde hjælp, fx via mobiltelefon.",
                explain:"FORKERT! - Dette er en vagts opgave."
            },
            {
                id:"2",
                options:"C",
                answer:"Fokusere på opgaven.",
                explain:"FORKERT! - Dette er en vagts opgave."
            },
            {
                id:"3",
                options:"D",
                answer:"Selv at skulle teste redningsudstyret.",
                explain:"KORREKT! - Det er ikke en vagts opgave at skulle prøve redningsudstyret, det skal andre gøre evt. personen der skal have det på."
            },
        ],
        correctAnswerIndex: 3
    },
    {
        //exemple på struktur af data pakke for spørgsmål
        question: "Hvilken farlig gas er der risiko for at støde på i Odenses kloakker?",
        options:[
            {
                id:"0",
                options:"A",
                answer:"Metangas.",
                explain:"FORKERT! - Du vil støde på metangas i Odenses kloakker, men det er ikke den farlige gas du skal være opmærksom på."
            },
            {
                id:"1",
                options:"B",
                answer:"Oxygen.",
                explain:"FORKERT! - Ren oxygen er farligt, men den form af oxygen støder du ikke på i Odenses kloakker."
            },
            {
                id:"2",
                options:"C",
                answer:"Cyanidgas.",
                explain:"KORREKT! - Dette er en farlig gas man kan støde på i Odenses kloakker. De steder vil være markeret med et skilt: “Fare cyanid”."
            },
            {
                id:"3",
                options:"D",
                answer:"F-gas.",
                explain:"FORKERT! - Denne gas kan du ikke støde på i Odenses kloakker."
            },
        ],
        correctAnswerIndex: 2
    },
    {
        //exemple på struktur af data pakke for spørgsmål
        question: "Hvor lang tid skal man vente, før man kan kigge på toxmeteret?",
        options:[
            {
                id:"0",
                options:"A",
                answer:"15 sekunder.",
                explain:"FORKERT! - Dette er ikke den korrekt mængde tid man skal vente, inden man kigger på toxmeteret."
            },
            {
                id:"1",
                options:"B",
                answer:"30 sekunder.",
                explain:"KORREKT! - 30 sekunder er den mængde tid man skal vente, inden man kigger på toxmeteret. Det tager lidt tid for den at komme frem til en korrekt måling."
            },
            {
                id:"2",
                options:"C",
                answer:"20 sekunder.",
                explain:"FORKERT! - Dette er ikke den korrekt mængde tid man skal vente, inden man kigger på toxmeteret."
            },
            {
                id:"3",
                options:"D",
                answer:"42 sekunder.",
                explain:"FORKERT! - Dette er ikke den korrekt mængde tid man skal vente, inden man kigger på toxmeteret."
            },
        ],
        correctAnswerIndex: 1
    },
]