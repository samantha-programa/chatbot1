const respuestas = {
    futbol: [
        "El fútbol se originó en Inglaterra en el siglo XIX.",
        "Messi ha ganado múltiples Balones de Oro.",
        "Brasil ha ganado 5 Copas del Mundo.",
        "El balón de fútbol tiene 32 paneles.",
        "Cristiano Ronaldo ha jugado en múltiples ligas europeas.",
        "La FIFA organiza el Mundial cada 4 años.",
        "Un partido de fútbol dura 90 minutos.",
        "El Real Madrid tiene más títulos de Champions.",
        "La liga española es conocida como LaLiga.",
        "El VAR ayuda a los árbitros a tomar decisiones."
    ],
    redes: [
        "Facebook fue creada en 2004 por Mark Zuckerberg.",
        "Twitter ahora se llama X desde 2023.",
        "Instagram es popular por sus historias y fotos.",
        "TikTok es famosa por sus vídeos cortos.",
        "LinkedIn es una red profesional.",
        "WhatsApp es la app de mensajería más usada.",
        "Snapchat tiene filtros divertidos.",
        "YouTube es la plataforma de vídeos más grande.",
        "Reddit es famoso por sus comunidades.",
        "Las redes sociales pueden afectar la salud mental."
    ],
    algebra: [
        "El álgebra estudia números y símbolos.",
        "Las ecuaciones cuadráticas tienen dos soluciones.",
        "El teorema de Pitágoras se usa en geometría.",
        "Un polinomio puede tener varios términos.",
        "Las funciones pueden ser lineales o cuadráticas.",
        "Las matrices se usan en álgebra lineal.",
        "El álgebra booleana se usa en informática.",
        "El logaritmo es la inversa de la exponencial.",
        "Los sistemas de ecuaciones tienen múltiples métodos de solución.",
        "Factorizar ayuda a simplificar expresiones algebraicas."
    ],
    maquillaje: [
        "El maquillaje realza los rasgos faciales.",
        "Las brochas tienen distintos usos.",
        "La base debe coincidir con el tono de piel.",
        "El iluminador aporta brillo al rostro.",
        "El contouring define la estructura facial.",
        "El lápiz labial viene en distintas fórmulas.",
        "El rimel resalta las pestañas.",
        "El rubor da color a las mejillas.",
        "El maquillaje waterproof dura más.",
        "Siempre es importante desmaquillarse antes de dormir."
    ],
    alimentacion: [
        "Una dieta equilibrada es clave para la salud.",
        "Las vitaminas y minerales son esenciales.",
        "El agua es fundamental para el cuerpo.",
        "Las proteínas ayudan a desarrollar músculo.",
        "Los carbohidratos proporcionan energía.",
        "Las grasas saludables son buenas para el corazón.",
        "El desayuno es la comida más importante del día.",
        "El azúcar en exceso puede ser dañino.",
        "Los antioxidantes combaten el envejecimiento celular.",
        "La fibra ayuda a la digestión."
    ],
    gym: [
        "El entrenamiento de fuerza ayuda a ganar músculo.",
        "El cardio mejora la resistencia cardiovascular.",
        "El descanso es esencial para la recuperación.",
        "Los suplementos pueden mejorar el rendimiento.",
        "El calentamiento evita lesiones.",
        "El estiramiento mejora la flexibilidad.",
        "El peso corporal también sirve para entrenar.",
        "La nutrición es clave en el fitness.",
        "Hacer ejercicio reduce el estrés.",
        "La constancia es lo más importante para ver resultados."
    ]
};

function iniciarChat() {
    let temaSeleccionado = document.getElementById("tema").value;
    let respuestasTema = respuestas[temaSeleccionado];
    
    let chatDiv = document.getElementById("chat");
    chatDiv.innerHTML = "<h2>Preguntas sobre " + temaSeleccionado + "</h2>";
    
    respuestasTema.forEach(respuesta => {
        let p = document.createElement("p");
        p.textContent = respuesta;
        chatDiv.appendChild(p);
    });
}
