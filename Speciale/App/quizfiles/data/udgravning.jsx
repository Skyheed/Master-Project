export default [
    {
        question: "Hvad kan ske hvis udgravninger ikke udføres korrekt?",
        options:[
            {
                id:"0",
                options:"A",
                answer:"Der kan komme en masse vand i hullet.",
                explain:"FORKERT! - Det går an på hvor der graves henne, men generelt er det ikke konsekvensen af ukorrekt udførsel af arbejdet."
            },
            {
                id:"1",
                options:"B",
                answer:"Udløsning af farlige stoffer.",
                explain:"FORKERT! - Det kan ske at man rammer et gasrør, men det er ikke den generelle konsekvens af ukorrekt udførsel af arbejdet."
            },
            {
                id:"2",
                options:"C",
                answer:"Værktøjet kan gå i stykker.",
                explain:"FORKERT! - Værktøj kan blive brugt korrekt mens udfaldet af opgaven er forkert og har ikke betydning for om værktøjet går i stykker."
            },
            {
                id:"3",
                options:"D",
                answer:"Der kan ske sammenfald af jord.",
                explain:"KORREKT - I tilfælde af at udgravningen ikke bliver sikret godt nok eller de korrekte foranstaltninger ikke træffes, kan der ske uheld."
            },
        ],
        correctAnswerIndex: 3
    },
    {
        //exemple på struktur af data pakke for spørgsmål
        question: "Under hvilke forhold kan udgravning udføres med lodrette sider?",
        options:[
            {
                id:"0",
                options:"A",
                answer:"Hvis udgravningen er mindre end 1,4 meter og der graves i hård jord.",
                explain:"FORKERT! - Udgravningen kan godt være på 1,4 meter, men hvis jorden er hård bør der ikke graves med lodrette sider."
            },
            {
                id:"1",
                options:"B",
                answer:"Hvis udgravningen er mindre end 1,7 meter og jordforholdene er stabile.",
                explain:"KORREKT - Hvis udgravningen ikke er for dyb og forholdene stabile, kan det lade sig gøre at grave direkte ned."
            },
            {
                id:"2",
                options:"C",
                answer:"Hvis udgravningen er mindre end 2,3 meter og der ikke arbejdes i bunden.",
                explain:"FORKERT! - Jordforholdene og dybden opfylder ikke kravene for udgravning, som kan udføres med lodrette sider."
            },
            {
                id:"3",
                options:"D",
                answer:"Hvis der kun arbejdes i bunden og jordforholdene er stabile.",
                explain:"FORKERT! - Det er ikke nok at jordforholdene er stabile."
            },
        ],
        correctAnswerIndex: 1
    },
    {
        //exemple på struktur af data pakke for spørgsmål
        question: "Med hvilken vinkelgrad skal du placere en kegle væk fra udgravninger på 5 meters dybde?",
        options:[
            {
                id:"0",
                options:"A",
                answer:"50 grader.",
                explain:"FORKERT! - Dette er den forkerte vinkelgrad."
            },
            {
                id:"1",
                options:"B",
                answer:"65 grader.",
                explain:"FORKERT! - Dette er den forkerte vinkelgrad."
            },
            {
                id:"2",
                options:"C",
                answer:"45 grader.",
                explain:"KORREKT - Hvis man står i siden ud mod keglen, skal den stå i en 45 graders vinkel væk fra gravningen."
            },
            {
                id:"3",
                options:"D",
                answer:"30 grader.",
                explain:"FORKERT! - Dette er den forkerte vinkelgrad."
            },
        ],
        correctAnswerIndex: 2
    },
    {
        //exemple på struktur af data pakke for spørgsmål
        question: "Hvordan skal bundfladen af en udgravning i et planlagt projekt sikres?",
        options:[
            {
                id:"0",
                options:"A",
                answer:"Ved hjælp af spunsvæg.",
                explain:"FORKERT! - Spunsvægge bruges i siderne af en udgravning."
            },
            {
                id:"1",
                options:"B",
                answer:"Med sand og sten.",
                explain:"FORKERT! - Sand og almindelige sten kan ikke hjælpe med at sikre bundfladen. Det vil muligvis forværre udgravningen."
            },
            {
                id:"2",
                options:"C",
                answer:"Med nøddesten.",
                explain:"KORREKT - Nøddesten er lavet på en anderledes måde end almindelige sten og kan sikre bundfladen."
            },
            {
                id:"3",
                options:"D",
                answer:"Ved hjælp af planker og plader.",
                explain:"FORKERT! - Planker og plader bruges også til siderne i tilfælde af at man ikke kan bruge spunsvægge."
            },
        ],
        correctAnswerIndex: 2
    },
]