
//ingles=lo leo yo. español=lo lee el usuario.

const answers = {
    musicType: null,
    guitarStyle: null,
    sound: null,
    budget: null,
    size: null,
    artist: null
};

const questions = {
    musicTypes: [
        { letter: "A", option: "Rock" },
        { letter: "B", option: "Pop" },
        { letter: "C", option: "Blues" },
        { letter: "D", option: "Folk" }
    ],
    guitarStyles: [
        { letter: "A", option: "Eléctrica" },
        { letter: "B", option: "Acústica" }
    ],
    sounds: [
        { letter: "A", option: "Suave" },
        { letter: "B", option: "Vibrante" }
    ],
    budgets: [
        { letter: "A", option: "Bajo (Menos de 500)" },
        { letter: "B", option: "Medio (Entre 500 y 1000)" },
        { letter: "C", option: "Alto (Más de 1000)" }
    ],
    sizes: [
        { letter: "A", option: "pequeña" },
        { letter: "B", option: "Mediana" },
        { letter: "C", option: "Grande" }
    ],
    artists: [
        { letter: "A", option: "George Harrison" },
        { letter: "B", option: "Paul McCartney"},
        { letter: "C", option: "Eric Clapton" },
        { letter: "D", option: "Brian May"},
        { letter: "E", option: "Slash" }
    ]
};

function promptOptions(question, options) {
    let promptMessage = question + "\n";
    for (let i = 0; i < options.length; i++) {
        promptMessage += options[i].letter + ". " + options[i].option + "\n";
    }
    let userInput = prompt(promptMessage).toUpperCase();  // para que se haga mayuscula 
    return userInput;
}

function collectAnswers() {
    console.log("Buscando tu guitarra ideal..");
    
    answers.musicType = promptOptions("1. ¿Qué tipo de música te gusta tocar? Por favor, ingresa la letra de la opcion que elijas!", questions.musicTypes);
    answers.guitarStyle = promptOptions("2. ¿Prefieres una guitarra eléctrica o acústica? Por favor, ingresa la letra de la opcion que elijas!", questions.guitarStyles);
    answers.sound = promptOptions("3. ¿Te gustan las guitarras con un sonido más suave o más vibrante? Por favor, ingresa la letra de la opcion que elijas!", questions.sounds);
    answers.budget = promptOptions("4. ¿Cuál es tu presupuesto aproximado(USD)? Por favor, ingresa la letra de la opcion que elijas!", questions.budgets);
    answers.size = promptOptions("5. ¿Qué tamaño de guitarra prefieres? Por favor, ingresa la letra de la opcion que elijas!", questions.sizes);
    answers.artist = promptOptions("6. ¿Cuál de estos artistas es tu favorito? Por favor, ingresa la letra de la opcion que elijas!", questions.artists);

    console.log(answers);
}


function recommendGuitar() {
    const startTest = confirm("¿Queres descubrir cual es tu guitarra perfecta? ¡Responde estas preguntas y te ayudamos!");

    if (startTest) {
        collectAnswers();  

        const { musicType, guitarStyle, sound, budget, size, artist } = answers;

        if (!musicType || !guitarStyle || !sound || !budget || !size || !artist) {
            alert("Por favor, responde en todas las preguntas!");
            return;
        }

        if (guitarStyle === "A") {  // Eléctrica
            if (musicType === "A") {  // Rock
                recommendedGuitar = "Fender Stratocaster", "Rickenbecker 4001S" ;
                explanation = " Ideal para rock con su sonido poderoso.";
            } else if (musicType === 'B') {  // Pop
                recommendedGuitar = "Fender Jazzmaster";
                explanation = " Versátil, ideal para pop.";
            } else if (musicType === "C") {  // Blues
                recommendedGuitar = "Gibson Les Paul", "Gibson ES-335";
                explanation = " Ofrece un sonido cálido para blues.";
            } else if (musicType === "D") {  // Folk
                recommendedGuitar = "Rickenbecker 300";
                explanation = " Tiene un sonido distintivo para folk.";
            }
        } else if (guitarStyle === "B") {  // Acústica
            if (sound === "A") {  // Suave
                recommendedGuitar = "Martin D-28";
                explanation = " Tiene un sonido suave y profundo.";
            } else if (sound === "B") {  // vibrante
                recommendedGuitar = "Martin HD-28";
                explanation = " Ofrece un sonido vibrante.";
            }
        }

        const artistPreferences = {
            "A": "Fender Stratocaster", // George
            "B": "Rickenbecker 4001S", // Paull
            "C": "Gibson Les Paul", // Clapton
            "D": "Red Special",
            "E": "Gibson Les Paul"
        };

        if (artist in artistPreferences) {
            recommendedGuitar = artistPreferences[artist];
            explanation += " Esta guitarra usaba " + capitalize(questions.artists.find(a => a.letter === artist).option) + ".";
        }

        alert("Tu guitarra perfecta es " + recommendedGuitar + "." + explanation);
    } else {
        alert("Parece que ya sebes cual es tu guitarra perfecta ¡Hasta luego!");
    }
}

function capitalize(str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}

recommendGuitar();






