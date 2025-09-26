export default [
    {
        question: "Hvor længe må du max anvende faldsikring?",
        options:[
            {
                id:"0",
                options:"A",
                answer:"Max 5 timer.",
                explain:"FORKERT! - Det er ikke den korrekte mængde tid du må anvende faldsikring."
            },
            {
                id:"1",
                options:"B",
                answer:"Max 3 timer.",
                explain:"FORKERT! - Det er ikke den korrekte mængde tid du må anvende faldsikring."
            },
            {
                id:"2",
                options:"C",
                answer:"Max 6 timer.",
                explain:"FORKERT! - Det er ikke den korrekte mængde tid du må anvende faldsikring."
            },
            {
                id:"3",
                options:"D",
                answer:"Max 4 timer.",
                explain:"KORREKT! - Du må kun anvende faldsikring i max 4 timer."
            },
        ],
        correctAnswerIndex: 3
    },
    {
        //exemple på struktur af data pakke for spørgsmål
        question: "Hvad er bl.a formålet med faldsikring?",
        options:[
            {
                id:"0",
                options:"A",
                answer:"At forhindre en person fra at falde ned.",
                explain:"KORREKT! - Faldsikring sørger for at en person kan hejses og sænkes om nødvendigt, ned fra en given højde."
            },
            {
                id:"1",
                options:"B",
                answer:"At hjælpe en person der er kommet til skade.",
                explain:"FORKERT! - Faldsikring skal forhindre at personer kommer til skade."
            },
            {
                id:"2",
                options:"C",
                answer:"At løfte en person op på et stillads eller en stige.",
                explain:"FORKERT! - Faldsikring anvendes ikke til at hejse en person op til noget."
            },
            {
                id:"3",
                options:"D",
                answer:"At sænke en person fra 2. etage.",
                explain:"FORKERT! - Dette er ikke hvad man bør bruge faldsikring til."
            },
        ],
        correctAnswerIndex: 0
    },
    {
        //exemple på struktur af data pakke for spørgsmål
        question: "Hvor skal der anvendes 3-ben med håndspil og falddæmper?",
        options:[
            {
                id:"0",
                options:"A",
                answer:"På den udvendige side af et gelænder.",
                explain:"FORKERT! - En 3-ben er ikke lavet til denne opgave."
            },
            {
                id:"1",
                options:"B",
                answer:"Ved arbejde i højden.",
                explain:"FORKERT! - En 3-ben anvendes ikke ved arbejde i højder, det er stiger, stillads og personlift, der bruges der."
            },
            {
                id:"2",
                options:"C",
                answer:"I kloakker, brønde, tanke og pumpestationer.",
                explain:"KORREKT! - I disse områder skal man ofte sænkes ned i et indelukket rum. For at sikre personen på vej ned, anvendes 3-ben."
            },
            {
                id:"3",
                options:"D",
                answer:"I udgravninger, el-master og kraner.",
                explain:"FORKERT! - Faldsikring anvendes ikke her, men det gør stillads og stiger."
            },
        ],
        correctAnswerIndex: 2
    },
]