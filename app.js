var familiaElegida = "todas";
var visibles = [];
var abierta = -1;
var botonQueAbrio = null;

var tablero = document.getElementById("tablero");
var ficha = document.getElementById("ficha");
var velo = document.getElementById("velo");

function armarTablero() {
  tablero.innerHTML = "";
  visibles = [];

  for (var i = 0; i < SENALES.length; i++) {
    if (familiaElegida === "todas" || SENALES[i].familia === familiaElegida) {
      visibles.push(SENALES[i]);
    }
  }

  for (var j = 0; j < visibles.length; j++) {
    var senal = visibles[j];
    var item = document.createElement("li");
    var boton = document.createElement("button");
    boton.type = "button";
    boton.className = "senal";
    boton.setAttribute("data-pos", j);
    boton.setAttribute("aria-label", senal.nombre + ". Ver significado");
    boton.innerHTML =
      '<span class="chapa">' + senal.dibujo + "</span>" +
      '<span class="nombre">' + senal.nombre + "</span>" +
      '<span class="codigo">' + senal.codigo + "</span>";

    boton.onclick = function () {
      botonQueAbrio = this;
      abrirFicha(Number(this.getAttribute("data-pos")));
    };

    item.appendChild(boton);
    tablero.appendChild(item);
  }

  document.getElementById("cuenta").textContent = visibles.length;
}

var botonesFamilia = document.querySelectorAll(".familia");

for (var k = 0; k < botonesFamilia.length; k++) {
  var fam = botonesFamilia[k].getAttribute("data-familia");
  var cantidad = 0;
  for (var m = 0; m < SENALES.length; m++) {
    if (fam === "todas" || SENALES[m].familia === fam) {
      cantidad++;
    }
  }
  botonesFamilia[k].innerHTML += ' <span class="cantidad">' + cantidad + "</span>";

  botonesFamilia[k].onclick = function () {
    familiaElegida = this.getAttribute("data-familia");
    for (var n = 0; n < botonesFamilia.length; n++) {
      botonesFamilia[n].classList.remove("activa");
      botonesFamilia[n].setAttribute("aria-pressed", "false");
    }
    this.classList.add("activa");
    this.setAttribute("aria-pressed", "true");
    armarTablero();
  };
}

document.getElementById("tapar").onclick = function () {
  var tapado = document.body.classList.toggle("practica");
  this.textContent = tapado ? "Mostrar nombres" : "Ocultar nombres";
  this.setAttribute("aria-pressed", tapado ? "true" : "false");
};

function abrirFicha(pos) {
  abierta = pos;
  var senal = visibles[pos];

  document.getElementById("fichaDibujo").innerHTML = senal.dibujo;
  document.getElementById("fichaFamilia").textContent = FAMILIAS[senal.familia];
  document.getElementById("fichaNombre").textContent = senal.nombre;
  document.getElementById("fichaCodigo").textContent = senal.codigo;
  document.getElementById("fichaSignifica").textContent = senal.significa;
  document.getElementById("fichaHacer").textContent = senal.hacer;
  document.getElementById("fichaForma").textContent = FORMAS[senal.forma];
  document.getElementById("fichaPregunta").textContent = senal.pregunta;
  document.getElementById("fichaRespuesta").textContent = senal.respuesta;
  document.getElementById("fichaPosicion").textContent = (pos + 1) + " de " + visibles.length;

  document.getElementById("fichaRespuesta").hidden = true;
  document.getElementById("revelar").textContent = "Ver respuesta";
  document.getElementById("revelar").setAttribute("aria-expanded", "false");

  var estabaCerrada = ficha.hidden;
  ficha.hidden = false;
  velo.hidden = false;
  document.body.classList.add("con-ficha");
  ficha.scrollTop = 0;
  if (estabaCerrada) {
    document.getElementById("cerrar").focus();
  }
}

function cerrarFicha() {
  ficha.hidden = true;
  velo.hidden = true;
  document.body.classList.remove("con-ficha");
  abierta = -1;
  if (botonQueAbrio) {
    botonQueAbrio.focus();
  }
}

document.getElementById("cerrar").onclick = cerrarFicha;
velo.onclick = function () {
  if (!ficha.hidden) {
    cerrarFicha();
  } else {
    cerrarConsejos();
  }
};

document.getElementById("revelar").onclick = function () {
  var respuesta = document.getElementById("fichaRespuesta");
  respuesta.hidden = !respuesta.hidden;
  this.textContent = respuesta.hidden ? "Ver respuesta" : "Ocultar respuesta";
  this.setAttribute("aria-expanded", respuesta.hidden ? "false" : "true");
};

document.getElementById("anterior").onclick = function () {
  var pos = abierta - 1;
  if (pos < 0) {
    pos = visibles.length - 1;
  }
  abrirFicha(pos);
};

document.getElementById("siguiente").onclick = function () {
  var pos = abierta + 1;
  if (pos >= visibles.length) {
    pos = 0;
  }
  abrirFicha(pos);
};

var consejos = document.getElementById("consejos");
var botonesRol = document.querySelectorAll(".rol");

document.getElementById("abrirConsejos").onclick = function () {
  consejos.hidden = false;
  velo.hidden = false;
  document.body.classList.add("con-ficha");
  document.getElementById("cerrarConsejos").focus();
};

function cerrarConsejos() {
  consejos.hidden = true;
  velo.hidden = true;
  document.body.classList.remove("con-ficha");
  document.getElementById("abrirConsejos").focus();
}

document.getElementById("cerrarConsejos").onclick = cerrarConsejos;

for (var r = 0; r < botonesRol.length; r++) {
  botonesRol[r].onclick = function () {
    var elegido = this.getAttribute("data-rol");
    for (var t = 0; t < botonesRol.length; t++) {
      var rol = botonesRol[t].getAttribute("data-rol");
      botonesRol[t].classList.remove("activa");
      botonesRol[t].setAttribute("aria-pressed", "false");
      document.getElementById(rol).hidden = true;
    }
    this.classList.add("activa");
    this.setAttribute("aria-pressed", "true");
    document.getElementById(elegido).hidden = false;
  };
}

document.onkeydown = function (evento) {
  if (!consejos.hidden && evento.key === "Escape") {
    cerrarConsejos();
    return;
  }
  if (abierta === -1) {
    return;
  }
  if (evento.key === "Escape") {
    cerrarFicha();
  } else if (evento.key === "ArrowRight") {
    document.getElementById("siguiente").click();
  } else if (evento.key === "ArrowLeft") {
    document.getElementById("anterior").click();
  }
};

armarTablero();
