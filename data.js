var FAMILIAS = {
  reglamentarias: "Reglamentaria",
  preventivas: "Preventiva",
  peligro: "Máximo peligro",
  informativas: "Informativa",
  transitorias: "Transitoria",
  marcas: "Marca vial",
  luminosas: "Luminosa"
};

var FORMAS = {
  pare: "Octógono rojo con la palabra PARE. Es la única señal con esa forma, así se reconoce aunque esté sucia o de espaldas.",
  ceda: "Triángulo con la punta hacia abajo, blanco con borde rojo. Es la única señal con esa forma.",
  contramano: "Círculo rojo lleno con una franja blanca horizontal.",
  prohibicion: "Reglamentaria de prohibición: círculo blanco con borde rojo y una barra roja cruzada. Prohíbe lo que muestra el dibujo.",
  limite: "Reglamentaria de restricción: círculo blanco con borde rojo y un número, sin barra. Pone un límite que no se puede pasar.",
  obligacion: "Reglamentaria de obligación (prescriptiva): círculo azul con dibujo blanco. Obliga a hacer lo que muestra.",
  preventiva: "Preventiva: rombo amarillo con borde y dibujo negros. Avisa un peligro que viene más adelante.",
  fin: "Preventiva cruzada por una barra: avisa que terminó el peligro anunciado antes.",
  peligro: "Máximo peligro: triángulo blanco con borde rojo. Pide extremar la precaución.",
  rojoblanco: "Máximo peligro: combina rojo y blanco para que se vea desde lejos.",
  servicio: "Informativa de servicios: rectángulo azul con un cuadro blanco y un dibujo negro.",
  via: "Informativa: orienta sobre el camino. No obliga ni prohíbe.",
  transitoria: "Transitoria: rombo naranja. Avisa algo temporal, como una obra.",
  marca: "Marca vial (señal horizontal): está pintada sobre el pavimento y vale igual que un cartel.",
  luminosa: "Luminosa: funciona con luces. Si un agente de tránsito da otra orden, manda el agente."
};

