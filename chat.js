let student = "";
let topic = "";
let questionCount = 0;
const maxQuestions = 10;

const responses = {
  futbol: {
    "¿Quién ganó el último mundial?": "Argentina ganó el Mundial de 2022.",
    "¿Cuántos jugadores hay en un equipo?": "Hay 11 jugadores en cada equipo.",
    "¿Qué es un fuera de juego?": "Es cuando un jugador está más cerca de la portería rival que el balón y el penúltimo defensor.",
    "¿Cuánto dura un partido?": "Un partido dura 90 minutos divididos en dos tiempos.",
    "¿Qué es la FIFA?": "La FIFA es la organización que rige el fútbol mundial.",
    "¿Qué es un penalti?": "Es una falta cometida dentro del área que da lugar a un tiro directo desde el punto penal.",
    "¿Qué es un hat-trick?": "Cuando un jugador marca tres goles en un partido.",
    "¿Qué es la Champions League?": "Es el torneo de clubes más importante de Europa.",
    "¿Qué es el VAR?": "Es un sistema de video para revisar decisiones arbitrales.",
    "¿Quién es Lionel Messi?": "Uno de los mejores futbolistas de la historia."
  },
  redes: {
    "¿Qué es Instagram?": "Es una red social para compartir fotos y videos.",
    "¿Qué es un hashtag?": "Es una etiqueta que agrupa contenido relacionado.",
    "¿Qué es TikTok?": "Una app para crear y ver videos cortos.",
    "¿Qué es un influencer?": "Persona con muchos seguidores que influye en decisiones.",
    "¿Qué es un algoritmo?": "Conjunto de reglas que decide qué contenido se muestra.",
    "¿Qué es viralizar?": "Hacer que un contenido se comparta masivamente.",
    "¿Qué es un reel?": "Un video corto en Instagram.",
    "¿Qué es el engagement?": "El nivel de interacción de los usuarios con el contenido.",
    "¿Qué es un story?": "Publicación temporal que desaparece en 24 horas.",
    "¿Qué es un feed?": "La parte principal donde ves publicaciones."
  },
  algebra: {
    "¿Qué es una ecuación?": "Una igualdad con una o más incógnitas.",
    "¿Qué es una variable?": "Un símbolo que representa un valor desconocido.",
    "¿Qué es el álgebra?": "Rama de las matemáticas que usa símbolos.",
    "¿Qué es un monomio?": "Una expresión algebraica con un solo término.",
    "¿Qué es un polinomio?": "Una expresión con varios términos.",
    "¿Qué es una incógnita?": "El valor que se debe encontrar.",
    "¿Qué es factorizar?": "Expresar un polinomio como producto de factores.",
    "¿Qué es una función?": "Relación entre un conjunto de entradas y salidas.",
    "¿Qué es una raíz cuadrada?": "El número que multiplicado por sí mismo da el original.",
    "¿Qué es el mínimo común múltiplo?": "El menor múltiplo común entre dos o más números."
  },
  maquillaje: {
    "¿Qué es una base de maquillaje?": "Producto que unifica el tono de piel.",
    "¿Qué es un iluminador?": "Resalta zonas específicas del rostro.",
    "¿Qué es un contour?": "Define y da profundidad al rostro.",
    "¿Qué es un primer?": "Prepara la piel antes del maquillaje.",
    "¿Qué es una brocha kabuki?": "Brocha densa para aplicar polvos.",
    "¿Qué es un delineador?": "Producto para definir los ojos.",
    "¿Qué es una sombra de ojos?": "Color que se aplica en los párpados.",
    "¿Qué es fijador de maquillaje?": "Spray que ayuda a mantener el maquillaje.",
    "¿Qué es un labial mate?": "Labial sin brillo y de larga duración.",
    "¿Qué es un corrector?": "Cubre ojeras e imperfecciones."
  },
  alimentacion: {
    "¿Qué es una dieta balanceada?": "Incluye todos los grupos alimenticios.",
    "¿Qué es una proteína?": "Nutriente esencial para músculos y tejidos.",
    "¿Qué es la fibra?": "Ayuda a la digestión y tránsito intestinal.",
    "¿Qué son carbohidratos?": "Fuente principal de energía.",
    "¿Qué es una vitamina?": "Nutriente esencial para el cuerpo.",
    "¿Qué es la deshidratación?": "Falta de agua en el cuerpo.",
    "¿Qué es el metabolismo?": "Conjunto de procesos químicos en el cuerpo.",
    "¿Qué es el ayuno intermitente?": "Periodo de comer seguido de ayuno.",
    "¿Qué es el colesterol?": "Sustancia grasa que puede ser buena o mala.",
    "¿Qué es un superalimento?": "Comida con alta densidad de nutrientes."
  },
  gym: {
    "¿Qué es una rutina de entrenamiento?": "Conjunto de ejercicios planificados.",
    "¿Qué es una repetición?": "Una ejecución completa de un ejercicio.",
    "¿Qué es una serie?": "Grupo de repeticiones seguidas.",
    "¿Qué es la hipertrofia?": "Aumento del tamaño muscular.",
    "¿Qué es el cardio?": "Ejercicio que mejora el corazón y la resistencia.",
    "¿Qué es una sentadilla?": "Ejercicio para piernas y glúteos.",
    "¿Qué es un press de banca?": "Ejercicio para pecho y brazos.",
    "¿Qué es el calentamiento?": "Preparación del cuerpo antes del ejercicio.",
    "¿Qué es el estiramiento?": "Movimientos para mejorar la flexibilidad.",
    "¿Qué es una proteína en polvo?": "Suplemento para ganar masa muscular."
  }
};

function startChat() {
  student = document.getElementById("studentName").value;
  topic = document.getElementById("topic").value;
  document.querySelector(".config").classList.add("hidden");
  document.getElementById("chatBox").classList.remove
}