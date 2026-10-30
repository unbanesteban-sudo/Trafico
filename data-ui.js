
const PROFILES = {
  peaton: {
    label: "Peatón",
    num: "01",
    tagline: "El que camina también decide. Mirar, esperar y cruzar por donde corresponde.",
    icon: "pedestrian",
    items: [
      { text: "Cruzá por la senda peatonal, nunca por entre los autos.", detail: "La senda es el lugar donde el conductor te espera." },
      { text: "Mirá a ambos lados aunque el semáforo esté en verde.", detail: "Un auto puede no respetar la luz." },
      { text: "Caminá por la vereda; si no hay, por el borde izquierdo mirando el tránsito.", detail: "Caminar de espaldas al tránsito te quita reacción." },
      { text: "No uses el celular mientras cruzás.", detail: "La pantalla te roba la atención que necesita la calle." },
      { text: "De noche, usá ropa clara o algún elemento reflectivo.", detail: "Ser visto es la primera medida de seguridad." },
      { text: "Esperá el colectivo en la vereda, no en la calzada.", detail: "La parada no es una extensión de la vereda." }
    ]
  },
  ciclista: {
    label: "Ciclista",
    num: "02",
    tagline: "La bici es un vehículo. Circular con luces, casco y señales cambia todo.",
    icon: "bicycle",
    items: [
      { text: "Circulá por la calzada en el sentido del tránsito; no por la vereda.", detail: "La vereda es para quien camina." },
      { text: "Usá casco y luces delantera y trasera.", detail: "De noche o con lluvia, las luces son obligatorias." },
      { text: "Señalizá con el brazo antes de girar.", detail: "El movimiento empieza con un aviso." },
      { text: "Mantenete a un metro de los autos estacionados.", detail: "Evita que se abra una puerta de golpe." },
      { text: "No circules por el carril exclusivo de colectivos.", detail: "Cada carril tiene su función." },
      { text: "Respetá semáforos y señales como cualquier vehículo.", detail: "La bici no está exenta de las normas." }
    ]
  },
  conductor: {
    label: "Conductor",
    num: "03",
    tagline: "Manejar es anticipar. La distancia, la velocidad y la atención salvan vidas.",
    icon: "carFront",
    items: [
      { text: "Usá siempre el cinturón; todos los ocupantes.", detail: "No es un trámite: es la última barrera." },
      { text: "No manejes si consumiste alcohol, drogas o estás muy cansado.", detail: "Si dudás, no manejes." },
      { text: "Mantené una distancia de al menos 2 segundos con el vehículo de adelante.", detail: "Con lluvia, duplicá esa distancia." },
      { text: "Respetá los límites de velocidad y reducí con lluvia.", detail: "El límite es un techo, no un objetivo." },
      { text: "No uses el celular al volante.", detail: "Un mensaje puede esperar; una frenada no." },
      { text: "Cedé el paso al peatón y al ciclista.", detail: "El más vulnerable tiene prioridad." }
    ]
  }
};

const QUIZ = [
  {
    q: "¿Qué tenés que hacer frente a una señal de PARE?",
    options: [
      "Reducir la velocidad y seguir si no viene nadie.",
      "Detenerte por completo antes de la línea de pare.",
      "Tocar bocina y avanzar despacio."
    ],
    correct: 1,
    why: "El PARE exige detención total. No alcanza con reducir: el vehículo debe quedar completamente detenido antes de la línea y sólo avanzar cuando el cruce esté libre."
  },
  {
    q: "La señal de CEDA EL PASO tiene forma de…",
    options: [
      "Rombo blanco con borde negro.",
      "Círculo con borde rojo.",
      "Triángulo invertido."
    ],
    correct: 2,
    why: "El triángulo invertido es exclusivo del CEDA EL PASO. El rombo se usa para advertir peligros y el círculo rojo para prohibir o limitar."
  },
  {
    q: "Las señales preventivas se reconocen porque son…",
    options: [
      "Rombos blancos con borde negro.",
      "Cuadrados azules con símbolos blancos.",
      "Círculos rojos con una barra diagonal."
    ],
    correct: 0,
    why: "El rombo blanco con borde negro anticipa un peligro: una curva, una escuela, un cruce o una calzada resbaladiza. Nunca prohíben."
  },
  {
    q: "En una senda peatonal, la prioridad es…",
    options: [
      "Del auto que viene circulando.",
      "Del peatón que está cruzando.",
      "Del ciclista que llega más rápido."
    ],
    correct: 1,
    why: "El peatón tiene prioridad en la senda peatonal, aunque no haya semáforo. El conductor debe detenerse y ceder el paso."
  },
  {
    q: "Una línea continua en el centro de la calzada…",
    options: [
      "Se puede cruzar para adelantar si no viene nadie.",
      "No se debe cruzar.",
      "Sólo se cruza de noche."
    ],
    correct: 1,
    why: "La línea continua no se atraviesa. Separa sentidos de circulación y prohíbe el adelantamiento en ese tramo."
  },
  {
    q: "¿Qué significa la luz amarilla del semáforo?",
    options: [
      "Que hay que acelerar para pasar.",
      "Que el semáforo está por cambiar a rojo; hay que detenerse si es seguro.",
      "Que el paso está libre para girar."
    ],
    correct: 1,
    why: "El amarillo advierte que viene el rojo. No es una invitación a acelerar: si podés detenerte con seguridad, hacelo."
  }
];
