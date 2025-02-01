const temporadas = [
    {
        texto: "Friends es una serie de televisión. Habla sobre seis amigos que viven en Nueva York. Ellos son Rachel, Ross, Monica, Chandler, Joey y Phoebe. En la primera temporada, Rachel llega a la ciudad y empieza a vivir con Monica. Ross está triste porque su esposa lo deja. Todos pasan mucho tiempo en el café Central Perk.",
        preguntas: [
            { 
                pregunta: "¿Dónde viven los amigos?", 
                respuesta: "Nueva York", 
                alternativas: ["Los Ángeles", "Nueva York", "Miami"] 
            },
            { 
                pregunta: "¿Quién deja a Ross?", 
                respuesta: "su esposa", 
                alternativas: ["su novia", "su esposa", "su amiga"] 
            },
            { 
                pregunta: "¿Dónde pasan mucho tiempo?", 
                respuesta: "en el café Central Perk", 
                alternativas: ["en el parque", "en el café Central Perk", "en la playa"] 
            }
        ],
        conjugaciones: [
            { 
                verbo: "vivir", 
                opciones: ["vivo", "vives", "vive"], 
                correcta: "vivo", 
                instruccion: "Conjuga el verbo 'vivir' en YO:" 
            },
            { 
                verbo: "estar", 
                opciones: ["estoy", "estás", "está"], 
                correcta: "estoy", 
                instruccion: "Conjuga el verbo 'estar' en YO:" 
            },
            { 
                verbo: "pasar", 
                opciones: ["paso", "pasas", "pasa"], 
                correcta: "paso", 
                instruccion: "Conjuga el verbo 'pasar' en YO:" 
            }
        ]
    },
    // Aquí puedes agregar las otras 9 temporadas con el mismo formato
{
    texto: "En la segunda temporada, Ross tiene una nueva novia llamada Julie. Rachel descubre que está enamorada de Ross. Joey consigue un papel en una telenovela. Todos siguen pasando tiempo en el café Central Perk.",
    preguntas: [
        { 
            pregunta: "¿Cómo se llama la nueva novia de Ross?", 
            respuesta: "Julie", 
            alternativas: ["Emily", "Julie", "Sarah"] 
        },
        { 
            pregunta: "¿Qué descubre Rachel?", 
            respuesta: "que está enamorada de Ross", 
            alternativas: ["que está embarazada", "que está enamorada de Ross", "que quiere viajar"] 
        },
        { 
            pregunta: "¿Qué consigue Joey?", 
            respuesta: "un papel en una telenovela", 
            alternativas: ["un trabajo en un restaurante", "un papel en una telenovela", "un perro"] 
        }
    ],
    conjugaciones: [
        { 
            verbo: "tener", 
            opciones: ["tengo", "tienes", "tiene"], 
            correcta: "tengo", 
            instruccion: "Conjuga el verbo 'tener' en YO:" 
        },
        { 
            verbo: "descubrir", 
            opciones: ["descubro", "descubres", "descubre"], 
            correcta: "descubro", 
            instruccion: "Conjuga el verbo 'descubrir' en YO:" 
        },
        { 
            verbo: "conseguir", 
            opciones: ["consigo", "consigues", "consigue"], 
            correcta: "consigo", 
            instruccion: "Conjuga el verbo 'conseguir' en YO:" 
        }
    ],

            "texto": "En la tercera temporada, Ross y Rachel comienzan a salir, pero luego se separan. Chandler tiene problemas con su novia Janice. Monica cambia de trabajo y Joey sigue actuando.",
            "preguntas": [
                { "pregunta": "¿Quiénes comienzan a salir?", "respuesta": "Ross y Rachel", "alternativas": ["Monica y Chandler", "Ross y Rachel", "Joey y Phoebe"] },
                { "pregunta": "¿Con qué tiene problemas Chandler?", "respuesta": "su novia Janice", "alternativas": ["su jefe", "su novia Janice", "su perro"] },
                { "pregunta": "¿Qué cambia Monica?", "respuesta": "de trabajo", "alternativas": ["de casa", "de novio", "de trabajo"] }
            ],
            "conjugaciones": [
                { "verbo": "comenzar", "opciones": ["comienzo", "comienzas", "comienza"], "correcta": "comienzo", "instruccion": "Conjuga el verbo 'comenzar' en YO:" },
                { "verbo": "tener", "opciones": ["tengo", "tienes", "tiene"], "correcta": "tengo", "instruccion": "Conjuga el verbo 'tener' en YO:" },
                { "verbo": "cambiar", "opciones": ["cambio", "cambias", "cambia"], "correcta": "cambio", "instruccion": "Conjuga el verbo 'cambiar' en YO:" }
            ]
        },
        {
            "texto": "En la cuarta temporada, Ross se compromete con Emily. Chandler y Joey tienen problemas con su apartamento. Rachel se da cuenta de que aún ama a Ross.",
            "preguntas": [
                { "pregunta": "¿Con quién se compromete Ross?", "respuesta": "Emily", "alternativas": ["Julie", "Emily", "Susan"] },
                { "pregunta": "¿Qué problemas tienen Chandler y Joey?", "respuesta": "con su apartamento", "alternativas": ["con su trabajo", "con su apartamento", "con sus coches"] },
                { "pregunta": "¿Qué descubre Rachel?", "respuesta": "que aún ama a Ross", "alternativas": ["que quiere mudarse", "que aún ama a Ross", "que quiere viajar"] }
            ],
            "conjugaciones": [
                { "verbo": "comprometerse", "opciones": ["me comprometo", "te comprometes", "se compromete"], "correcta": "me comprometo", "instruccion": "Conjuga el verbo 'comprometerse' en YO:" },
                { "verbo": "tener", "opciones": ["tengo", "tienes", "tiene"], "correcta": "tengo", "instruccion": "Conjuga el verbo 'tener' en YO:" },
                { "verbo": "darse cuenta", "opciones": ["me doy cuenta", "te das cuenta", "se da cuenta"], "correcta": "me doy cuenta", "instruccion": "Conjuga el verbo 'darse cuenta' en YO:" }
            ]
        },
        {
            "texto": "En la quinta temporada, Ross dice el nombre de Rachel en su boda con Emily. Monica y Chandler comienzan una relación secreta. Joey consigue un nuevo trabajo en teatro.",
            "preguntas": [
                { "pregunta": "¿Qué nombre dice Ross en su boda?", "respuesta": "Rachel", "alternativas": ["Monica", "Rachel", "Emily"] },
                { "pregunta": "¿Quiénes comienzan una relación secreta?", "respuesta": "Monica y Chandler", "alternativas": ["Phoebe y Joey", "Monica y Chandler", "Ross y Rachel"] },
                { "pregunta": "¿Dónde consigue trabajo Joey?", "respuesta": "en teatro", "alternativas": ["en cine", "en teatro", "en televisión"] }
            ],
            "conjugaciones": [
                { "verbo": "decir", "opciones": ["digo", "dices", "dice"], "correcta": "digo", "instruccion": "Conjuga el verbo 'decir' en YO:" },
                { "verbo": "comenzar", "opciones": ["comienzo", "comienzas", "comienza"], "correcta": "comienzo", "instruccion": "Conjuga el verbo 'comenzar' en YO:" },
                { "verbo": "conseguir", "opciones": ["consigo", "consigues", "consigue"], "correcta": "consigo", "instruccion": "Conjuga el verbo 'conseguir' en YO:" }
            ]
        },
        {
            "texto": "En la sexta temporada, Ross y Rachel descubren que se casaron en Las Vegas por error. Monica y Chandler deciden vivir juntos. Joey tiene problemas con su nuevo compañero de cuarto.",
            "preguntas": [
                { "pregunta": "¿Dónde se casan Ross y Rachel?", "respuesta": "en Las Vegas", "alternativas": ["en Nueva York", "en Las Vegas", "en Los Ángeles"] },
                { "pregunta": "¿Quiénes deciden vivir juntos?", "respuesta": "Monica y Chandler", "alternativas": ["Ross y Rachel", "Monica y Chandler", "Joey y Phoebe"] },
                { "pregunta": "¿Qué problema tiene Joey?", "respuesta": "con su nuevo compañero de cuarto", "alternativas": ["con su familia", "con su jefe", "con su nuevo compañero de cuarto"] }
            ],
            "conjugaciones": [
                { "verbo": "descubrir", "opciones": ["descubro", "descubres", "descubre"], "correcta": "descubro", "instruccion": "Conjuga el verbo 'descubrir' en YO:" },
                { "verbo": "decidir", "opciones": ["decido", "decides", "decide"], "correcta": "decido", "instruccion": "Conjuga el verbo 'decidir' en YO:" },
                { "verbo": "tener", "opciones": ["tengo", "tienes", "tiene"], "correcta": "tengo", "instruccion": "Conjuga el verbo 'tener' en YO:" }
            ]
       },
       {
"texto": "En la sexta temporada, Ross y Rachel descubren que se casaron en Las Vegas por error. Monica y Chandler deciden vivir juntos. Joey tiene problemas con su nuevo compañero de cuarto.",
            "preguntas": [
                { "pregunta": "¿Dónde se casan Ross y Rachel?", "respuesta": "en Las Vegas", "alternativas": ["en Nueva York", "en Las Vegas", "en Los Ángeles"] },
                { "pregunta": "¿Quiénes deciden vivir juntos?", "respuesta": "Monica y Chandler", "alternativas": ["Ross y Rachel", "Monica y Chandler", "Joey y Phoebe"] },
                { "pregunta": "¿Qué problema tiene Joey?", "respuesta": "con su nuevo compañero de cuarto", "alternativas": ["con su familia", "con su jefe", "con su nuevo compañero de cuarto"] }
            ],
            "conjugaciones": [
                { "verbo": "descubrir", "opciones": ["descubro", "descubres", "descubre"], "correcta": "descubro", "instruccion": "Conjuga el verbo 'descubrir' en YO:" },
                { "verbo": "decidir", "opciones": ["decido", "decides", "decide"], "correcta": "decido", "instruccion": "Conjuga el verbo 'decidir' en YO:" },
                { "verbo": "tener", "opciones": ["tengo", "tienes", "tiene"], "correcta": "tengo", "instruccion": "Conjuga el verbo 'tener' en YO:" }
            ]
        },
        {
            "texto": "En la séptima temporada, Chandler y Monica se comprometen. Ross y Rachel siguen siendo amigos. Joey consigue un papel en una película famosa.",
            "preguntas": [
                { "pregunta": "¿Quiénes se comprometen?", "respuesta": "Chandler y Monica", "alternativas": ["Ross y Rachel", "Chandler y Monica", "Joey y Phoebe"] },
                { "pregunta": "¿Qué relación tienen Ross y Rachel?", "respuesta": "siguen siendo amigos", "alternativas": ["siguen siendo amigos", "se odian", "se casan"] },
                { "pregunta": "¿Qué consigue Joey?", "respuesta": "un papel en una película famosa", "alternativas": ["un coche nuevo", "un papel en una película famosa", "una casa"] }
            ],
            "conjugaciones": [
                { "verbo": "comprometerse", "opciones": ["me comprometo", "te comprometes", "se compromete"], "correcta": "me comprometo", "instruccion": "Conjuga el verbo 'comprometerse' en YO:" },
                { "verbo": "seguir", "opciones": ["sigo", "sigues", "sigue"], "correcta": "sigo", "instruccion": "Conjuga el verbo 'seguir' en YO:" },
                { "verbo": "conseguir", "opciones": ["consigo", "consigues", "consigue"], "correcta": "consigo", "instruccion": "Conjuga el verbo 'conseguir' en YO:" }
            ]
        },
        {
            "texto": "En la octava temporada, Rachel descubre que está embarazada. Joey se enamora de Rachel. Monica y Chandler intentan tener un bebé.",
            "preguntas": [
                { "pregunta": "¿Quién descubre que está embarazada?", "respuesta": "Rachel", "alternativas": ["Monica", "Rachel", "Phoebe"] },
                { "pregunta": "¿De quién se enamora Joey?", "respuesta": "de Rachel", "alternativas": ["de Phoebe", "de Rachel", "de Emily"] },
                { "pregunta": "¿Qué intentan hacer Monica y Chandler?", "respuesta": "tener un bebé", "alternativas": ["comprar una casa", "tener un bebé", "adoptar un perro"] }
            ],
            "conjugaciones": [
                { "verbo": "descubrir", "opciones": ["descubro", "descubres", "descubre"], "correcta": "descubro", "instruccion": "Conjuga el verbo 'descubrir' en YO:" },
                { "verbo": "enamorarse", "opciones": ["me enamoro", "te enamoras", "se enamora"], "correcta": "me enamoro", "instruccion": "Conjuga el verbo 'enamorarse' en YO:" },
                { "verbo": "intentar", "opciones": ["intento", "intentas", "intenta"], "correcta": "intento", "instruccion": "Conjuga el verbo 'intentar' en YO:" }
            ]
        },
{
            "texto": "En la novena temporada, Rachel y Ross intentan ser padres juntos, pero sin estar en una relación. Joey y Rachel salen por un tiempo, pero deciden seguir siendo amigos. Monica y Chandler intentan adoptar un bebé.",
            "preguntas": [
                { "pregunta": "¿Qué intentan hacer Rachel y Ross?", "respuesta": "ser padres juntos", "alternativas": ["ser padres juntos", "casarse", "mudarse"] },
                { "pregunta": "¿Quiénes salen por un tiempo?", "respuesta": "Joey y Rachel", "alternativas": ["Monica y Chandler", "Joey y Rachel", "Ross y Phoebe"] },
                { "pregunta": "¿Qué intentan hacer Monica y Chandler?", "respuesta": "adoptar un bebé", "alternativas": ["tener gemelos", "adoptar un bebé", "comprar una casa"] }
            ],
            "conjugaciones": [
                { "verbo": "intentar", "opciones": ["intento", "intentas", "intenta"], "correcta": "intento", "instruccion": "Conjuga el verbo 'intentar' en YO:" },
                { "verbo": "salir", "opciones": ["salgo", "sales", "sale"], "correcta": "salgo", "instruccion": "Conjuga el verbo 'salir' en YO:" },
                { "verbo": "adoptar", "opciones": ["adopto", "adoptas", "adopta"], "correcta": "adopto", "instruccion": "Conjuga el verbo 'adoptar' en YO:" }
            ]
        },
        {
            "texto": "En la décima temporada, Ross y Rachel terminan juntos. Monica y Chandler adoptan gemelos. Joey se despide de todos y comienza una nueva etapa en su vida.",
            "preguntas": [
                { "pregunta": "¿Quiénes terminan juntos?", "respuesta": "Ross y Rachel", "alternativas": ["Ross y Rachel", "Joey y Phoebe", "Monica y Chandler"] },
                { "pregunta": "¿Qué adoptan Monica y Chandler?", "respuesta": "gemelos", "alternativas": ["un perro", "gemelos", "un gato"] },
                { "pregunta": "¿Qué hace Joey al final?", "respuesta": "se despide de todos", "alternativas": ["se casa", "se despide de todos", "se muda a Europa"] }
            ],
            "conjugaciones": [
                { "verbo": "terminar", "opciones": ["termino", "terminas", "termina"], "correcta": "termino", "instruccion": "Conjuga el verbo 'terminar' en YO:" },
                { "verbo": "adoptar", "opciones": ["adopto", "adoptas", "adopta"], "correcta": "adopto", "instruccion": "Conjuga el verbo 'adoptar' en YO:" },
                { "verbo": "despedirse", "opciones": ["me despido", "te despides", "se despide"], "correcta": "me despido", "instruccion": "Conjuga el verbo 'despedirse' en YO:" }
            ]
        },
];

