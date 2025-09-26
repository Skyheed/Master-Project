export default [
    {
        question: "Hvem må udføre arbejde på elektriske installationer uden spænding?",
        options:[
            {
                id:"0",
                options:"A",
                answer:"Kun instruerede medarbejdere, der har gennemført et el-sikkerhedskursus.",
                explain:"KORREKT! - Når man arbejder med elektriske installationer er det ofte nødvendigt at man har gennemført et el-sikkerhedskursus."
            },
            {
                id:"1",
                options:"B",
                answer:"Kun eksterne elektrikere.",
                explain:"FORKERT! - Selv om de er elektrikere, må de stadig ikke bare udføre opgaven."
            },
            {
                id:"2",
                options:"C",
                answer:"Enhver medarbejder, der har arbejdet med maskiner før.",
                explain:"FORKERT! - Det er ikke nok bare at have arbejdet med en maskine før."
            },
            {
                id:"3",
                options:"D",
                answer:"Alle ansatte, der føler sig sikre på opgaven.",
                explain:"FORKERT! - Det er ikke alle ansatte som må udføre denne opgave."
            },
        ],
        correctAnswerIndex: 0
    },
    {
        //exemple på struktur af data pakke for spørgsmål
        question: "Hvad skal du gøre før du begynder på en reparations- eller serviceopgave på en maskine?",
        options:[
            {
                id:"0",
                options:"A",
                answer:"Kontrollere værktøjet og starte maskinen.",
                explain:"FORKERT! - Det er godt at have styr på sit grej, men det er ikke nok."
            },
            {
                id:"1",
                options:"B",
                answer:"Afmærke området du skal arbejde med kegler og sikkerhedstape.",
                explain:"FORKERT! - Selv om der skal afmærkes i nogle situationer, er dette ikke en af de situationer."
            },
            {
                id:"2",
                options:"C",
                answer:"Kontakte din kollega og vente på videre besked.",
                explain:"FORKERT! - Det er godt at have kontakt til ens kollegaer, men det er ikke relevant i denne situation."
            },
            {
                id:"3",
                options:"D",
                answer:"Afbryde el, aflåse sikkerhedsafbryder og sætte skilt op med kontaktinfo.",
                explain:"KORREKT! - Det er vigtigt at sikkerheds orientere sig inden man går i gang med arbejdet, særligt når det angår farlige ting som el."
            },
        ],
        correctAnswerIndex: 3
    },
    {
        //exemple på struktur af data pakke for spørgsmål
        question: "Hvad er vigtigt at huske, når man løfter tunge ting?",
        options:[
            {
                id:"0",
                options:"A",
                answer:"Max hvert år.",
                explain:"FORKERT! - Dette er ikke det korrekte interval for hvornår kurset skal opdateres."
            },
            {
                id:"1",
                options:"B",
                answer:"Max hvert 5 år.",
                explain:"FORKERT! - Dette er ikke det korrekte interval for hvornår kurset skal opdateres."
            },
            {
                id:"2",
                options:"C",
                answer:"Kun ved jobskifte.",
                explain:"FORKERT! - Der kan gå mange år, inden man skifter job og derfor kan ens kursus være for gammelt."
            },
            {
                id:"3",
                options:"D",
                answer:"Max hvert 2 år.",
                explain:"KORREKT! - I følge lovgivningen skal el-sikkerhedskurser opdateres regelmæssigt, dog senest ved 2 år."
            },
        ],
        correctAnswerIndex: 3
    },
]