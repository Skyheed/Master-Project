export default [
    {
        question: "Hvad skal være opfyldt, hvis der skal arbejdes på spændingsførende dele, hvor spændingen ikke kan afbrydes?",
        options:[
            {
                id:"0",
                options:"A",
                answer:"Der skal være givet en mundtlig tilladelse.",
                explain:"FORKERT! - En mundtlig tilladelse har ingen autoritet og er derfor ikke nok."
            },
            {
                id:"1",
                options:"B",
                answer:"Der skal være en klar skriftlig aftale, og en faglært person skal være til stede.",
                explain:"KORREKT! - Det er vigtigt man har en aftale hvor man arbejder i tilfælde af uheld, samt en makker der kan “redde” en hvis det skulle gå galt."
            },
            {
                id:"2",
                options:"C",
                answer:"Man skal informere nærmeste kollega.",
                explain:"FORKERT! - Din kollega har ikke nogen autoritet til at lade dig arbejde på spændingsførende dele."
            },
            {
                id:"3",
                options:"D",
                answer:"Hvis man er faglært kan man selv vurdere om arbejdet kan udføres sikkert.",
                explain:"FORKERT! - Arbejde på sådanne dele, hvor spændingen ikke kan afbrydes, må ALDRIG gøres alene!"
            },
        ],
        correctAnswerIndex: 1
    },
    {
        //exemple på struktur af data pakke for spørgsmål
        question: "Hvem må arbejde på eller i nærheden af højspænding (over 1000 volt AC) hos VandCenter Syd?",
        options:[
            {
                id:"0",
                options:"A",
                answer:"Kun eksterne elektrikere.",
                explain:"FORKERT! - En ekstern elektriker opfylder måske ikke kravene til at arbejde med højspænding."
            },
            {
                id:"1",
                options:"B",
                answer:"Alle medarbejdere efter en kort instruktion.",
                explain:"FORKERT! - Alle medarbejdere opfylder måske ikke kravene til at arbejde med højspænding."
            },
            {
                id:"2",
                options:"C",
                answer:"Teknikere, hvis de bærer sikkerhedshjelm.",
                explain:"FORKERT! - Sikkerhedshjelm og simpel instruktion er ikke nok til at man må arbejde med højspænding."
            },
            {
                id:"3",
                options:"D",
                answer:"Kun el-personale med særlig aftale og kompetencer.",
                explain:"KORREKT! - Det er kun personale med ekstra færdigheder og viden der må arbejde med højspænding."
            },
        ],
        correctAnswerIndex: 3
    },
    {
        //exemple på struktur af data pakke for spørgsmål
        question: "Når du skal arbejde på eller nær spændingsførende dele, skal du benytte LAUS beskyttelsesudstyr. Hvilken af følgende er udstyr du skal bruge?",
        options:[
            {
                id:"0",
                options:"A",
                answer:"Øjenværn, handsker og trædemåtte.",
                explain:"KORREKT! - Øjenværn, handsker og trædemåtte er med til at beskytte dig og udsatte dele i tilfælde af et uheld."
            },
            {
                id:"1",
                options:"B",
                answer:"Ansigtsværn og brandsikre handsker.",
                explain:"FORKERT! - Ansigtsværn er ikke nok beskyttelse og brandsikre handsker mindsker ikke nødvendigvis ledelse af spænding."
            },
            {
                id:"2",
                options:"C",
                answer:"Sikkerhedssko og Hjelm.",
                explain:"FORKERT! - Sikkerhedssko er ikke nok som isolering, og hjelm ville ikke hjælpe i denne situation."
            },
            {
                id:"3",
                options:"D",
                answer:"Åndedrætsværn og isolerende arbejdstøj.",
                explain:"FORKERT! - Åndedrætsværn og isolerende arbejdstøj er ikke korrekt at bruge."
            },
        ],
        correctAnswerIndex: 0
    },
    {
        //exemple på struktur af data pakke for spørgsmål
        question: "Før du udfører måle- og justeringsopgaver, skal du altid teste måleudstyret, inden du tager det i brug. Sandt eller falsk?",
        options:[
            {
                id:"0",
                options:"A",
                answer:"Sandt.",
                explain:"KORREKT! - Du skal altid teste måleudstyret inden du tager det i brug! Vi skal sikre os at udstyret måler korrekt."
            },
            {
                id:"1",
                options:"B",
                answer:"Falsk.",
                explain:"FORKERT! - Du skal altid teste måleudstyret inden du tager det i brug! Vi skal sikre os at udstyret måler korrekt."
            },
        ],
        correctAnswerIndex: 0
    },
]