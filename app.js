// ===== VARIABLES =====
// la familia que elegi en el filtro y las señales que se ven
var familiaElegida = "todas";
var visibles = [];

// busco en el HTML las partes que voy a usar
var tablero = document.getElementById("tablero");
var ficha = document.getElementById("ficha");
var consejos = document.getElementById("consejos");
var velo = document.getElementById("velo");


// ===== ARMAR EL TABLERO DE SEÑALES =====
function armarTablero() {
  // vacio el tablero
  tablero.innerHTML = "";
  visibles = [];

  // me quedo solo con las señales de la familia elegida
  for (var i = 0; i < SENALES.length; i++) {
    if (familiaElegida == "todas" || SENALES[i].familia == familiaElegida) {
      visibles.push(SENALES[i]);
    }
  }

  // creo un boton por cada señal
  for (var j = 0; j < visibles.length; j++) {
    var item = document.createElement("li");
    var boton = document.createElement("button");
    boton.className = "senal";
    boton.setAttribute("data-pos", j); // guardo en que posicion esta
    boton.innerHTML =
      '<span class="chapa">' + visibles[j].dibujo + "</span>" +
      '<span class="nombre">' + visibles[j].nombre + "</span>" +
      '<span class="codigo">' + visibles[j].codigo + "</span>";

    // al tocar la señal se abre su ficha
    boton.onclick = function () {
      abrirFicha(this.getAttribute("data-pos"));
    };

    // agrego el boton a la pagina
    item.appendChild(boton);
    tablero.appendChild(item);
  }

  // escribo cuantas señales se ven
  document.getElementById("cuenta").textContent = visibles.length;
}


// ===== FILTROS POR FAMILIA =====
var botonesFamilia = document.querySelectorAll(".familia");

for (var k = 0; k < botonesFamilia.length; k++) {
  botonesFamilia[k].onclick = function () {
    familiaElegida = this.getAttribute("data-familia");

    // desmarco todos los botones y marco el que toque
    for (var n = 0; n < botonesFamilia.length; n++) {
      botonesFamilia[n].classList.remove("activa");
    }
    this.classList.add("activa");

    armarTablero();
  };
}


// ===== ABRIR LA FICHA DE UNA SEÑAL =====
function abrirFicha(pos) {
  var senal = visibles[pos];

  // lleno la ficha con los datos de la señal
  document.getElementById("fichaDibujo").innerHTML = senal.dibujo;
  document.getElementById("fichaFamilia").textContent = FAMILIAS[senal.familia];
  document.getElementById("fichaNombre").textContent = senal.nombre;
  document.getElementById("fichaCodigo").textContent = senal.codigo;
  document.getElementById("fichaSignifica").textContent = senal.significa;
  document.getElementById("fichaHacer").textContent = senal.hacer;
  document.getElementById("fichaForma").textContent = FORMAS[senal.forma];
  document.getElementById("fichaPregunta").textContent = senal.pregunta;
  document.getElementById("fichaRespuesta").textContent = senal.respuesta;

  // la respuesta empieza escondida
  document.getElementById("fichaRespuesta").hidden = true;
  document.getElementById("revelar").textContent = "Ver respuesta";

  // muestro la ficha y el fondo oscuro
  ficha.hidden = false;
  velo.hidden = false;
}


// ===== CERRAR =====
// esconde la ficha, los consejos y el fondo oscuro
function cerrar() {
  ficha.hidden = true;
  consejos.hidden = true;
  velo.hidden = true;
}

document.getElementById("cerrar").onclick = cerrar;
document.getElementById("cerrarConsejos").onclick = cerrar;
velo.onclick = cerrar;


// ===== VER RESPUESTA =====
document.getElementById("revelar").onclick = function () {
  var respuesta = document.getElementById("fichaRespuesta");

  if (respuesta.hidden) {
    respuesta.hidden = false;
    this.textContent = "Ocultar respuesta";
  } else {
    respuesta.hidden = true;
    this.textContent = "Ver respuesta";
  }
};


// ===== CONSEJOS DE SEGURIDAD =====
document.getElementById("abrirConsejos").onclick = function () {
  consejos.hidden = false;
  velo.hidden = false;
};

// botones de peaton, ciclista y conductor
var botonesRol = document.querySelectorAll(".rol");

for (var r = 0; r < botonesRol.length; r++) {
  botonesRol[r].onclick = function () {
    // escondo todas las listas y desmarco los botones
    for (var t = 0; t < botonesRol.length; t++) {
      botonesRol[t].classList.remove("activa");
      document.getElementById(botonesRol[t].getAttribute("data-rol")).hidden = true;
    }

    // muestro solo la lista elegida
    this.classList.add("activa");
    document.getElementById(this.getAttribute("data-rol")).hidden = false;
  };
}


// ===== INICIO =====
// al cargar la pagina muestro todas las señales
armarTablero();
