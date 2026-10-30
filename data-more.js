const INFORMATIVAS = [
  {
    code: "I01", name: "Terminal", family: "informativas", shape: "info", icon: "terminal",
    purpose: "Indica la terminal de ómnibus.",
    action: "Usala para orientarte y acceder al transporte.",
    fact: "Las terminales suelen tener accesos peatonales y vehiculares separados."
  },
  {
    code: "I02", name: "Teléfono", family: "informativas", shape: "info", icon: "phone",
    purpose: "Indica un teléfono público.",
    action: "Usalo en caso de emergencia o para comunicarte.",
    fact: "Hoy muchos están en desuso, pero la señal sigue en el nomenclador."
  },
  {
    code: "I03", name: "Zona de detención", family: "informativas", shape: "info", icon: "carFront",
    purpose: "Indica una zona habilitada para detenerse.",
    action: "Detenete sólo el tiempo necesario y no bloquees el tránsito.",
    fact: "No es lo mismo que estacionar."
  },
  {
    code: "I04", name: "Estación de servicio", family: "informativas", shape: "info", icon: "gasPump",
    purpose: "Indica una estación de servicio.",
    action: "Ingresá despacio y respetá las bocas de acceso.",
    fact: "En la estación, el peatón también tiene prioridad."
  },
  {
    code: "I05", name: "Auxilio", family: "informativas", shape: "info", icon: "wrench",
    purpose: "Indica un puesto de auxilio.",
    action: "Acudí si necesitás asistencia.",
    fact: "Puede incluir primeros auxilios o auxilio mecánico."
  },
  {
    code: "I06", name: "Punto panorámico", family: "informativas", shape: "info", icon: "eye",
    purpose: "Indica un mirador o punto panorámico.",
    action: "Si te detenés, hacelo en el espacio habilitado.",
    fact: "No te detengas sobre la calzada para mirar el paisaje."
  },
  {
    code: "I07", name: "Zona de descanso", family: "informativas", shape: "info", icon: "bed",
    purpose: "Indica un área para descansar.",
    action: "Usala si estás cansado; no sigas manejando con sueño.",
    fact: "Una pausa a tiempo previene siniestros."
  },
  {
    code: "I08", name: "Estacionamiento", family: "informativas", shape: "info", icon: "parking",
    purpose: "Indica un estacionamiento habilitado.",
    action: "Estacioná dentro de las plazas demarcadas.",
    fact: "No ocupes espacios para personas con discapacidad sin habilitación."
  },
  {
    code: "I09", name: "Aeropuerto", family: "informativas", shape: "info", icon: "plane",
    purpose: "Indica un aeropuerto.",
    action: "Seguí la señalización de accesos y estacionamiento.",
    fact: "Las zonas de ascenso y descenso suelen tener tiempo limitado."
  },
  {
    code: "I10", name: "Estación de ferrocarril", family: "informativas", shape: "info", icon: "train",
    purpose: "Indica una estación de tren.",
    action: "Usá los accesos peatonales y respetá las vías.",
    fact: "Nunca cruces por fuera del paso habilitado."
  },
  {
    code: "I11", name: "Parada de ómnibus", family: "informativas", shape: "info", icon: "bus",
    purpose: "Indica una parada de transporte público.",
    action: "Esperá en la vereda y no invadas la calzada.",
    fact: "La parada no es un lugar para estacionar."
  },
  {
    code: "I12", name: "Teleférico", family: "informativas", shape: "info", icon: "cableCar",
    purpose: "Indica una estación de teleférico.",
    action: "Seguí las indicaciones del personal y las barandas.",
    fact: "El teleférico también es transporte urbano."
  },
  {
    code: "I13", name: "Hotel", family: "informativas", shape: "info", icon: "hotel",
    purpose: "Indica un hotel.",
    action: "Usalo como referencia de alojamiento.",
    fact: "Los accesos pueden ser vehiculares o peatonales."
  },
  {
    code: "I14", name: "Bar", family: "informativas", shape: "info", icon: "cup",
    purpose: "Indica un bar.",
    action: "Si consumiste alcohol, no manejes.",
    fact: "La única tasa segura de alcohol al volante es cero."
  },
  {
    code: "I15", name: "Servicio de mercado", family: "informativas", shape: "info", icon: "basket",
    purpose: "Indica un mercado o supermercado.",
    action: "Estacioná en los espacios habilitados.",
    fact: "Cuidado con los peatones que cargan bolsas."
  },
  {
    code: "I16", name: "Correo", family: "informativas", shape: "info", icon: "envelope",
    purpose: "Indica una oficina de correo.",
    action: "Usá el acceso peatonal.",
    fact: "También puede indicar un buzón."
  },
  {
    code: "I17", name: "Camping", family: "informativas", shape: "info", icon: "tent",
    purpose: "Indica una zona de camping.",
    action: "Respetá las áreas de fogata y circulación.",
    fact: "No dejes residuos ni hagas fuego fuera de los lugares permitidos."
  },
  {
    code: "I18", name: "Lugar de picnic", family: "informativas", shape: "info", icon: "picnic",
    purpose: "Indica un área de picnic.",
    action: "Dejá el lugar limpio y no invadas la calzada.",
    fact: "Los residuos atraen animales y generan riesgos."
  },
  {
    code: "I19", name: "Balneario", family: "informativas", shape: "info", icon: "umbrella",
    purpose: "Indica un balneario o zona de baño.",
    action: "Respetá la señalización del lugar.",
    fact: "No te bañes en zonas no habilitadas."
  },
  {
    code: "I20", name: "Servicio de restaurante", family: "informativas", shape: "info", icon: "restaurant",
    purpose: "Indica un restaurante.",
    action: "Si vas a consumir alcohol, volvé con un conductor designado.",
    fact: "Planificá la vuelta antes de salir."
  }
];

