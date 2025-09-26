export default [
    {
        question: "Hvor ofte skal en kran efterses?",
        options:[
            {
                id:"0",
                options:"A",
                answer:"En gang månedligt.",
                explain:"FORKERT! - Dette er ikke det korrekte interval for hvornår en kran skal efterses."
            },
            {
                id:"1",
                options:"B",
                answer:"To gange årligt.",
                explain:"FORKERT! - Dette er ikke det korrekte interval for hvornår en kran skal efterses."
            },
            {
                id:"2",
                options:"C",
                answer:"En gang halvårligt.",
                explain:"FORKERT! - Dette er ikke det korrekte interval for hvornår en kran skal efterses."
            },
            {
                id:"3",
                options:"D",
                answer:"En gang årligt.",
                explain:"KORREKT! - En kran skal efterses på årlig basis for slid og skader etc."
            },
        ],
        correctAnswerIndex: 3
    },
    {
        //exemple på struktur af data pakke for spørgsmål
        question: "Hvor højt må en byrde være når den transporteres?",
        options:[
            {
                id:"0",
                options:"A",
                answer:"Altid i 2 meters højde.",
                explain:"Dette er ikke den rette højde og kan skabe problemer alt afhængig af omgivelsernes størrelse og højder."
            },
            {
                id:"1",
                options:"B",
                answer:"Så lavt som muligt.",
                explain:"KORREKT! - Højden byrden må være i, kommer meget an på hvilke omgivelser der er og hvor den skal transporteres hen. Som tommelfingerregel skal det altid være så lavt som muligt."
            },
            {
                id:"2",
                options:"C",
                answer:"Så højt som muligt.",
                explain:"FORKERT! - Det kan være meget farligt. I tilfælde af at byrden falder, kan den gå i stykker og skade andre."
            },
            {
                id:"3",
                options:"D",
                answer:"Altid i 1 meters højde.",
                explain:"FORKERT! - Dette er ikke den rette højde og kan skabe problemer alt afhængig af omgivelsernes størrelse og højder."
            },
        ],
        correctAnswerIndex: 1
    },
    {
        //exemple på struktur af data pakke for spørgsmål
        question: "Hvor meget skal en sjækel og kæde kunne bære i forhold til byrden?",
        options:[
            {
                id:"0",
                options:"A",
                answer:"Mindst 4 gange så meget som vægten på byrden.",
                explain:"KORREKT! - Det skulle kunne bære mindst 4 gange byrdens vægt for sikkerhedens skyld."
            },
            {
                id:"1",
                options:"B",
                answer:"Dobbelt så meget som vægten på byrden.",
                explain:"FORKERT! - Dette er ikke det korrekte forhold mellem byrdens vægt og sjækel og kædes styrke."
            },
            {
                id:"2",
                options:"C",
                answer:"Halvt så meget som vægten på byrden.",
                explain:"FORKERT! - Hvis en sjækel og kæde kun kan bære halvdelen af byrdens vægt, ville de gå i stykker."
            },
            {
                id:"3",
                options:"D",
                answer:"Mindst 6 gange så meget som vægten på byrden.",
                explain:"FORKERT! - Det er mere end rigeligt hvad angår hvor meget sjækel og kæde skal kunne holde til."
            },
        ],
        correctAnswerIndex: 0
    },
    {
        //exemple på struktur af data pakke for spørgsmål
        question: "Truckcertifikat er ikke påkrævet ved truck, der ikke er låst til max 1 meter. Sandt eller falsk?",
        options:[
            {
                id:"0",
                options:"A",
                answer:"Sandt.",
                explain:"FORKERT! - Truckcertifikat er altid påkrævet ved føring af truck, der ikke er låst til max 1 meter."
            },
            {
                id:"1",
                options:"B",
                answer:"Falsk.",
                explain:"KORREKT! - Truckcertifikat er altid påkrævet ved føring af truck, der ikke er låst til max 1 meter."
            },
        ],
        correctAnswerIndex: 1
    },
]