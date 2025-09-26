export default [
    {
        question: "Hvilken hældning skal stiger have når de opstilles?",
        options:[
            {
                id:"0",
                options:"A",
                answer:"ca. 85 grader.",
                explain:"Dette er ikke den korrekte vinkel på en stiges hældning og kan forårsage skridninger."
            },
            {
                id:"1",
                options:"B",
                answer:"ca. 55 grader.",
                explain:"Dette er ikke den korrekte vinkel på en stiges hældning og kan forårsage skridninger."
            },
            {
                id:"2",
                options:"C",
                answer:"ca. 75 grader.",
                explain:"KORREKT! - Dette er den korrekte vinkel på stigers hældning for at undgå skridning"
            },
            {
                id:"3",
                options:"D",
                answer:"ca. 65 grader.",
                explain:"Dette er ikke den korrekte vinkel på en stiges hældning og kan forårsage skridninger."
            },
        ],
        correctAnswerIndex: 2
    },
    {
        //exemple på struktur af data pakke for spørgsmål
        question: "Hvad er minimumshøjden for når der bør bruges faldsikring på stiger?",
        options:[
            {
                id:"0",
                options:"A",
                answer:"3 meter.",
                explain:"Dette er ikke minimumshøjden."
            },
            {
                id:"1",
                options:"B",
                answer:"2 meter.",
                explain:"KORREKT! - Når højden rammer 2 meter, bør der bruges faldsikring på stiger, for at beskytte folk under dit arbejde."
            },
            {
                id:"2",
                options:"C",
                answer:"1 meter.",
                explain:"Dette er ikke minimumshøjden."
            },
            {
                id:"3",
                options:"D",
                answer:"4 meter.",
                explain:"Dette er ikke minimumshøjden."
            },
        ],
        correctAnswerIndex: 1
    },
    {
        //exemple på struktur af data pakke for spørgsmål
        question: "Hvornår skal man bruge en fodmand?",
        options:[
            {
                id:"0",
                options:"A",
                answer:"Ved ikke-fastgjorde stiger på 5 meter.",
                explain:"KORREKT! - I denne højde kan man komme alvorligt til skade og stiger kan være mere usikre at arbejde på."
            },
            {
                id:"1",
                options:"B",
                answer:"Ved ikke-fastgjorde stiger på 3 meter.",
                explain:"FORKERT! - Det er ikke nødvendigt at have en fodmand ved ikke-fastgjorde stiger på 3 meter."
            },
            {
                id:"2",
                options:"C",
                answer:"Ved ikke-fastgjorde stiger på 2 meter.",
                explain:"FORKERT! - Det er ikke nødvendigt at have en fodmand ved ikke-fastgjorde stiger på 2 meter."
            },
            {
                id:"3",
                options:"D",
                answer:"Ved ikke-fastgjorde stiger på 4 meter.",
                explain:"FORKERT! - Det er ikke nødvendigt at have en fodmand ved ikke-fastgjorde stiger på 4 meter."
            },
        ],
        correctAnswerIndex: 0
    },
    {
        //exemple på struktur af data pakke for spørgsmål
        question: "Hvor længe må man arbejde på stiger?",
        options:[
            {
                id:"0",
                options:"A",
                answer:"Max 1 time i træk.",
                explain:"FORKERT! - Dette overgår hvor lang tid du må arbejde på stiger i træk."
            },
            {
                id:"1",
                options:"B",
                answer:"Højst 5 timer pr. dag.",
                explain:"FORKERT! - Dette overgår hvor lang tid du må arbejde på stiger om dagen."
            },
            {
                id:"2",
                options:"C",
                answer:"Højst 3 ½ timer pr. dag.",
                explain:"FORKERT! - Dette overgår hvor lang tid du må arbejde på stiger om dagen."
            },
            {
                id:"3",
                options:"D",
                answer:"Max ½ time i træk.",
                explain:"KORREKT! - Du må kun arbejde på stiger max 30 minutter i træk. I løbet af en hel dag må du max arbejde på stiger i en samlet tid af 2 timer og 30 minutter."
            },
        ],
        correctAnswerIndex: 3
    },
]