const TRANSITORIAS = [
  {
    code: "T01", name: "Obras", family: "transitorias", shape: "temp", icon: "works",
    purpose: "Avisa que hay obras en la calzada.",
    action: "Reducí, seguí el desvío y no invadas la zona de trabajo.",
    fact: "Las obras cambian el recorrido habitual."
  },
  {
    code: "T02", name: "Desvío", family: "transitorias", shape: "temp", icon: "detour",
    purpose: "Avisa un desvío obligatorio.",
    action: "Seguí las flechas y las señales del personal.",
    fact: "No intentes atravesar la zona cerrada."
  },
  {
    code: "T03", name: "Hombres trabajando", family: "transitorias", shape: "temp", icon: "workers",
    purpose: "Avisa que hay personas trabajando en la vía.",
    action: "Reducí la velocidad y aumentá la distancia lateral.",
    fact: "Los trabajadores están expuestos a los vehículos."
  }
];

const MARCAS = [
  {
    code: "M01", name: "Línea continua", family: "marcas", shape: "mark", mark: "lineSolid",
    purpose: "Separa sentidos de circulación y prohíbe cruzarla.",
    action: "No la cruces ni la pises para adelantar.",
    fact: "Una línea continua no se puede atravesar."
  },
  {
    code: "M02", name: "Línea discontinua", family: "marcas", shape: "mark", mark: "lineDash",
    purpose: "Delimita carriles y permite cambiarlos cuando es seguro.",
    action: "Usala para cambiar de carril sólo si hay espacio y señalizás.",
    fact: "No es una invitación a zigzaguear."
  },
  {
    code: "M03", name: "Doble línea continua", family: "marcas", shape: "mark", mark: "lineDoubleSolid",
    purpose: "Separa dos sentidos con doble línea continua.",
    action: "Mantenete en tu sentido; no la cruces.",
    fact: "Su función es evitar adelantamientos en zonas de riesgo."
  },
  {
    code: "M04", name: "Doble línea mixta", family: "marcas", shape: "mark", mark: "lineDoubleMixed",
    purpose: "Combina una línea continua y una discontinua.",
    action: "Sólo puede cruzarla quien tiene la línea discontinua de su lado.",
    fact: "El lado continuo no se cruza nunca."
  },
  {
    code: "M05", name: "Línea de borde", family: "marcas", shape: "mark", mark: "lineEdge",
    purpose: "Delimita el borde de la calzada.",
    action: "No la uses como carril ni te estaciones sobre ella.",
    fact: "La banquina no es un carril de circulación."
  },
  {
    code: "M06", name: "Línea de carril", family: "marcas", shape: "mark", mark: "lineLane",
    purpose: "Divide carriles del mismo sentido.",
    action: "Cambiá de carril sólo con señalización y espacio.",
    fact: "En tránsito denso, cambiá de carril con anticipación."
  },
  {
    code: "M07", name: "Línea de detención", family: "marcas", shape: "mark", mark: "stopLine",
    purpose: "Indica dónde detenerse ante un PARE o un semáforo.",
    action: "Detené el vehículo antes de la línea, sin pisarla.",
    fact: "Si no hay línea, la detención es antes de la senda peatonal."
  },
  {
    code: "M08", name: "Línea de ceda el paso", family: "marcas", shape: "mark", mark: "yieldLine",
    purpose: "Marca la zona de ceda el paso.",
    action: "Detenete si es necesario para ceder la prioridad.",
    fact: "No es una línea de detención obligatoria: es de prioridad."
  },
  {
    code: "M09", name: "Sendas peatonales", family: "marcas", shape: "mark", mark: "crosswalk",
    purpose: "Delimita el paso de peatones.",
    action: "Cedé siempre el paso a quien cruza por ella.",
    fact: "El peatón tiene prioridad.",
    exam: [
      { q: "¿Quién tiene prioridad en la senda peatonal?", a: "El peatón que está cruzando, aunque no haya semáforo." }
    ]
  },
  {
    code: "M10", name: "Cordón amarillo", family: "marcas", shape: "mark", mark: "curbYellow",
    purpose: "Prohíbe estacionar junto al cordón.",
    action: "No estaciones en ese sector.",
    fact: "El amarillo indica prohibición de estacionar."
  },
  {
    code: "M11", name: "Cordón rojo", family: "marcas", shape: "mark", mark: "curbRed",
    purpose: "Prohíbe estacionar y detenerse.",
    action: "No te detengas ni estaciones.",
    fact: "Se usa en paradas de emergencia y rampas."
  },
  {
    code: "M12", name: "Flecha de frente", family: "marcas", shape: "mark", mark: "arrowStraight",
    purpose: "Indica el sentido de circulación hacia adelante.",
    action: "Seguí la flecha y no cambies de carril sin señalizar.",
    fact: "La flecha ordena, no sugiere."
  },
  {
    code: "M13", name: "Flecha de giro a la izquierda", family: "marcas", shape: "mark", mark: "arrowLeft",
    purpose: "Indica un giro obligatorio a la izquierda.",
    action: "Ubicate en el carril izquierdo y girá cuando sea seguro.",
    fact: "No gires si la señal lo prohíbe más adelante."
  },
  {
    code: "M14", name: "Flecha de giro a la derecha", family: "marcas", shape: "mark", mark: "arrowRight",
    purpose: "Indica un giro obligatorio a la derecha.",
    action: "Ubicate en el carril derecho y girá con precaución.",
    fact: "Mirá siempre por el espejo y por sobre el hombro."
  },
  {
    code: "M15", name: "Flecha de retorno", family: "marcas", shape: "mark", mark: "arrowUTurn",
    purpose: "Indica un retorno en U.",
    action: "Hacelo sólo si está permitido y con visibilidad.",
    fact: "No retornes sobre una línea continua."
  },
  {
    code: "M16", name: "Flecha de incorporación", family: "marcas", shape: "mark", mark: "arrowMerge",
    purpose: "Indica una incorporación.",
    action: "Acelerá para integrarte al flujo sin invadir.",
    fact: "Quien ya circula tiene prioridad."
  },
  {
    code: "M17", name: "Flecha de desvío", family: "marcas", shape: "mark", mark: "arrowDetour",
    purpose: "Indica un desvío.",
    action: "Seguí la flecha y reducí la velocidad.",
    fact: "Puede aparecer por obras."
  },
  {
    code: "M18", name: "Flecha de carril exclusivo", family: "marcas", shape: "mark", mark: "arrowBusLane",
    purpose: "Marca un carril exclusivo.",
    action: "No ingreses si tu vehículo no está habilitado.",
    fact: "La exclusividad también se controla con cámaras."
  },
  {
    code: "M19", name: "Leyenda PARE", family: "marcas", shape: "mark", mark: "textPARE",
    purpose: "Indica la palabra PARE sobre el asfalto.",
    action: "Detenete antes de la marca.",
    fact: "La leyenda refuerza la señal vertical."
  },
  {
    code: "M20", name: "Leyenda CEDA", family: "marcas", shape: "mark", mark: "textCEDA",
    purpose: "Indica CEDA sobre el asfalto.",
    action: "Cedé el paso a quien circula por la vía principal.",
    fact: "No es una señal de detención total."
  },
  {
    code: "M21", name: "Leyenda STOP", family: "marcas", shape: "mark", mark: "textSTOP",
    purpose: "Indica STOP sobre el asfalto.",
    action: "Detenete por completo antes de la marca.",
    fact: "Es equivalente a PARE."
  },
  {
    code: "M22", name: "Velocidad máxima pintada", family: "marcas", shape: "mark", mark: "speedPainted",
    purpose: "Indica la velocidad máxima pintada.",
    action: "No superes el número indicado.",
    fact: "La marca se repite para que la veas a tiempo."
  },
  {
    code: "M23", name: "Número de carril", family: "marcas", shape: "mark", mark: "laneNumber",
    purpose: "Indica el número de carril.",
    action: "Ubicate en el carril que corresponde a tu destino.",
    fact: "No cambies de carril en la intersección."
  },
  {
    code: "M24", name: "Triángulo de ceda el paso", family: "marcas", shape: "mark", mark: "yieldTriangle",
    purpose: "Marca el triángulo de ceda el paso.",
    action: "Cedé la prioridad antes de la marca.",
    fact: "Se pinta antes de la línea de detención."
  },
  {
    code: "M25", name: "Rombo de preferencia", family: "marcas", shape: "mark", mark: "diamondPreference",
    purpose: "Marca la preferencia de paso.",
    action: "Respetá la prioridad indicada.",
    fact: "El rombo se usa para señalar preferencia."
  },
  {
    code: "M26", name: "Cuadrícula amarilla", family: "marcas", shape: "mark", mark: "yellowGrid",
    purpose: "Marca una cuadrícula amarilla.",
    action: "No te detengas dentro de la cuadrícula.",
    fact: "Sirve para mantener despejada una intersección."
  },
  {
    code: "M27", name: "Carril exclusivo colectivo", family: "marcas", shape: "mark", mark: "busLane",
    purpose: "Delimita un carril exclusivo para colectivos.",
    action: "No circules por él si no sos colectivo.",
    fact: "Puede funcionar en horarios determinados."
  },
  {
    code: "M28", name: "Carril exclusivo bicicleta", family: "marcas", shape: "mark", mark: "bikeLane",
    purpose: "Delimita un carril exclusivo para bicicletas.",
    action: "No lo ocupes con otro vehículo.",
    fact: "La bicicleta tiene prioridad en su carril."
  },
  {
    code: "M29", name: "Banda de giro", family: "marcas", shape: "mark", mark: "turnPocket",
    purpose: "Marca una banda de giro.",
    action: "Usala sólo para girar, no para adelantar.",
    fact: "La banda ordena el giro."
  },
  {
    code: "M30", name: "Línea de aproximación", family: "marcas", shape: "mark", mark: "approachLine",
    purpose: "Indica la aproximación a un cruce.",
    action: "Reducí y preparate para detenerte.",
    fact: "Las líneas de aproximación anticipan la maniobra."
  },
  {
    code: "M31", name: "Línea de canalización", family: "marcas", shape: "mark", mark: "chevron",
    purpose: "Canaliza el tránsito hacia un carril.",
    action: "Seguí la trayectoria marcada.",
    fact: "No cruces las líneas de canalización."
  },
  {
    code: "M32", name: "Isleta pintada", family: "marcas", shape: "mark", mark: "paintedIsland",
    purpose: "Delimita una isleta pintada.",
    action: "No circules ni te detengas sobre ella.",
    fact: "Ordena el cruce y protege a los peatones."
  },
  {
    code: "M33", name: "Hachado", family: "marcas", shape: "mark", mark: "hatch",
    purpose: "Marca una zona con hachado.",
    action: "No ingreses a la zona rayada.",
    fact: "El hachado separa flujos de tránsito."
  },
  {
    code: "M34", name: "Marca de paso a nivel", family: "marcas", shape: "mark", mark: "railMark",
    purpose: "Marca un paso a nivel.",
    action: "Reducí y mirá antes de cruzar las vías.",
    fact: "La marca anticipa las vías del tren."
  },
  {
    code: "M35", name: "Marca de túnel", family: "marcas", shape: "mark", mark: "tunnelMark",
    purpose: "Marca la entrada de un túnel.",
    action: "Encendé las luces y mantené la distancia.",
    fact: "Dentro del túnel no se cambia de carril."
  },
  {
    code: "M36", name: "Marca de puente", family: "marcas", shape: "mark", mark: "bridgeMark",
    purpose: "Marca la entrada de un puente.",
    action: "Ajustá la velocidad y respetá el ancho.",
    fact: "En puentes angostos puede haber circulación alternada."
  },
  {
    code: "M37", name: "Marca de zona escolar", family: "marcas", shape: "mark", mark: "schoolMark",
    purpose: "Marca una zona escolar.",
    action: "Reducí y estate atento a los chicos.",
    fact: "La marca se refuerza con señal vertical."
  },
  {
    code: "M38", name: "Marca de zona de carga", family: "marcas", shape: "mark", mark: "loadingMark",
    purpose: "Marca una zona de carga y descarga.",
    action: "Usala sólo si estás habilitado.",
    fact: "No bloquees el tránsito."
  },
  {
    code: "M39", name: "Marca de prohibición de estacionar", family: "marcas", shape: "mark", mark: "noParkingMark",
    purpose: "Marca prohibición de estacionar.",
    action: "No dejes el vehículo en ese sector.",
    fact: "La marca puede complementar la señal vertical."
  },
  {
    code: "M40", name: "Carril de desaceleración", family: "marcas", shape: "mark", mark: "decelLane",
    purpose: "Marca un carril de desaceleración.",
    action: "Usalo para bajar la velocidad antes de salir.",
    fact: "No frenes en el carril principal."
  },
  {
    code: "M41", name: "Carril de aceleración", family: "marcas", shape: "mark", mark: "accelLane",
    purpose: "Marca un carril de aceleración.",
    action: "Usalo para incorporarte a la velocidad del flujo.",
    fact: "No te detengas en el carril de aceleración."
  },
  {
    code: "M42", name: "Tachas reflectivas", family: "marcas", shape: "mark", mark: "tachas",
    purpose: "Tachas que separan carriles.",
    action: "No las pises ni las cruces indebidamente.",
    fact: "De noche reflejan la luz de los faros."
  },
  {
    code: "M43", name: "Ojos de gato", family: "marcas", shape: "mark", mark: "catEyes",
    purpose: "Ojos de gato que delinean la calzada.",
    action: "Mantenete dentro del carril.",
    fact: "Ayudan a ver el borde con niebla o lluvia."
  },
  {
    code: "M44", name: "Delineador de curva", family: "marcas", shape: "mark", mark: "curveDelineator",
    purpose: "Delinea una curva.",
    action: "Seguí la curva sin invadir el carril contrario.",
    fact: "Los delineadores guían en curvas cerradas."
  },
  {
    code: "M45", name: "Franja de estacionamiento", family: "marcas", shape: "mark", mark: "parkingBay",
    purpose: "Delimita una franja de estacionamiento.",
    action: "Estacioná dentro de la franja y respetá las líneas.",
    fact: "No invadas rampas ni espacios reservados."
  }
];