var SENALES = [

  {
    codigo: "R01", nombre: "Pare", familia: "reglamentarias", forma: "pare",
    dibujo: DIBUJAR.pare(),
    significa: "Detención obligatoria. El vehículo tiene que quedar completamente quieto.",
    hacer: "Frenar del todo antes de la línea de detención (o antes de la senda peatonal), mirar a los dos lados y avanzar solo cuando el cruce esté libre.",
    pregunta: "¿Alcanza con bajar la velocidad?",
    respuesta: "No. Con PARE hay que detenerse por completo, aunque no venga nadie. Bajar la velocidad sin frenar es una falta."
  },
  {
    codigo: "R02", nombre: "Ceda el paso", familia: "reglamentarias", forma: "ceda",
    dibujo: DIBUJAR.ceda(),
    significa: "Hay que dejar pasar a los vehículos que circulan por la otra vía.",
    hacer: "Reducir la velocidad, mirar y detenerse solo si viene alguien. Si está libre se puede seguir sin frenar del todo.",
    pregunta: "¿Qué diferencia hay entre PARE y CEDA EL PASO?",
    respuesta: "PARE obliga a detenerse siempre. CEDA EL PASO obliga a dejar pasar, pero solo hay que frenar si viene alguien."
  },
  {
    codigo: "R03", nombre: "Contramano", familia: "reglamentarias", forma: "contramano",
    dibujo: DIBUJAR.contramano(),
    significa: "Prohibido entrar: la calle va en sentido contrario.",
    hacer: "No ingresar a esa calle. Buscar otra que vaya en tu sentido.",
    pregunta: "¿Dónde suele estar esta señal?",
    respuesta: "En la salida de calles de una sola mano y en las salidas de autopistas, para que nadie entre al revés."
  },
  {
    codigo: "R04", nombre: "No avanzar", familia: "reglamentarias", forma: "prohibicion",
    dibujo: DIBUJAR.prohibicion("flechaArriba", 0.5),
    significa: "Prohibido seguir derecho.",
    hacer: "Doblar hacia donde esté permitido. No cruzar de frente.",
    pregunta: "¿Puedo doblar si veo esta señal?",
    respuesta: "Sí, lo que se prohíbe es seguir derecho. Doblar se puede, salvo que otra señal también lo prohíba."
  },
  {
    codigo: "R05", nombre: "Prohibido girar a la izquierda", familia: "reglamentarias", forma: "prohibicion",
    dibujo: DIBUJAR.prohibicion("giroIzquierda", 0.54),
    significa: "No se puede doblar a la izquierda en esa esquina.",
    hacer: "Seguir derecho o doblar a la derecha.",
    pregunta: "¿Qué indica la barra roja cruzada sobre la flecha?",
    respuesta: "Que la maniobra que muestra la flecha está prohibida."
  },
  {
    codigo: "R06", nombre: "Prohibido girar a la derecha", familia: "reglamentarias", forma: "prohibicion",
    dibujo: DIBUJAR.prohibicion("giroDerecha", 0.54),
    significa: "No se puede doblar a la derecha en esa esquina.",
    hacer: "Seguir derecho o doblar a la izquierda si está permitido.",
    pregunta: "¿A qué grupo de señales pertenece?",
    respuesta: "A las reglamentarias de prohibición: círculo blanco, borde rojo y barra roja."
  },
  {
    codigo: "R07", nombre: "Prohibido girar en U", familia: "reglamentarias", forma: "prohibicion",
    dibujo: DIBUJAR.prohibicion("vueltaU", 0.54),
    significa: "Prohibido dar la vuelta para volver en sentido contrario.",
    hacer: "Seguir y dar la vuelta a la manzana o donde esté permitido.",
    pregunta: "¿Por qué se prohíbe girar en U?",
    respuesta: "Porque la maniobra corta los dos sentidos de circulación y sorprende a los que vienen atrás y de frente."
  },
  {
    codigo: "R08", nombre: "Prohibido cambiar de carril", familia: "reglamentarias", forma: "prohibicion",
    dibujo: DIBUJAR.prohibicion("cambioCarril", 0.56),
    significa: "Hay que mantenerse en el carril en el que se va.",
    hacer: "No pasar al carril de al lado hasta que termine la prohibición.",
    pregunta: "¿Qué marca del pavimento suele acompañarla?",
    respuesta: "Una línea continua entre los carriles, que no se puede cruzar."
  },
  {
    codigo: "R09", nombre: "Prohibido adelantarse", familia: "reglamentarias", forma: "prohibicion",
    dibujo: DIBUJAR.adelantarse(),
    significa: "Prohibido pasar al vehículo de adelante.",
    hacer: "Quedarse detrás del vehículo, manteniendo distancia, hasta que termine la prohibición.",
    pregunta: "¿Dónde está prohibido adelantarse aunque no haya cartel?",
    respuesta: "En curvas, puentes, subidas, túneles, cruces de calles, cruces de ruta y pasos a nivel, por la banquina, y donde haya doble línea amarilla."
  },
  {
    codigo: "R10", nombre: "Prohibido estacionar", familia: "reglamentarias", forma: "prohibicion",
    dibujo: DIBUJAR.prohibicion("letraE", 0.74),
    significa: "No se puede dejar el vehículo estacionado. Sí se puede parar un momento para subir o bajar gente.",
    hacer: "Detenerse solo lo justo y no dejar el auto.",
    pregunta: "¿Qué diferencia hay con «prohibido estacionar y detenerse»?",
    respuesta: "Con una barra se puede parar un instante. Con dos barras (una X) no se puede ni siquiera detener."
  },
  {
    codigo: "R11", nombre: "Prohibido estacionar y detenerse", familia: "reglamentarias", forma: "prohibicion",
    dibujo: DIBUJAR.prohibicion("letraE", 0.74, { doble: true }),
    significa: "No se puede estacionar ni parar, ni siquiera un momento.",
    hacer: "Seguir de largo. Ni para subir o bajar a alguien.",
    pregunta: "¿Qué indica la X sobre la E?",
    respuesta: "Que está prohibido estacionar y también detenerse."
  },
  {
    codigo: "R12", nombre: "Prohibido circular automotores", familia: "reglamentarias", forma: "prohibicion",
    dibujo: DIBUJAR.prohibicion("auto", 0.56),
    significa: "No pueden pasar autos ni otros vehículos a motor.",
    hacer: "Tomar otro camino si vas manejando.",
    pregunta: "¿Puede pasar un peatón o un ciclista?",
    respuesta: "Sí, la prohibición es para automotores. Peatones y bicicletas pueden pasar salvo que otra señal lo prohíba."
  },
  {
    codigo: "R13", nombre: "Prohibido circular vehículos de carga", familia: "reglamentarias", forma: "prohibicion",
    dibujo: DIBUJAR.prohibicion("camion", 0.56),
    significa: "No pueden pasar camiones ni vehículos de carga.",
    hacer: "Si manejás un camión, usar el recorrido marcado para carga.",
    pregunta: "¿Qué velocidad máxima tiene un camión con carga peligrosa en ruta?",
    respuesta: "80 km/h, según el material de clase."
  },
  {
    codigo: "R14", nombre: "Prohibido circular bicicletas", familia: "reglamentarias", forma: "prohibicion",
    dibujo: DIBUJAR.prohibicion("bici", 0.58),
    significa: "No se puede andar en bicicleta por esa vía.",
    hacer: "Bajarse y caminar con la bici, o usar otro camino.",
    pregunta: "¿Dónde suele aparecer?",
    respuesta: "En autopistas, túneles y rutas rápidas, donde la bicicleta corre peligro."
  },
  {
    codigo: "R15", nombre: "Prohibido circular motos", familia: "reglamentarias", forma: "prohibicion",
    dibujo: DIBUJAR.prohibicion("moto", 0.56),
    significa: "No pueden pasar motocicletas.",
    hacer: "Tomar otro recorrido si vas en moto.",
    pregunta: "¿Qué tienen en común todas las señales de «prohibido circular»?",
    respuesta: "El círculo blanco con borde rojo, la barra roja y el dibujo del vehículo que no puede pasar."
  },
  {
    codigo: "R16", nombre: "Prohibido circular maquinaria agrícola", familia: "reglamentarias", forma: "prohibicion",
    dibujo: DIBUJAR.prohibicion("tractor", 0.54),
    significa: "No pueden pasar tractores ni máquinas del campo.",
    hacer: "Usar caminos rurales u otro recorrido autorizado.",
    pregunta: "¿Por qué se prohíbe en algunas rutas?",
    respuesta: "Porque son lentas y anchas y obligan a los demás a adelantarse con riesgo."
  },
  {
    codigo: "R17", nombre: "Prohibido tracción a sangre", familia: "reglamentarias", forma: "prohibicion",
    dibujo: DIBUJAR.prohibicion("carro", 0.6),
    significa: "No pueden pasar carros tirados por animales.",
    hacer: "Usar otro camino si vas en carro.",
    pregunta: "¿Qué es un vehículo de tracción a sangre?",
    respuesta: "Uno que se mueve con la fuerza de un animal, como un carro con caballo."
  },
  {
    codigo: "R18", nombre: "Prohibido circular peatones", familia: "reglamentarias", forma: "prohibicion",
    dibujo: DIBUJAR.prohibicion("peaton", 0.56),
    significa: "Los peatones no pueden caminar por ahí.",
    hacer: "Buscar la vereda, la senda peatonal o un paso habilitado.",
    pregunta: "¿Dónde suele estar?",
    respuesta: "En autopistas, puentes y túneles sin vereda."
  },
  {
    codigo: "R19", nombre: "Prohibido usar bocina", familia: "reglamentarias", forma: "prohibicion",
    dibujo: DIBUJAR.prohibicion("bocina", 0.52),
    significa: "No se puede tocar bocina en esa zona.",
    hacer: "Usar la bocina solo si hay un peligro inmediato.",
    pregunta: "¿Dónde se pone esta señal?",
    respuesta: "Cerca de hospitales, escuelas y otras zonas donde hace falta silencio."
  },
  {
    codigo: "R20", nombre: "Velocidad máxima", familia: "reglamentarias", forma: "limite",
    dibujo: DIBUJAR.limite(texto("40", 50, 52, 44)),
    significa: "No se puede ir más rápido que el número indicado, en km/h.",
    hacer: "Mantener la velocidad por debajo de ese número.",
    pregunta: "¿Cuál es la velocidad máxima en zona urbana?",
    respuesta: "En general 40 km/h en calles. Cerca de escuelas 20 km/h y en un paso a nivel sin barreras también 20 km/h."
  },
  {
    codigo: "R21", nombre: "Altura máxima", familia: "reglamentarias", forma: "limite",
    dibujo: DIBUJAR.limite('<path d="M40 14 H60 L50 24 Z M40 86 H60 L50 76 Z"/>' + texto("4,10", 50, 46, 22) + texto("m", 50, 63, 14)),
    significa: "No pueden pasar vehículos más altos que la medida indicada.",
    hacer: "Si tu vehículo es más alto (con carga incluida), no entrar.",
    pregunta: "¿Qué indican los triangulitos arriba y abajo del número?",
    respuesta: "Que la medida es de altura. Si están a los costados, la medida es de ancho."
  },
  {
    codigo: "R22", nombre: "Ancho máximo", familia: "reglamentarias", forma: "limite",
    dibujo: DIBUJAR.limite('<path d="M14 40 V60 L24 50 Z M86 40 V60 L76 50 Z"/>' + texto("3 m", 50, 51, 22)),
    significa: "No pueden pasar vehículos más anchos que la medida indicada.",
    hacer: "Medir el vehículo antes. Si es más ancho, tomar otro camino.",
    pregunta: "¿Cómo se diferencia de «altura máxima»?",
    respuesta: "En la de ancho los triangulitos van a los costados. En la de altura van arriba y abajo."
  },
  {
    codigo: "R23", nombre: "Peso máximo", familia: "reglamentarias", forma: "limite",
    dibujo: DIBUJAR.limite(texto("4 t", 50, 51, 32)),
    significa: "No pueden pasar vehículos que pesen más que las toneladas indicadas.",
    hacer: "Sumar el peso del vehículo y la carga antes de pasar.",
    pregunta: "¿Dónde aparece esta señal?",
    respuesta: "Sobre todo antes de puentes que no aguantan mucho peso."
  },
  {
    codigo: "R24", nombre: "Largo máximo", familia: "reglamentarias", forma: "limite",
    dibujo: DIBUJAR.limite(texto("20 m", 50, 44, 22) + '<path d="M26 64 H74" stroke="currentColor" stroke-width="3"/>' +
      '<path d="M22 64 L30 59 V69 Z M78 64 L70 59 V69 Z"/>'),
    significa: "No pueden pasar vehículos más largos que la medida indicada.",
    hacer: "Si manejás un vehículo largo, buscar otro camino.",
    pregunta: "¿Por qué existe esta señal?",
    respuesta: "Porque en curvas cerradas o calles angostas un vehículo muy largo no puede girar sin invadir el otro carril."
  },
  {
    codigo: "R25", nombre: "Velocidad mínima", familia: "reglamentarias", forma: "obligacion",
    dibujo: DIBUJAR.obligacionLibre(texto("35", 50, 52, 42)),
    significa: "No se puede ir más despacio que el número indicado, en km/h.",
    hacer: "Mantener al menos esa velocidad si el tránsito y el clima lo permiten.",
    pregunta: "¿Por qué es peligroso ir demasiado lento?",
    respuesta: "Porque puede provocar choques, obliga a los demás a adelantarse apurados y entorpece el tránsito."
  },
  {
    codigo: "R26", nombre: "Fin de velocidad mínima", familia: "reglamentarias", forma: "obligacion",
    dibujo: DIBUJAR.obligacionLibre(texto("35", 50, 52, 42) + '<line x1="20" y1="80" x2="80" y2="20" stroke="' + ROJO + '" stroke-width="8"/>'),
    significa: "Termina la obligación de ir a una velocidad mínima.",
    hacer: "Adaptar la velocidad al camino; sigue valiendo la máxima.",
    pregunta: "¿Qué significa que un número esté tachado?",
    respuesta: "Que termina la regla que había puesto la señal anterior."
  },
  {
    codigo: "R27", nombre: "Prioridad al sentido contrario", familia: "reglamentarias", forma: "limite",
    dibujo: DIBUJAR.prioridadContraria(),
    significa: "En un paso angosto, tienen prioridad los que vienen de frente.",
    hacer: "Esperar a que pasen los que vienen de frente antes de entrar al tramo angosto.",
    pregunta: "¿Qué flecha te representa a vos?",
    respuesta: "La roja, que apunta hacia arriba (tu sentido). Es la que tiene que ceder."
  },
  {
    codigo: "R28", nombre: "Sentido obligatorio", familia: "reglamentarias", forma: "obligacion",
    dibujo: DIBUJAR.obligacion("flechaArriba", 0.5, 90),
    significa: "Hay que circular solo en el sentido de la flecha.",
    hacer: "Seguir hacia donde apunta la flecha.",
    pregunta: "¿Qué indica el círculo azul?",
    respuesta: "Una obligación: hay que hacer lo que muestra el dibujo."
  },
  {
    codigo: "R29", nombre: "Seguir derecho obligatorio", familia: "reglamentarias", forma: "obligacion",
    dibujo: DIBUJAR.obligacion("flechaArriba", 0.5),
    significa: "Solo se puede seguir derecho.",
    hacer: "No doblar en esa esquina.",
    pregunta: "¿En qué se diferencia de «No avanzar»?",
    respuesta: "Es lo contrario: esta obliga a seguir derecho (azul) y «No avanzar» lo prohíbe (rojo con barra)."
  },
  {
    codigo: "R30", nombre: "Giro obligatorio a la derecha", familia: "reglamentarias", forma: "obligacion",
    dibujo: DIBUJAR.obligacion("giroDerecha", 0.54),
    significa: "Hay que doblar a la derecha.",
    hacer: "Ubicarse a la derecha con tiempo, poner el guiño y doblar.",
    pregunta: "¿Puedo seguir derecho?",
    respuesta: "No. La señal azul obliga a doblar a la derecha."
  },
  {
    codigo: "R31", nombre: "Giro obligatorio a la izquierda", familia: "reglamentarias", forma: "obligacion",
    dibujo: DIBUJAR.obligacion("giroIzquierda", 0.54),
    significa: "Hay que doblar a la izquierda.",
    hacer: "Ubicarse a la izquierda con tiempo, poner el guiño y doblar.",
    pregunta: "¿Qué hay que hacer antes de doblar?",
    respuesta: "Anunciar la maniobra con la luz de giro y ubicarse en el carril que corresponde."
  },
  {
    codigo: "R32", nombre: "Paso obligatorio por la derecha", familia: "reglamentarias", forma: "obligacion",
    dibujo: DIBUJAR.obligacion("flechaArriba", 0.5, 135),
    significa: "Hay que pasar el obstáculo (isla, cantero, obra) por el lado derecho.",
    hacer: "Rodear por la derecha, como marca la flecha.",
    pregunta: "¿Dónde suele estar?",
    respuesta: "Al principio de una isla o un cantero en el medio de la calle."
  },
  {
    codigo: "R33", nombre: "Doble sentido de circulación", familia: "reglamentarias", forma: "obligacion",
    dibujo: DIBUJAR.obligacionLibre(flecha("M38 76 V38", 38, 44, 38, 32, 8, 13) + flecha("M62 24 V62", 62, 56, 62, 68, 8, 13)),
    significa: "Empieza un tramo donde se circula en los dos sentidos.",
    hacer: "Mantenerse a la derecha: van a venir vehículos de frente.",
    pregunta: "¿Qué hay que hacer al ver esta señal?",
    respuesta: "Circular por la derecha y no adelantarse sin ver bien el carril contrario."
  },
  {
    codigo: "R34", nombre: "Circulación exclusiva de bicicletas", familia: "reglamentarias", forma: "obligacion",
    dibujo: DIBUJAR.obligacion("bici", 0.58),
    significa: "Carril o camino solo para bicicletas.",
    hacer: "Si vas en bici, usarlo. Si vas en auto o a pie, no ocuparlo.",
    pregunta: "¿Puede estacionar un auto en una ciclovía?",
    respuesta: "No. Es de uso exclusivo para bicicletas."
  },
  {
    codigo: "R35", nombre: "Circulación exclusiva de peatones", familia: "reglamentarias", forma: "obligacion",
    dibujo: DIBUJAR.obligacion("peaton", 0.56),
    significa: "Zona solo para personas a pie.",
    hacer: "No entrar con vehículos.",
    pregunta: "¿Qué ejemplo de lugar tiene esta señal?",
    respuesta: "Una calle peatonal del centro."
  },
  {
    codigo: "R36", nombre: "Carril exclusivo de transporte público", familia: "reglamentarias", forma: "obligacion",
    dibujo: DIBUJAR.obligacion("colectivo", 0.54),
    significa: "Carril reservado para colectivos.",
    hacer: "Si no vas en colectivo, no circular ni detenerse en ese carril.",
    pregunta: "¿Cuál es la velocidad máxima del transporte público en ruta?",
    respuesta: "90 km/h, según el material de clase."
  },
  {
    codigo: "R37", nombre: "Uso obligatorio de cadenas", familia: "reglamentarias", forma: "obligacion",
    dibujo: DIBUJAR.obligacion("cadenas", 0.54),
    significa: "Hay que poner cadenas en las ruedas para seguir.",
    hacer: "Colocar las cadenas antes de entrar al tramo con nieve o hielo.",
    pregunta: "¿Para qué sirven las cadenas?",
    respuesta: "Para que las ruedas no patinen sobre nieve o hielo."
  },
  {
    codigo: "R38", nombre: "Estacionamiento permitido", familia: "reglamentarias", forma: "obligacion",
    dibujo: DIBUJAR.obligacion("letraE", 0.62),
    significa: "Se puede estacionar en ese lugar.",
    hacer: "Estacionar paralelo al cordón y sin tapar rampas ni garajes.",
    pregunta: "¿Cómo distinguís estacionar permitido y prohibido?",
    respuesta: "La E en azul permite. La E en un círculo rojo con barra lo prohíbe."
  },

  {
    codigo: "P01", nombre: "Curva", familia: "preventivas", forma: "preventiva",
    dibujo: DIBUJAR.rombo("curva"),
    significa: "Se acerca una curva hacia el lado que marca la flecha.",
    hacer: "Bajar la velocidad antes de entrar a la curva, no adentro.",
    pregunta: "¿Se puede adelantar en una curva?",
    respuesta: "No. Adelantarse en curvas está prohibido porque no se ve lo que viene de frente."
  },
  {
    codigo: "P02", nombre: "Curva pronunciada", familia: "preventivas", forma: "preventiva",
    dibujo: DIBUJAR.rombo("curvaPronunciada"),
    significa: "Se acerca una curva muy cerrada, casi en ángulo recto.",
    hacer: "Frenar bastante antes y tomarla despacio.",
    pregunta: "¿Qué diferencia hay con la señal de «curva»?",
    respuesta: "La flecha dobla en ángulo recto: la curva es mucho más cerrada."
  },
  {
    codigo: "P03", nombre: "Curva y contracurva", familia: "preventivas", forma: "preventiva",
    dibujo: DIBUJAR.rombo("contracurva"),
    significa: "Vienen dos curvas seguidas, una para cada lado.",
    hacer: "Bajar la velocidad y no adelantarse en todo el tramo.",
    pregunta: "¿Qué forma tiene la flecha?",
    respuesta: "Una S: dobla para un lado y enseguida para el otro."
  },
  {
    codigo: "P04", nombre: "Camino sinuoso", familia: "preventivas", forma: "preventiva",
    dibujo: DIBUJAR.rombo("sinuoso"),
    significa: "Viene un tramo con muchas curvas seguidas.",
    hacer: "Ir despacio y mantenerse en el propio carril.",
    pregunta: "¿Qué tiene que hacer el conductor en un camino sinuoso?",
    respuesta: "Reducir la velocidad y no adelantarse, porque no ve lo que viene de frente."
  },
  {
    codigo: "P05", nombre: "Rotonda", familia: "preventivas", forma: "preventiva",
    dibujo: DIBUJAR.rombo("rotonda"),
    significa: "Se acerca una rotonda.",
    hacer: "Bajar la velocidad y ceder el paso a los que ya están girando dentro.",
    pregunta: "¿Quién tiene prioridad en una rotonda?",
    respuesta: "El que circula dentro de la rotonda. Es una excepción a la regla de «el que viene por la derecha»."
  },
  {
    codigo: "P06", nombre: "Cruce de caminos", familia: "preventivas", forma: "preventiva",
    dibujo: DIBUJAR.rombo("cruce"),
    significa: "Más adelante se cruzan dos caminos.",
    hacer: "Bajar la velocidad y prepararse para ceder el paso.",
    pregunta: "En un cruce sin señales, ¿quién pasa primero?",
    respuesta: "El que viene por la derecha: «el que por la derecha viene, derecho a pasar tiene»."
  },
  {
    codigo: "P07", nombre: "Camino lateral", familia: "preventivas", forma: "preventiva",
    dibujo: DIBUJAR.rombo("caminoLateral"),
    significa: "Un camino se une al tuyo por un costado.",
    hacer: "Atención a vehículos que pueden salir de ese camino.",
    pregunta: "En una ruta, ¿quién tiene prioridad: el de la ruta o el del camino lateral?",
    respuesta: "El que circula por la ruta."
  },
  {
    codigo: "P08", nombre: "Bifurcación en T", familia: "preventivas", forma: "preventiva",
    dibujo: DIBUJAR.rombo("bifurcacionT"),
    significa: "El camino termina y hay que doblar a un lado o al otro.",
    hacer: "Frenar con tiempo y elegir hacia dónde doblar.",
    pregunta: "¿Se puede seguir derecho?",
    respuesta: "No, el camino termina en una T: solo se puede doblar."
  },
  {
    codigo: "P09", nombre: "Bifurcación en Y", familia: "preventivas", forma: "preventiva",
    dibujo: DIBUJAR.rombo("bifurcacionY"),
    significa: "El camino se abre en dos.",
    hacer: "Elegir con tiempo por cuál seguir y poner el guiño.",
    pregunta: "¿Qué forma tiene el dibujo?",
    respuesta: "Una Y: un camino que se divide en dos."
  },
  {
    codigo: "P10", nombre: "Incorporación de tránsito", familia: "preventivas", forma: "preventiva",
    dibujo: DIBUJAR.rombo("incorporacion"),
    significa: "Por un costado entran vehículos al camino.",
    hacer: "Atención: dejar espacio a los que se incorporan.",
    pregunta: "¿Quién debe ceder: el que se incorpora o el que ya circula?",
    respuesta: "El que se incorpora tiene que esperar un espacio seguro. El que circula debe facilitarle la entrada."
  },
  {
    codigo: "P11", nombre: "Estrechamiento de calzada", familia: "preventivas", forma: "preventiva",
    dibujo: DIBUJAR.rombo("estrechamiento"),
    significa: "El camino se angosta de los dos lados.",
    hacer: "Bajar la velocidad y mantenerse bien a la derecha.",
    pregunta: "¿Qué indica que las dos líneas se acerquen?",
    respuesta: "Que el camino se angosta de ambos lados."
  },
  {
    codigo: "P12", nombre: "Estrechamiento de un lado", familia: "preventivas", forma: "preventiva",
    dibujo: DIBUJAR.rombo("estrechamientoDerecha"),
    significa: "El camino se angosta solo de un lado.",
    hacer: "Prepararse para cambiar de carril con tiempo y guiño.",
    pregunta: "¿Cómo sé de qué lado se angosta?",
    respuesta: "Por la línea que se dobla: la recta queda igual y la otra se mete."
  },
  {
    codigo: "P13", nombre: "Puente angosto", familia: "preventivas", forma: "preventiva",
    dibujo: DIBUJAR.rombo("puenteAngosto"),
    significa: "Se acerca un puente más angosto que el camino.",
    hacer: "Bajar la velocidad y, si viene alguien, esperar.",
    pregunta: "¿Se puede adelantar sobre un puente?",
    respuesta: "No, adelantarse en puentes está prohibido."
  },
  {
    codigo: "P14", nombre: "Calzada irregular", familia: "preventivas", forma: "preventiva",
    dibujo: DIBUJAR.rombo("calzadaIrregular"),
    significa: "El pavimento tiene pozos o lomas.",
    hacer: "Bajar la velocidad para no perder el control.",
    pregunta: "¿Qué peligro tiene?",
    respuesta: "Los saltos pueden hacer perder el control o romper el vehículo."
  },
  {
    codigo: "P15", nombre: "Lomada (lomo de burro)", familia: "preventivas", forma: "preventiva",
    dibujo: DIBUJAR.rombo("lomada"),
    significa: "Hay una loma en la calle para hacer bajar la velocidad.",
    hacer: "Pasarla despacio.",
    pregunta: "¿Para qué se ponen lomadas?",
    respuesta: "Para obligar a bajar la velocidad, por ejemplo cerca de escuelas."
  },
  {
    codigo: "P16", nombre: "Badén", familia: "preventivas", forma: "preventiva",
    dibujo: DIBUJAR.rombo("baden"),
    significa: "Hay un pozo o depresión que cruza la calle (por donde corre el agua).",
    hacer: "Bajar la velocidad. Si tiene agua, no cruzar sin saber qué tan hondo es.",
    pregunta: "¿Cuál es la diferencia entre badén y lomada?",
    respuesta: "El badén es un pozo (baja). La lomada es una loma (sube)."
  },
  {
    codigo: "P17", nombre: "Pendiente peligrosa", familia: "preventivas", forma: "preventiva",
    dibujo: DIBUJAR.rombo("pendiente"),
    significa: "Viene una bajada o subida muy empinada.",
    hacer: "En bajada, usar un cambio bajo y no ir solo con el freno.",
    pregunta: "¿Se puede adelantar en una subida?",
    respuesta: "No, adelantarse en subidas está prohibido porque no se ve lo que viene."
  },
  {
    codigo: "P18", nombre: "Calzada resbaladiza", familia: "preventivas", forma: "preventiva",
    dibujo: DIBUJAR.rombo("resbaladiza", 0.5),
    significa: "El camino puede estar resbaloso (lluvia, hielo, aceite).",
    hacer: "Bajar la velocidad, no frenar de golpe y aumentar la distancia.",
    pregunta: "¿Qué hay que revisar para manejar con lluvia?",
    respuesta: "Cubiertas en buen estado, limpiaparabrisas, desempañador y luces bajas prendidas."
  },
  {
    codigo: "P19", nombre: "Zona de derrumbes", familia: "preventivas", forma: "preventiva",
    dibujo: DIBUJAR.rombo("derrumbe"),
    significa: "Pueden caer piedras o tierra desde un costado.",
    hacer: "Ir atento y no detenerse en ese tramo.",
    pregunta: "¿Dónde aparece esta señal?",
    respuesta: "En caminos de montaña o al lado de barrancas."
  },
  {
    codigo: "P20", nombre: "Altura limitada", familia: "preventivas", forma: "preventiva",
    dibujo: DIBUJAR.rombo("alturaLimitada", 0.5),
    significa: "Avisa que más adelante hay un paso bajo (puente, túnel).",
    hacer: "Comparar la altura de tu vehículo con la medida.",
    pregunta: "¿Qué diferencia hay con la señal redonda de «altura máxima»?",
    respuesta: "El rombo solo avisa que viene. El círculo con borde rojo es la prohibición en el lugar."
  },
  {
    codigo: "P21", nombre: "Ancho limitado", familia: "preventivas", forma: "preventiva",
    dibujo: DIBUJAR.rombo("anchoLimitado", 0.5),
    significa: "Avisa que más adelante el paso es angosto.",
    hacer: "Comparar el ancho de tu vehículo con la medida.",
    pregunta: "¿Dónde van los triangulitos en la de ancho?",
    respuesta: "A los costados del número."
  },
  {
    codigo: "P22", nombre: "Puente móvil", familia: "preventivas", forma: "preventiva",
    dibujo: DIBUJAR.rombo("puenteMovil"),
    significa: "Se acerca un puente que se levanta para que pasen barcos.",
    hacer: "Prestar atención a las barreras y luces del puente.",
    pregunta: "¿Qué hay que hacer si el puente está levantado?",
    respuesta: "Detenerse y esperar a que baje del todo."
  },
  {
    codigo: "P23", nombre: "Túnel", familia: "preventivas", forma: "preventiva",
    dibujo: DIBUJAR.rombo("tunel"),
    significa: "Se acerca un túnel.",
    hacer: "Prender las luces bajas y no adelantarse.",
    pregunta: "¿Se puede adelantar dentro de un túnel?",
    respuesta: "No, está prohibido."
  },
  {
    codigo: "P24", nombre: "Calzada dividida", familia: "preventivas", forma: "preventiva",
    dibujo: DIBUJAR.rombo("calzadaDividida"),
    significa: "Empieza una isla o cantero que separa los dos sentidos.",
    hacer: "Mantenerse a la derecha del cantero.",
    pregunta: "¿Por qué lado se rodea la isla?",
    respuesta: "Por la derecha."
  },
  {
    codigo: "P25", nombre: "Doble circulación", familia: "preventivas", forma: "preventiva",
    dibujo: DIBUJAR.rombo("dobleCirculacion"),
    significa: "Avisa que el camino pasa a tener doble mano.",
    hacer: "Ir por la derecha: van a venir vehículos de frente.",
    pregunta: "¿Qué cuidado hay que tener al adelantarse?",
    respuesta: "Ver bien el carril contrario, poner guiño izquierdo, hacer cambio de luces y volver con guiño derecho."
  },
  {
    codigo: "P26", nombre: "Viento lateral", familia: "preventivas", forma: "preventiva",
    dibujo: DIBUJAR.rombo("viento"),
    significa: "Puede haber ráfagas fuertes de viento de costado.",
    hacer: "Agarrar firme el volante y bajar la velocidad.",
    pregunta: "¿A quién afecta más el viento lateral?",
    respuesta: "A motos, bicicletas, camiones y vehículos altos o con remolque."
  },
  {
    codigo: "P27", nombre: "Presencia de animales", familia: "preventivas", forma: "preventiva",
    dibujo: DIBUJAR.rombo("vaca", 0.52),
    significa: "Puede haber animales sueltos cruzando.",
    hacer: "Ir despacio, sobre todo de noche.",
    pregunta: "¿Qué hacer si hay un animal en el camino?",
    respuesta: "Frenar sin volantear de golpe: una maniobra brusca puede ser peor que el animal."
  },
  {
    codigo: "P28", nombre: "Ciclistas", familia: "preventivas", forma: "preventiva",
    dibujo: DIBUJAR.rombo("ciclista", 0.52),
    significa: "Puede haber ciclistas en el camino.",
    hacer: "Dejarles espacio al pasarlos.",
    pregunta: "¿Qué debe llevar un ciclista de noche?",
    respuesta: "Luces y elementos reflectivos para ser visto."
  },
  {
    codigo: "P29", nombre: "Zona escolar", familia: "preventivas", forma: "preventiva",
    dibujo: DIBUJAR.rombo("chicos", 0.52),
    significa: "Hay una escuela cerca: pueden cruzar chicos.",
    hacer: "Bajar a 20 km/h y estar listo para frenar.",
    pregunta: "¿Cuál es la velocidad máxima cerca de una escuela?",
    respuesta: "20 km/h."
  },
  {
    codigo: "P30", nombre: "Niños", familia: "preventivas", forma: "preventiva",
    dibujo: DIBUJAR.rombo("chicoPelota", 0.52),
    significa: "Lugar donde juegan chicos (plaza, club).",
    hacer: "Ir despacio: un chico puede cruzar corriendo sin mirar.",
    pregunta: "¿Por qué hay que tener cuidado especial con los chicos?",
    respuesta: "Porque son bajos, se ven menos y pueden salir de golpe, por ejemplo detrás de una pelota."
  },
  {
    codigo: "P31", nombre: "Salida de ambulancias", familia: "preventivas", forma: "preventiva",
    dibujo: DIBUJAR.rombo("ambulancia", 0.52),
    significa: "Puede salir una ambulancia o un vehículo de emergencia.",
    hacer: "Atención y dejarle paso si sale con sirena.",
    pregunta: "¿Quién tiene prioridad en una esquina?",
    respuesta: "El peatón y los vehículos de emergencia (ambulancia, bomberos, policía)."
  },
  {
    codigo: "P32", nombre: "Maquinaria agrícola", familia: "preventivas", forma: "preventiva",
    dibujo: DIBUJAR.rombo("tractor", 0.52),
    significa: "Pueden circular tractores o máquinas del campo.",
    hacer: "Ir atento y adelantarse solo con buena visibilidad.",
    pregunta: "¿Qué peligro tienen estas máquinas en ruta?",
    respuesta: "Van muy lento y son anchas, así que hay que acercarse con cuidado."
  },
  {
    codigo: "P33", nombre: "Vuelos a baja altura", familia: "preventivas", forma: "preventiva",
    dibujo: DIBUJAR.rombo("avion", 0.52),
    significa: "Cerca hay un aeropuerto: los aviones pasan bajo.",
    hacer: "No distraerse ni frenar de golpe por el ruido.",
    pregunta: "¿Por qué se avisa?",
    respuesta: "Porque el ruido y el avión tan cerca pueden asustar o distraer al conductor."
  },
  {
    codigo: "P34", nombre: "Proximidad de semáforo", familia: "preventivas", forma: "preventiva",
    dibujo: DIBUJAR.rombo("semaforoChico", 0.5),
    significa: "Más adelante hay un semáforo.",
    hacer: "Bajar la velocidad y prepararse para frenar.",
    pregunta: "¿Para qué sirve si el semáforo igual se ve?",
    respuesta: "Para avisar con tiempo cuando el semáforo está detrás de una curva o de algo que lo tapa."
  },
  {
    codigo: "P35", nombre: "Prevención de PARE", familia: "preventivas", forma: "preventiva",
    dibujo: DIBUJAR.rombo("preventivaPare", 0.5),
    significa: "Más adelante hay una señal de PARE.",
    hacer: "Empezar a frenar para detenerse del todo.",
    pregunta: "¿Qué indica el número de abajo?",
    respuesta: "La distancia que falta hasta la señal de PARE."
  },
  {
    codigo: "P36", nombre: "Prevención de ceda el paso", familia: "preventivas", forma: "preventiva",
    dibujo: DIBUJAR.rombo("preventivaCeda", 0.5),
    significa: "Más adelante hay una señal de ceda el paso.",
    hacer: "Bajar la velocidad y prepararse para ceder.",
    pregunta: "¿Es una prohibición o un aviso?",
    respuesta: "Un aviso: es preventiva (rombo). La obligación está en el triángulo que viene después."
  },
  {
    codigo: "P37", nombre: "Fin de calzada resbaladiza", familia: "preventivas", forma: "fin",
    dibujo: DIBUJAR.rombo("resbaladiza", 0.5, AMARILLO, { fin: true, gris: true }),
    significa: "Termina el tramo resbaladizo.",
    hacer: "Seguir con precaución normal.",
    pregunta: "¿Qué indica una preventiva tachada?",
    respuesta: "Que se terminó el peligro que avisaba la señal sin tachar."
  },

  {
    codigo: "M01", nombre: "Paso a nivel sin barreras", familia: "peligro", forma: "peligro",
    dibujo: DIBUJAR.peligro("tren", 0.42),
    significa: "Se acerca un cruce con el tren sin barreras.",
    hacer: "Bajar a 20 km/h como máximo, mirar y escuchar. Cruzar solo si no viene el tren.",
    pregunta: "¿A qué velocidad se cruza un paso a nivel sin barreras?",
    respuesta: "A 20 km/h como máximo."
  },
  {
    codigo: "M02", nombre: "Paso a nivel con barreras", familia: "peligro", forma: "peligro",
    dibujo: DIBUJAR.peligro("barrera", 0.42),
    significa: "Se acerca un cruce ferroviario con barreras.",
    hacer: "Si la barrera está baja o bajando, detenerse. Nunca esquivarla.",
    pregunta: "¿Se puede adelantar en un paso a nivel?",
    respuesta: "No, está prohibido adelantarse en cruces ferroviarios."
  },
  {
    codigo: "M03", nombre: "Cruce de peatones", familia: "peligro", forma: "peligro",
    dibujo: DIBUJAR.peligro("peaton", 0.42),
    significa: "Se acerca una senda peatonal.",
    hacer: "Bajar la velocidad y dejar cruzar a los peatones.",
    pregunta: "¿Quién tiene prioridad en la senda peatonal?",
    respuesta: "El peatón."
  },
  {
    codigo: "M04", nombre: "Curva peligrosa", familia: "peligro", forma: "peligro",
    dibujo: DIBUJAR.peligro("curvaPeligrosa", 0.42),
    significa: "Viene una curva muy peligrosa.",
    hacer: "Frenar bastante antes y tomarla muy despacio.",
    pregunta: "¿Por qué es triángulo y no rombo?",
    respuesta: "Porque es de máximo peligro: el riesgo es mayor que en una curva común."
  },
  {
    codigo: "M05", nombre: "Atención", familia: "peligro", forma: "peligro",
    dibujo: DIBUJAR.peligro("atencion", 0.42),
    significa: "Peligro general. Suele tener abajo un cartel que dice cuál es.",
    hacer: "Bajar la velocidad y prestar mucha atención.",
    pregunta: "¿Qué indica el signo de exclamación?",
    respuesta: "Un peligro que no tiene una señal propia."
  },
  {
    codigo: "M06", nombre: "Cruz de San Andrés", familia: "peligro", forma: "rojoblanco",
    dibujo: DIBUJAR.cruzSanAndres(false),
    significa: "Está justo en el cruce con las vías del tren (una sola vía).",
    hacer: "Detenerse si viene el tren. No quedarse parado sobre las vías.",
    pregunta: "¿Dónde se ubica la cruz de San Andrés?",
    respuesta: "En el mismo paso a nivel, al lado de las vías."
  },
  {
    codigo: "M07", nombre: "Cruz de San Andrés doble", familia: "peligro", forma: "rojoblanco",
    dibujo: DIBUJAR.cruzSanAndres(true),
    significa: "Cruce de tren con dos o más vías.",
    hacer: "Ojo: puede venir un tren por una vía y otro por la otra.",
    pregunta: "¿Qué diferencia hay con la cruz simple?",
    respuesta: "La doble avisa que hay dos o más vías."
  },
  {
    codigo: "M08", nombre: "Panel de prevención", familia: "peligro", forma: "rojoblanco",
    dibujo: DIBUJAR.panel("franjas"),
    significa: "Marca un obstáculo o el borde del camino. También avisa la distancia a un paso a nivel (una, dos o tres franjas).",
    hacer: "Esquivar el obstáculo con tiempo y bajar la velocidad.",
    pregunta: "¿Qué indican las franjas inclinadas?",
    respuesta: "Hacia qué lado hay que pasar el obstáculo: las franjas bajan hacia el lado por donde se pasa."
  },
  {
    codigo: "M09", nombre: "Panel de curva peligrosa", familia: "peligro", forma: "rojoblanco",
    dibujo: DIBUJAR.panel("chevron"),
    significa: "Marca el borde exterior de una curva peligrosa.",
    hacer: "Seguir la dirección que marca la punta y bajar la velocidad.",
    pregunta: "¿Hacia dónde apunta?",
    respuesta: "Hacia el lado en que dobla la curva."
  },

  {
    codigo: "I01", nombre: "Ruta nacional", familia: "informativas", forma: "via",
    dibujo: DIBUJAR.rutaNacional("22"),
    significa: "Indica el número de la ruta nacional por la que vas.",
    hacer: "Usarla para orientarte.",
    pregunta: "¿Cómo se diferencia la nacional de la provincial?",
    respuesta: "La nacional tiene forma de escudo. La provincial es un rectángulo."
  },
  {
    codigo: "I02", nombre: "Ruta provincial", familia: "informativas", forma: "via",
    dibujo: DIBUJAR.rutaProvincial("7"),
    significa: "Indica el número de la ruta provincial.",
    hacer: "Usarla para orientarte.",
    pregunta: "¿Qué velocidad máxima tiene un auto en ruta?",
    respuesta: "110 km/h, según el material de clase. Y en ruta las luces bajas van prendidas las 24 horas."
  },
  {
    codigo: "I03", nombre: "Comienzo de autopista", familia: "informativas", forma: "via",
    dibujo: DIBUJAR.autopista(false),
    significa: "Empieza una autopista.",
    hacer: "Respetar las velocidades de autopista y no circular a pie ni en bici.",
    pregunta: "¿Pueden entrar peatones o bicicletas a una autopista?",
    respuesta: "No."
  },
  {
    codigo: "I04", nombre: "Fin de autopista", familia: "informativas", forma: "via",
    dibujo: DIBUJAR.autopista(true),
    significa: "Termina la autopista.",
    hacer: "Prepararse para bajar la velocidad y para cruces y peatones.",
    pregunta: "¿Qué indica la barra cruzada?",
    respuesta: "Que termina lo que indicaba la señal (en este caso, la autopista)."
  },
  {
    codigo: "I05", nombre: "Calle sin salida", familia: "informativas", forma: "via",
    dibujo: DIBUJAR.sinSalida(),
    significa: "La calle no tiene salida del otro lado.",
    hacer: "No entrar si querés seguir de largo.",
    pregunta: "¿Qué representa la barra roja arriba?",
    respuesta: "El final cerrado de la calle."
  },
  {
    codigo: "I06", nombre: "Primeros auxilios", familia: "informativas", forma: "servicio",
    dibujo: DIBUJAR.servicio("cruzRoja", 0.5),
    significa: "Hay un puesto de primeros auxilios o puesto sanitario.",
    hacer: "Acudir si hay un herido o una emergencia.",
    pregunta: "¿De qué color es el fondo de las informativas de servicios?",
    respuesta: "Azul, con un cuadro blanco y el dibujo en negro."
  },
  {
    codigo: "I07", nombre: "Estación de servicio", familia: "informativas", forma: "servicio",
    dibujo: DIBUJAR.servicio("surtidor", 0.5),
    significa: "Hay una estación de servicio (combustible).",
    hacer: "Entrar despacio y con guiño.",
    pregunta: "¿Obliga a algo esta señal?",
    respuesta: "No. Las informativas solo informan."
  },
  {
    codigo: "I08", nombre: "Servicio mecánico", familia: "informativas", forma: "servicio",
    dibujo: DIBUJAR.servicio("llave", 0.48),
    significa: "Hay un taller mecánico cerca.",
    hacer: "Usarlo si el vehículo tiene una falla.",
    pregunta: "¿Qué conviene revisar antes de un viaje de noche?",
    respuesta: "La batería, la instalación eléctrica y todas las luces."
  },
  {
    codigo: "I09", nombre: "Gomería", familia: "informativas", forma: "servicio",
    dibujo: DIBUJAR.servicio("gomeria", 0.5),
    significa: "Hay una gomería (arreglo de cubiertas).",
    hacer: "Usarla si tenés una goma pinchada.",
    pregunta: "¿Por qué importan las cubiertas con lluvia?",
    respuesta: "Porque si están gastadas el auto patina y frena peor en el piso mojado."
  },
  {
    codigo: "I10", nombre: "Teléfono", familia: "informativas", forma: "servicio",
    dibujo: DIBUJAR.servicio("telefono", 0.48),
    significa: "Hay un teléfono público.",
    hacer: "Usarlo para pedir ayuda en una emergencia.",
    pregunta: "¿A qué familia pertenece?",
    respuesta: "A las informativas de servicios."
  },
  {
    codigo: "I11", nombre: "Hotel", familia: "informativas", forma: "servicio",
    dibujo: DIBUJAR.servicio("hotel", 0.5),
    significa: "Hay un hotel o lugar para dormir.",
    hacer: "Parar a descansar si tenés sueño.",
    pregunta: "¿Qué hay que hacer si te vence el sueño manejando?",
    respuesta: "Detenerse, descansar unos minutos y después seguir el viaje."
  },
  {
    codigo: "I12", nombre: "Restaurante", familia: "informativas", forma: "servicio",
    dibujo: DIBUJAR.servicio("cubiertos", 0.48),
    significa: "Hay un restaurante.",
    hacer: "Usarlo para hacer una pausa en el viaje.",
    pregunta: "¿Cómo se representa?",
    respuesta: "Con un tenedor y un cuchillo."
  },
  {
    codigo: "I13", nombre: "Bar", familia: "informativas", forma: "servicio",
    dibujo: DIBUJAR.servicio("taza", 0.48),
    significa: "Hay un bar o cafetería.",
    hacer: "Usarlo para descansar del viaje.",
    pregunta: "¿Cuál es la diferencia con «restaurante»?",
    respuesta: "El bar se muestra con una taza; el restaurante con tenedor y cuchillo."
  },
  {
    codigo: "I14", nombre: "Camping", familia: "informativas", forma: "servicio",
    dibujo: DIBUJAR.servicio("carpa", 0.48),
    significa: "Hay un lugar para acampar.",
    hacer: "Entrar despacio, puede haber chicos y gente caminando.",
    pregunta: "¿Qué dibujo tiene?",
    respuesta: "Una carpa."
  },
  {
    codigo: "I15", nombre: "Estacionamiento", familia: "informativas", forma: "servicio",
    dibujo: DIBUJAR.servicio("estacionamiento", 0.5),
    significa: "Hay una playa de estacionamiento.",
    hacer: "Estacionar ahí y no sobre la calzada.",
    pregunta: "¿Es lo mismo que «estacionamiento permitido»?",
    respuesta: "No. Esta (cuadrada) avisa dónde hay un estacionamiento. La redonda azul permite estacionar en ese lugar."
  },
  {
    codigo: "I16", nombre: "Policía", familia: "informativas", forma: "servicio",
    dibujo: DIBUJAR.servicio("policia", 0.5),
    significa: "Hay una comisaría o puesto policial.",
    hacer: "Acudir si necesitás ayuda o hacer una denuncia.",
    pregunta: "Si un agente de tránsito da una orden distinta a un semáforo, ¿a quién se obedece?",
    respuesta: "Al agente: sus indicaciones están por encima de las señales."
  },
  {
    codigo: "I17", nombre: "Aeropuerto", familia: "informativas", forma: "servicio",
    dibujo: DIBUJAR.servicio("avion", 0.48),
    significa: "Indica el camino al aeropuerto.",
    hacer: "Seguirla si vas al aeropuerto.",
    pregunta: "¿Qué diferencia hay con «vuelos a baja altura»?",
    respuesta: "Esta informa dónde está el aeropuerto. La del rombo amarillo avisa un peligro."
  },
  {
    codigo: "I18", nombre: "Terminal de ómnibus", familia: "informativas", forma: "servicio",
    dibujo: DIBUJAR.servicio("colectivo", 0.5),
    significa: "Indica la terminal o parada de ómnibus.",
    hacer: "Atención a peatones y colectivos que entran y salen.",
    pregunta: "¿Dónde se espera el colectivo?",
    respuesta: "En la vereda, no en la calle."
  },
  {
    codigo: "I19", nombre: "Taxi", familia: "informativas", forma: "servicio",
    dibujo: DIBUJAR.servicio("taxi", 0.5),
    significa: "Hay una parada de taxis.",
    hacer: "No estacionar en el lugar reservado para taxis.",
    pregunta: "¿Puede estacionar un auto particular en una parada de taxis?",
    respuesta: "No, ese espacio está reservado."
  },
  {
    codigo: "I20", nombre: "Correo", familia: "informativas", forma: "servicio",
    dibujo: DIBUJAR.servicio("correo", 0.48),
    significa: "Hay una oficina de correo.",
    hacer: "Usarla para orientarte.",
    pregunta: "¿Qué dibujo tiene?",
    respuesta: "Un sobre de carta."
  },

  {
    codigo: "T01", nombre: "Hombres trabajando", familia: "transitorias", forma: "transitoria",
    dibujo: DIBUJAR.rombo("obrero", 0.5, NARANJA),
    significa: "Hay obreros trabajando en la calle o al costado.",
    hacer: "Bajar mucho la velocidad y respetar las indicaciones del personal.",
    pregunta: "¿De qué color son las señales transitorias?",
    respuesta: "Naranjas, porque avisan algo temporal, como una obra."
  },
  {
    codigo: "T02", nombre: "Desvío", familia: "transitorias", forma: "transitoria",
    dibujo: DIBUJAR.rombo("desvio", 0.48, NARANJA),
    significa: "El camino está cortado y hay que desviarse.",
    hacer: "Seguir las flechas del desvío hasta volver al camino.",
    pregunta: "¿Qué diferencia hay entre una preventiva y una transitoria?",
    respuesta: "Las dos avisan, pero la transitoria (naranja) es por algo que dura poco, como una obra."
  },
  {
    codigo: "T03", nombre: "Calzada angosta por obra", familia: "transitorias", forma: "transitoria",
    dibujo: DIBUJAR.rombo("estrechamientoDerecha", 0.5, NARANJA),
    significa: "Por una obra el camino se angosta.",
    hacer: "Bajar la velocidad y pasar de a uno.",
    pregunta: "¿Qué hacer si la obra tiene un banderillero?",
    respuesta: "Obedecer sus indicaciones: mandan por encima de los carteles."
  },

  {
    codigo: "H01", nombre: "Senda peatonal", familia: "marcas", forma: "marca",
    dibujo: DIBUJAR.marca('<g fill="' + BLANCO + '"><rect x="12" y="20" width="10" height="60"/><rect x="30" y="20" width="10" height="60"/><rect x="48" y="20" width="10" height="60"/><rect x="66" y="20" width="10" height="60"/><rect x="84" y="20" width="10" height="60"/></g>'),
    significa: "Es la zona segura para que crucen los peatones.",
    hacer: "Si manejás, frenar antes de la senda y dejar cruzar. Si caminás, cruzar por ahí.",
    pregunta: "¿Dónde se detiene un auto si no hay línea de detención?",
    respuesta: "Antes de la senda peatonal, sin pisarla."
  },
  {
    codigo: "H02", nombre: "Línea de detención", familia: "marcas", forma: "marca",
    dibujo: DIBUJAR.marca('<rect x="2" y="56" width="96" height="12" fill="' + BLANCO + '"/>' + texto("PARE", 50, 32, 20, BLANCO)),
    significa: "Es la línea donde hay que frenar en un PARE o en un semáforo en rojo.",
    hacer: "Detenerse antes de la línea, sin pasarla.",
    pregunta: "¿Qué pasa si te detenés arriba de la línea?",
    respuesta: "Es una falta: hay que quedar antes de la línea."
  },
  {
    codigo: "H03", nombre: "Doble línea continua", familia: "marcas", forma: "marca",
    dibujo: DIBUJAR.marca('<rect x="42" y="2" width="5" height="96" fill="' + AMARILLO + '"/><rect x="53" y="2" width="5" height="96" fill="' + AMARILLO + '"/>'),
    significa: "Separa los dos sentidos de circulación. No se puede cruzar.",
    hacer: "No pisarla ni cruzarla, ni para adelantarse ni para doblar.",
    pregunta: "¿Se puede adelantar con doble línea amarilla?",
    respuesta: "No, está prohibido adelantarse."
  },
  {
    codigo: "H04", nombre: "Línea continua", familia: "marcas", forma: "marca",
    dibujo: DIBUJAR.marca('<rect x="47" y="2" width="6" height="96" fill="' + BLANCO + '"/>'),
    significa: "Separa carriles o sentidos y no se puede cruzar.",
    hacer: "Mantenerse en tu carril.",
    pregunta: "¿Qué diferencia hay entre línea continua y discontinua?",
    respuesta: "La continua no se puede cruzar. La discontinua (cortada) sí, con cuidado."
  },
  {
    codigo: "H05", nombre: "Doble línea mixta", familia: "marcas", forma: "marca",
    dibujo: DIBUJAR.marca('<rect x="42" y="2" width="5" height="96" fill="' + AMARILLO + '"/>' +
      '<g fill="' + AMARILLO + '"><rect x="53" y="6" width="5" height="16"/><rect x="53" y="32" width="5" height="16"/><rect x="53" y="58" width="5" height="16"/><rect x="53" y="84" width="5" height="12"/></g>'),
    significa: "Una línea continua y otra cortada, juntas.",
    hacer: "Solo puede cruzarla quien tiene la línea cortada de su lado.",
    pregunta: "¿Quién puede adelantarse con doble línea mixta?",
    respuesta: "El conductor que tiene la línea discontinua (cortada) de su lado."
  },
  {
    codigo: "H06", nombre: "Línea discontinua", familia: "marcas", forma: "marca",
    dibujo: DIBUJAR.marca('<g fill="' + BLANCO + '"><rect x="47" y="4" width="6" height="18"/><rect x="47" y="40" width="6" height="18"/><rect x="47" y="76" width="6" height="18"/></g>'),
    significa: "Separa carriles. Se puede cruzar para cambiar de carril.",
    hacer: "Cruzarla solo con guiño y mirando los espejos.",
    pregunta: "¿Se puede cruzar?",
    respuesta: "Sí, con precaución y avisando con la luz de giro."
  },
  {
    codigo: "H07", nombre: "Flechas en el pavimento", familia: "marcas", forma: "marca",
    dibujo: DIBUJAR.marca('<g color="' + BLANCO + '" fill="currentColor">' +
      flecha("M30 94 V32", 30, 40, 30, 28, 8, 16) +
      flecha("M70 94 V32", 70, 40, 70, 28, 8, 16) +
      flecha("M70 70 Q70 54 80 54", 76, 54, 80, 54, 7, 13) + "</g>"),
    significa: "Indican hacia dónde se puede ir desde cada carril.",
    hacer: "Ubicarse con tiempo en el carril de la flecha que te sirve.",
    pregunta: "Si tu carril tiene flecha derecho y a la derecha, ¿podés doblar a la izquierda?",
    respuesta: "No. Solo podés hacer lo que marcan las flechas de tu carril."
  },

  {
    codigo: "L01", nombre: "Semáforo", familia: "luminosas", forma: "luminosa",
    dibujo: DIBUJAR.semaforo("todas"),
    significa: "Rojo: detenerse. Amarillo: prepararse para frenar (no acelerar). Verde: avanzar si el cruce está libre.",
    hacer: "Con verde, mirar igual antes de cruzar y esperar si el cruce está trabado.",
    pregunta: "¿Qué significa la luz amarilla?",
    respuesta: "Que va a cambiar a rojo: hay que detenerse, salvo que ya estés tan cerca que frenar sea peligroso."
  },
  {
    codigo: "L02", nombre: "Amarillo intermitente", familia: "luminosas", forma: "luminosa",
    dibujo: DIBUJAR.semaforoIntermitente(),
    significa: "El semáforo no regula: hay que cruzar con precaución.",
    hacer: "Bajar la velocidad y respetar la prioridad (la derecha, el peatón).",
    pregunta: "Con amarillo intermitente, ¿quién pasa primero?",
    respuesta: "Se cruza con precaución y vale la regla general: el que viene por la derecha."
  },
  {
    codigo: "L03", nombre: "Semáforo con flecha de giro", familia: "luminosas", forma: "luminosa",
    dibujo: DIBUJAR.semaforoGiro(),
    significa: "La flecha verde permite doblar hacia donde apunta aunque el semáforo principal esté en rojo.",
    hacer: "Doblar solo hacia la flecha, cediendo el paso a los peatones.",
    pregunta: "¿Con la flecha prendida se puede seguir derecho?",
    respuesta: "No, solo se puede hacer el giro que marca la flecha."
  },
  {
    codigo: "L04", nombre: "Semáforo peatonal", familia: "luminosas", forma: "luminosa",
    dibujo: DIBUJAR.semaforoPeatonal(),
    significa: "Figura roja quieta: el peatón no puede cruzar. Figura verde caminando: puede cruzar.",
    hacer: "Esperar la figura verde y cruzar por la senda.",
    pregunta: "¿Qué hacer si la figura verde empieza a titilar?",
    respuesta: "No empezar a cruzar. Si ya estás cruzando, terminar de cruzar."
  },
  {
    codigo: "L05", nombre: "Señal luminosa de paso a nivel", familia: "luminosas", forma: "luminosa",
    dibujo: DIBUJAR.pasoNivelLuminoso(),
    significa: "Las dos luces rojas que titilan avisan que viene el tren.",
    hacer: "Detenerse antes del cruce y no cruzar hasta que se apaguen.",
    pregunta: "¿Se puede cruzar si la barrera está levantada pero las luces titilan?",
    respuesta: "No. Las luces rojas que titilan prohíben cruzar."
  }
];
