export default [
    {
        question: "Hvornår er der krav om lovpligtig stilladsuddannelse?",
        options:[
            {
                id:"0",
                options:"A",
                answer:"Når stilladset er over 3 meter højt.",
                explain:"KORREKT! - I denne højde kan man komme alvorligt til skade i tilfælde af uheld, og en lovpligtig uddannelse er nødvendig."
            },
            {
                id:"1",
                options:"B",
                answer:"Når stilladset er over 1 meter højt.",
                explain:"FORKERT! - Stilladser på 1 meter har ikke behov for lovpligtig uddannelse."
            },
            {
                id:"2",
                options:"C",
                answer:"Når du bærer værktøj på stilladset.",
                explain:"FORKERT! - Dette kræver ikke en lovpligtig stilladsuddannelse."
            },
            {
                id:"3",
                options:"D",
                answer:"Når du arbejder i regnvejr.",
                explain:"FORKERT! - Vejrforhold vil normalt ikke ændre, hvem der må arbejde på et stillads."
            },
        ],
        correctAnswerIndex: 0
    },
    {
        //exemple på struktur af data pakke for spørgsmål
        question: "Hvor højt skal et rækværk på et stillads være, når det står højere end 2 meter?",
        options:[
            {
                id:"0",
                options:"A",
                answer:"Mindst 50 cm højt.",
                explain:"FORKERT! - Dette er ikke den korrekte højde for rækværk og kan ikke forhindre en godt nok i at falde ud over."
            },
            {
                id:"1",
                options:"B",
                answer:"Præcis 80 cm højt.",
                explain:"FORKERT! - Dette er ikke den korrekte højde for rækværk og kan ikke forhindre en godt nok i at falde ud over."
            },
            {
                id:"2",
                options:"C",
                answer:"Mindst 1 meter højt.",
                explain:"KORREKT! - Rækværket skal være mindst 1 meter for at mindske risiko for at falde ud over."
            },
            {
                id:"3",
                options:"D",
                answer:"Højden er ikke vigtig.",
                explain:"FORKERT! - Højden af rækværket, i forhold til højden af stilladset, er meget vigtig, da det skal forhindre folk at falde over."
            },
        ],
        correctAnswerIndex: 2
    },
    {
        //exemple på struktur af data pakke for spørgsmål
        question: "Hvad er en “fodmand” i forbindelse med brug af personlift, stillads og rækværk?",
        options:[
            {
                id:"0",
                options:"A",
                answer:"En person der kører liften.",
                explain:"FORKERT! - Dette er ikke hvad en fodmand er."
            },
            {
                id:"1",
                options:"B",
                answer:"En der rydder op på jorden, hvis der er nedstyrtninger.",
                explain:"FORKERT! - Dette er ikke hvad en fodmand er."
            },
            {
                id:"2",
                options:"C",
                answer:"En der sætter stilladset op.",
                explain:"FORKERT! - Dette er ikke hvad en fodmand er."
            },
            {
                id:"3",
                options:"D",
                answer:"En person i nærheden, der kan tilkaldes ved behov.",
                explain:"KORREKT! - En fodmand skal være i nærheden og kan hjælp hvis det bliver nødvendigt fra jorden ved lift og stillads eller fra den anden side af et rækværk."
            },
        ],
        correctAnswerIndex: 3
    },
]