const LUMINOSAS = [
  {
    code: "L01", name: "Semáforo", family: "luminosas", shape: "light", light: "trafficLight",
    purpose: "Regula el paso con luces roja, amarilla y verde.",
    action: "Respetá la luz: rojo detiene, amarillo advierte, verde habilita.",
    fact: "El amarillo no significa acelerar.",
    exam: [
      { q: "¿Qué significa el amarillo?", a: "Que el semáforo está por cambiar a rojo: hay que detenerse si es seguro hacerlo." }
    ]
  },
  {
    code: "L02", name: "Flechas de giro", family: "luminosas", shape: "light", light: "turnArrows",
    purpose: "Indican el sentido habilitado para girar.",
    action: "Girá sólo en la dirección de la flecha.",
    fact: "Si la flecha está apagada, rige la señalización del lugar."
  },
  {
    code: "L03", name: "Señal luminosa en paso a nivel", family: "luminosas", shape: "light", light: "railSignal",
    purpose: "Avisa con luces y sonido que se acerca un tren.",
    action: "Detenete y no cruces hasta que la señal se apague.",
    fact: "Nunca cruces aunque no veas el tren."
  }
];

SIGNS.push(...INFORMATIVAS, ...TRANSITORIAS, ...MARCAS, ...LUMINOSAS);