function cargarTemporada(numero) {
    const temporada = temporadas[numero - 1];
    contenido.innerHTML = `
        <p>${temporada.texto}</p>
        <div class="preguntas">
            ${temporada.preguntas.map((preg, index) => `
                <div class="pregunta">
                    <h3>Pregunta ${index + 1}: ${preg.pregunta}</h3>
                    <div class="opciones">
                        ${preg.alternativas.map(alt => `
                            <button onclick="verificarRespuesta('${preg.respuesta}', '${alt}', this)">${alt}</button>
                        `).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
        <div class="conjugaciones">
            ${temporada.conjugaciones.map((conj, index) => `
                <div class="conjugacion">
                    <h3>${conj.instruccion}</h3>
                    <div class="opciones">
                        ${conj.opciones.map(opcion => `
                            <button onclick="verificarConjugacion('${conj.correcta}', '${opcion}', this)">${opcion}</button>
                        `).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function verificarRespuesta(respuestaCorrecta, opcionSeleccionada, boton) {
    if (opcionSeleccionada === respuestaCorrecta) {
        boton.style.backgroundColor = '#4caf50';
        alert("¡Correcto! 🎉");
    } else {
        boton.style.backgroundColor = '#f44336';
        alert("Incorrecto 😢");
    }
}

function verificarConjugacion(correcta, opcion, boton) {
    if (opcion === correcta) {
        boton.style.backgroundColor = '#4caf50';
        alert("¡Correcto! 🎉");
    } else {
        boton.style.backgroundColor = '#f44336';
        alert("Incorrecto 😢");
    }
}