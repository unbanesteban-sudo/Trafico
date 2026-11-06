

var NEGRO = "#1a1a1a";
var ROJO = "#c8102e";
var AZUL = "#0a4f9e";
var AMARILLO = "#f6c500";
var NARANJA = "#ee7a12";
var VERDE = "#178a45";
var BLANCO = "#ffffff";
var ASFALTO = "#3a3a3a";

var contadorId = 0;

function lienzo(contenido) {
  return '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' + contenido + "</svg>";
}

function trazo(grosor) {
  return 'fill="none" stroke="currentColor" stroke-width="' + grosor + '" stroke-linecap="round" stroke-linejoin="round"';
}

function texto(t, x, y, tam, color) {
  return '<text x="' + x + '" y="' + y + '" text-anchor="middle" dominant-baseline="central" ' +
    'font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="' + tam + '" fill="' + (color || "currentColor") + '">' + t + "</text>";
}

function punta(deX, deY, x, y, tam) {
  var dx = x - deX;
  var dy = y - deY;
  var largo = Math.sqrt(dx * dx + dy * dy);
  dx = dx / largo;
  dy = dy / largo;
  var px = -dy;
  var py = dx;
  var r = function (n) { return Math.round(n * 10) / 10; };
  var p1 = r(x + dx * tam) + "," + r(y + dy * tam);
  var p2 = r(x + px * tam * 0.78) + "," + r(y + py * tam * 0.78);
  var p3 = r(x - px * tam * 0.78) + "," + r(y - py * tam * 0.78);
  return '<polygon points="' + p1 + " " + p2 + " " + p3 + '" fill="currentColor"/>';
}

function flecha(camino, deX, deY, x, y, grosor, tam) {
  return '<path d="' + camino + '" ' + trazo(grosor) + "/>" + punta(deX, deY, x, y, tam);
}

function girar(dibujo, grados) {
  return '<g transform="rotate(' + grados + ' 50 50)">' + dibujo + "</g>";
}

function espejar(dibujo) {
  return '<g transform="translate(100 0) scale(-1 1)">' + dibujo + "</g>";
}

function ubicar(dibujo, escala, color, dx, dy) {
  dx = dx || 0;
  dy = dy || 0;
  return '<g color="' + color + '" fill="currentColor" transform="translate(' + (50 + dx) + " " + (50 + dy) +
    ") scale(" + escala + ') translate(-50 -50)">' + dibujo + "</g>";
}

var P = {};

P.flechaArriba = function () {
  return '<path d="M50 6 L80 40 H60 V94 H40 V40 H20 Z"/>';
};

P.giroIzquierda = function () {
  return flecha("M62 94 V54 Q62 36 44 36 H36", 44, 36, 36, 36, 15, 22);
};

P.giroDerecha = function () {
  return espejar(P.giroIzquierda());
};

P.vueltaU = function () {
  return flecha("M68 94 V44 Q68 20 49 20 Q30 20 30 44 V58", 30, 44, 30, 58, 13, 20);
};

P.cambioCarril = function () {
  return '<path d="M50 4 V96" ' + trazo(5) + ' stroke-dasharray="10 9"/>' +
    flecha("M30 92 V70 Q30 54 50 48 Q66 43 68 30", 68, 44, 68, 30, 11, 17);
};

P.auto = function (fondo) {
  return '<path d="M6 68 V55 Q6 47 14 46 L27 44 L38 30 Q41 27 46 27 H67 Q72 27 75 31 L85 44 Q94 46 94 54 V68 Z"/>' +
    '<path d="M33 44 L42 33 H55 V44 Z M60 44 V33 H70 L78 44 Z" fill="' + fondo + '"/>' +
    '<circle cx="27" cy="69" r="11" fill="' + fondo + '"/><circle cx="27" cy="69" r="8"/>' +
    '<circle cx="73" cy="69" r="11" fill="' + fondo + '"/><circle cx="73" cy="69" r="8"/>';
};

P.autoAtras = function (fondo) {
  return '<path d="M20 30 Q22 22 30 22 H70 Q78 22 80 30 L84 48 Q90 50 90 56 V76 H10 V56 Q10 50 16 48 Z"/>' +
    '<path d="M28 30 H72 L75 46 H25 Z" fill="' + fondo + '"/>' +
    '<rect x="12" y="76" width="16" height="12"/><rect x="72" y="76" width="16" height="12"/>' +
    '<rect x="17" y="58" width="12" height="7" fill="' + fondo + '"/><rect x="71" y="58" width="12" height="7" fill="' + fondo + '"/>';
};

P.camion = function (fondo) {
  return '<path d="M4 22 H60 V66 H4 Z"/>' +
    '<path d="M63 36 H81 Q85 36 87 40 L96 53 V66 H63 Z"/>' +
    '<path d="M69 41 H80 L87 52 H69 Z" fill="' + fondo + '"/>' +
    '<circle cx="18" cy="70" r="10" fill="' + fondo + '"/><circle cx="18" cy="70" r="7.5"/>' +
    '<circle cx="42" cy="70" r="10" fill="' + fondo + '"/><circle cx="42" cy="70" r="7.5"/>' +
    '<circle cx="80" cy="70" r="10" fill="' + fondo + '"/><circle cx="80" cy="70" r="7.5"/>';
};

P.colectivo = function (fondo) {
  return '<rect x="4" y="22" width="92" height="46" rx="7"/>' +
    '<rect x="11" y="29" width="15" height="15" fill="' + fondo + '"/>' +
    '<rect x="30" y="29" width="15" height="15" fill="' + fondo + '"/>' +
    '<rect x="49" y="29" width="15" height="15" fill="' + fondo + '"/>' +
    '<rect x="68" y="29" width="21" height="15" fill="' + fondo + '"/>' +
    '<circle cx="24" cy="70" r="10" fill="' + fondo + '"/><circle cx="24" cy="70" r="7.5"/>' +
    '<circle cx="76" cy="70" r="10" fill="' + fondo + '"/><circle cx="76" cy="70" r="7.5"/>';
};

P.moto = function () {
  return '<circle cx="20" cy="68" r="14" ' + trazo(7) + "/>" +
    '<circle cx="80" cy="68" r="14" ' + trazo(7) + "/>" +
    '<path d="M20 68 L38 54 H62 L80 68" ' + trazo(7) + "/>" +
    '<path d="M80 68 L70 34 M62 32 H76" ' + trazo(7) + "/>" +
    '<path d="M32 42 H62 Q70 42 70 50 L66 56 H38 Z"/>';
};

P.bici = function () {
  return '<circle cx="22" cy="64" r="17" ' + trazo(6) + "/>" +
    '<circle cx="78" cy="64" r="17" ' + trazo(6) + "/>" +
    '<path d="M22 64 L48 64 L38 38 Z M38 38 H68 L48 64 M68 38 L78 64" ' + trazo(6) + "/>" +
    '<path d="M31 32 H45 M68 38 L64 26 H75" ' + trazo(6) + "/>";
};

P.ciclista = function () {
  return P.bici() +
    '<circle cx="62" cy="10" r="7"/>' +
    '<path d="M40 34 L58 20 L67 33 M58 20 L66 32 M40 34 L54 46 L48 62" ' + trazo(7) + "/>";
};

P.peaton = function () {
  return '<circle cx="54" cy="12" r="9"/>' +
    '<path d="M52 27 L46 56" ' + trazo(12) + "/>" +
    '<path d="M50 32 L37 45 L33 56 M51 32 L63 44 L72 50" ' + trazo(8) + "/>" +
    '<path d="M46 56 L58 71 L62 92 M46 56 L39 74 L27 90" ' + trazo(9) + "/>";
};

P.chicos = function () {
  return '<g transform="translate(2 20) scale(0.78)">' + P.peaton() + "</g>" +
    '<g transform="translate(40 8) scale(0.92)">' + P.peaton() + "</g>" +
    '<rect x="66" y="38" width="13" height="16" rx="2"/>';
};

P.chicoPelota = function () {
  return '<g transform="translate(-6 8) scale(0.9)">' + P.peaton() + "</g>" +
    '<circle cx="78" cy="78" r="12"/>';
};

P.vaca = function (fondo) {
  return '<path d="M14 36 Q14 28 23 28 H64 Q72 28 74 36 V56 Q74 61 69 61 H19 Q14 61 14 56 Z"/>' +
    '<path d="M18 58 V84 H26 V58 Z M30 58 V84 H38 V58 Z M56 58 V84 H64 V58 Z M66 58 V84 H74 V58 Z"/>' +
    '<path d="M70 30 L88 28 Q94 28 94 34 V46 Q94 51 89 51 L74 48 Z"/>' +
    '<path d="M78 28 L74 18 M88 28 L92 18" ' + trazo(4) + "/>" +
    '<path d="M14 34 Q5 42 8 58" ' + trazo(4) + "/>" +
    '<circle cx="38" cy="40" r="6" fill="' + fondo + '"/>';
};

P.caballo = function () {
  return '<path d="M16 44 Q16 34 27 34 H58 L69 16 Q72 11 78 13 L92 22 Q95 26 91 29 L82 27 L74 42 Q71 54 63 55 H27 Q16 55 16 46 Z"/>' +
    '<path d="M25 52 L22 84 M34 52 L37 84 M57 52 L54 84 M64 52 L70 84" ' + trazo(6) + "/>" +
    '<path d="M18 38 Q6 44 10 66" ' + trazo(5) + "/>";
};

P.carro = function () {
  return '<g transform="translate(36 6) scale(0.64)">' + P.caballo() + "</g>" +
    '<rect x="4" y="40" width="34" height="16"/>' +
    '<circle cx="20" cy="66" r="11" ' + trazo(5) + "/>" +
    '<path d="M38 48 L52 46" ' + trazo(4) + "/>";
};

P.tractor = function () {
  return '<circle cx="30" cy="64" r="20" ' + trazo(8) + "/>" +
    '<circle cx="30" cy="64" r="5"/>' +
    '<circle cx="80" cy="74" r="11" ' + trazo(7) + "/>" +
    '<path d="M38 42 H86 V64 H50 Z"/>' +
    '<path d="M18 16 H46 V44" ' + trazo(7) + "/>" +
    '<path d="M72 42 V24" ' + trazo(6) + "/>";
};

P.letraE = function () {
  return texto("E", 50, 53, 70);
};

P.bocina = function () {
  return '<path d="M12 40 H32 L70 16 V84 L32 60 H12 Z"/>' +
    '<path d="M80 34 Q90 50 80 66" ' + trazo(6) + "/>";
};

P.cadenas = function () {
  return '<circle cx="50" cy="50" r="34" ' + trazo(14) + "/>" +
    '<circle cx="50" cy="50" r="9"/>' +
    '<path d="M24 22 L40 42 M76 22 L60 42 M24 78 L40 58 M76 78 L60 58" stroke="currentColor" stroke-width="6" stroke-dasharray="5 4"/>';
};

P.avion = function () {
  return '<path d="M50 4 Q56 4 56 16 V38 L94 58 V68 L56 56 V78 L68 87 V95 L50 90 L32 95 V87 L44 78 V56 L6 68 V58 L44 38 V16 Q44 4 50 4 Z"/>';
};

P.tren = function (fondo) {
  return '<path d="M8 38 H62 V70 H8 Z M62 20 H92 V70 H62 Z M16 22 H28 V38 H16 Z"/>' +
    '<rect x="68" y="27" width="17" height="14" fill="' + fondo + '"/>' +
    '<circle cx="22" cy="74" r="10" fill="' + fondo + '"/><circle cx="22" cy="74" r="7.5"/>' +
    '<circle cx="46" cy="74" r="10" fill="' + fondo + '"/><circle cx="46" cy="74" r="7.5"/>' +
    '<circle cx="78" cy="74" r="10" fill="' + fondo + '"/><circle cx="78" cy="74" r="7.5"/>';
};

P.barrera = function () {
  return '<path d="M8 52 L92 30" stroke="currentColor" stroke-width="10"/>' +
    '<path d="M20 49 L30 46 M46 45 L56 42 M72 38 L82 35" stroke="' + BLANCO + '" stroke-width="10"/>' +
    '<path d="M14 50 V92 M8 92 H22" ' + trazo(7) + "/>";
};

P.ambulancia = function (fondo) {
  return '<path d="M4 28 H64 V68 H4 Z M64 38 H80 L94 54 V68 H64 Z"/>' +
    '<path d="M69 43 H79 L88 54 H69 Z" fill="' + fondo + '"/>' +
    '<rect x="28" y="34" width="12" height="28" fill="' + fondo + '"/><rect x="20" y="42" width="28" height="12" fill="' + fondo + '"/>' +
    '<circle cx="20" cy="70" r="10" fill="' + fondo + '"/><circle cx="20" cy="70" r="7.5"/>' +
    '<circle cx="78" cy="70" r="10" fill="' + fondo + '"/><circle cx="78" cy="70" r="7.5"/>';
};

P.semaforoChico = function () {
  return '<rect x="32" y="4" width="36" height="92" rx="8" fill="' + NEGRO + '"/>' +
    '<circle cx="50" cy="22" r="11" fill="' + ROJO + '"/>' +
    '<circle cx="50" cy="50" r="11" fill="' + AMARILLO + '"/>' +
    '<circle cx="50" cy="78" r="11" fill="' + VERDE + '"/>';
};

P.curva = function () {
  return flecha("M40 94 V64 Q40 34 64 26", 52, 29, 64, 25, 13, 20);
};

P.curvaPronunciada = function () {
  return flecha("M38 94 V40 H58", 40, 40, 58, 40, 14, 22);
};

P.contracurva = function () {
  return flecha("M34 94 V80 Q34 60 50 52 Q66 44 66 26", 66, 40, 66, 24, 13, 20);
};

P.sinuoso = function () {
  return flecha("M44 96 Q22 84 40 72 Q60 60 40 48 Q20 36 40 24", 30, 32, 42, 21, 11, 18);
};

P.rotonda = function () {
  var dibujo = "";
  var i;
  for (i = 0; i < 3; i++) {
    var a1 = (i * 120 + 20) * Math.PI / 180;
    var a2 = (i * 120 + 100) * Math.PI / 180;
    var x1 = 50 + 28 * Math.cos(a1);
    var y1 = 50 - 28 * Math.sin(a1);
    var x2 = 50 + 28 * Math.cos(a2);
    var y2 = 50 - 28 * Math.sin(a2);
    var cam = "M" + x1.toFixed(1) + " " + y1.toFixed(1) + " A28 28 0 0 0 " + x2.toFixed(1) + " " + y2.toFixed(1);
    var tanX = x2 + 10 * Math.sin(a2);
    var tanY = y2 + 10 * Math.cos(a2);
    dibujo += '<path d="' + cam + '" ' + trazo(10) + "/>" + punta(tanX, tanY, x2, y2, 14);
  }
  return dibujo;
};

P.cruce = function () {
  return '<path d="M42 6 H58 V42 H94 V58 H58 V94 H42 V58 H6 V42 H42 Z"/>';
};

P.caminoLateral = function () {
  return '<path d="M38 6 H54 V40 H90 V56 H54 V94 H38 Z"/>';
};

P.bifurcacionT = function () {
  return '<path d="M8 20 H92 V36 H58 V94 H42 V36 H8 Z"/>';
};

P.bifurcacionY = function () {
  return '<path d="M42 94 V56 L14 20 L27 10 L50 40 L73 10 L86 20 L58 56 V94 Z"/>';
};

P.incorporacion = function () {
  return flecha("M60 94 V30", 60, 40, 60, 28, 13, 22) +
    '<path d="M24 94 V74 Q24 62 40 56 L54 50" ' + trazo(12) + "/>";
};

P.estrechamiento = function () {
  return '<path d="M26 94 V66 L40 50 V6 M74 94 V66 L60 50 V6" ' + trazo(10) + "/>";
};

P.estrechamientoDerecha = function () {
  return '<path d="M30 94 V6 M76 94 V66 L58 50 V6" ' + trazo(10) + "/>";
};

P.puenteAngosto = function () {
  return '<path d="M26 10 L38 22 V78 L26 90 M74 10 L62 22 V78 L74 90" ' + trazo(10) + "/>";
};

P.calzadaIrregular = function () {
  return '<path d="M6 70 Q17 44 28 70 Q39 44 50 70 Q61 44 72 70 Q83 44 94 70 V78 H6 Z"/>';
};

P.lomada = function () {
  return '<path d="M4 66 H24 Q50 26 76 66 H96 V76 H4 Z"/>';
};

P.baden = function () {
  return '<path d="M4 40 H24 Q50 86 76 40 H96" ' + trazo(12) + "/>";
};

P.pendiente = function () {
  return '<path d="M6 78 H94 L6 40 Z"/>' + texto("10%", 66, 34, 26);
};

P.resbaladiza = function () {
  return '<g transform="translate(18 -6) scale(0.64)">' + P.auto(AMARILLO) + "</g>" +
    '<path d="M22 92 Q12 80 24 70 Q36 60 26 50 M52 92 Q42 80 54 70 Q66 60 56 50" ' + trazo(6) + "/>";
};

P.derrumbe = function () {
  return '<path d="M6 94 V8 L40 30 L30 94 Z"/>' +
    '<circle cx="54" cy="44" r="8"/><circle cx="70" cy="62" r="10"/><circle cx="52" cy="80" r="9"/><circle cx="84" cy="84" r="7"/>';
};

P.alturaLimitada = function () {
  return '<path d="M38 6 H62 L50 22 Z M38 94 H62 L50 78 Z"/>' + texto("4,10 m", 50, 50, 24);
};

P.anchoLimitado = function () {
  return '<path d="M4 36 V64 L18 50 Z M96 36 V64 L82 50 Z"/>' + texto("3 m", 50, 51, 28);
};

P.puenteMovil = function () {
  return '<path d="M6 54 H34 L46 28 M94 54 H66 L54 28" ' + trazo(9) + "/>" +
    '<path d="M6 74 Q16 66 26 74 Q36 82 46 74 Q56 66 66 74 Q76 82 86 74 Q91 70 94 72" ' + trazo(5) + "/>";
};

P.tunel = function () {
  return '<path d="M12 90 V48 Q12 12 50 12 Q88 12 88 48 V90 H70 V50 Q70 30 50 30 Q30 30 30 50 V90 Z"/>';
};

P.calzadaDividida = function () {
  return '<rect x="40" y="22" width="20" height="56" rx="10"/>' +
    flecha("M24 94 V30", 24, 40, 24, 26, 10, 16) +
    flecha("M76 6 V70", 76, 60, 76, 74, 10, 16);
};

P.dobleCirculacion = function () {
  return flecha("M34 94 V30", 34, 40, 34, 26, 12, 18) +
    flecha("M66 6 V70", 66, 60, 66, 74, 12, 18);
};

P.viento = function () {
  return '<path d="M16 8 V94" ' + trazo(7) + "/>" +
    '<path d="M18 14 L90 30 V46 L18 54 Z"/>' +
    '<path d="M40 19 V49 M62 24 V44" stroke="' + AMARILLO + '" stroke-width="6"/>';
};

P.preventivaPare = function () {
  return '<g transform="translate(20 4) scale(0.6)">' + octogono() + "</g>" + texto("200 m", 50, 82, 20);
};

P.preventivaCeda = function () {
  return '<g transform="translate(20 4) scale(0.6)">' + triangulCeda(false) + "</g>" + texto("200 m", 50, 82, 20);
};

P.curvaPeligrosa = function () {
  return flecha("M30 92 V62 L58 40 V30", 58, 40, 58, 26, 11, 17);
};

P.atencion = function () {
  return '<rect x="43" y="10" width="14" height="56" rx="3"/><circle cx="50" cy="84" r="8"/>';
};

P.obrero = function () {
  return '<circle cx="34" cy="14" r="9"/>' +
    '<path d="M34 28 L44 54" ' + trazo(12) + "/>" +
    '<path d="M36 34 L60 46 L70 56 M44 54 L36 74 L30 92 M44 54 L56 72 L54 92" ' + trazo(8) + "/>" +
    '<path d="M60 40 L84 78" ' + trazo(5) + "/>" +
    '<path d="M78 72 L94 82 L88 92 L74 84 Z"/>' +
    '<path d="M60 94 Q70 78 84 94 Z"/>';
};

P.desvio = function () {
  return flecha("M34 94 V64 Q34 52 50 50 Q66 48 66 36 V30", 66, 40, 66, 26, 12, 19);
};

P.cruzRoja = function () {
  return '<path d="M38 10 H62 V38 H90 V62 H62 V90 H38 V62 H10 V38 H38 Z" fill="' + ROJO + '"/>';
};

P.telefono = function () {
  return '<path d="M26 10 Q14 12 12 26 Q12 56 40 80 Q62 96 76 88 L86 78 Q90 72 84 66 L70 56 Q64 52 58 58 L52 64 Q38 56 32 42 L38 36 Q44 30 40 24 L32 12 Q30 9 26 10 Z"/>';
};

P.surtidor = function (fondo) {
  return '<rect x="18" y="12" width="40" height="80" rx="3"/>' +
    '<rect x="25" y="20" width="26" height="20" fill="' + fondo + '"/>' +
    '<path d="M58 34 H70 Q78 34 78 42 V74 Q78 82 84 78 V44 L76 30" ' + trazo(6) + "/>";
};

P.hotel = function () {
  return texto("H", 50, 54, 82);
};

P.cubiertos = function () {
  return '<path d="M26 8 V34 Q26 46 36 46 Q46 46 46 34 V8 M36 8 V34" ' + trazo(6) + "/>" +
    '<path d="M36 46 V92" ' + trazo(9) + "/>" +
    '<path d="M64 8 Q82 18 80 56 H68 Z"/>' +
    '<path d="M70 56 V92" ' + trazo(9) + "/>";
};

P.taza = function () {
  return '<path d="M18 30 H70 V56 Q70 76 50 76 H38 Q18 76 18 56 Z"/>' +
    '<path d="M70 38 H76 Q86 38 86 48 Q86 58 76 58 H70" ' + trazo(6) + "/>" +
    '<path d="M10 88 H88" ' + trazo(7) + "/>";
};

P.carpa = function (fondo) {
  return '<path d="M50 12 L94 88 H6 Z"/><path d="M50 46 L64 88 H36 Z" fill="' + fondo + '"/>';
};

P.correo = function () {
  return '<rect x="10" y="22" width="80" height="56" ' + trazo(7) + "/>" +
    '<path d="M10 22 L50 54 L90 22" ' + trazo(7) + "/>";
};

P.llave = function (fondo) {
  return '<path d="M24 80 L60 44" ' + trazo(14) + "/>" +
    '<circle cx="68" cy="32" r="22"/>' +
    '<path d="M64 10 H80 V30 H64 Z" fill="' + fondo + '" transform="rotate(45 72 20)"/>';
};

P.gomeria = function () {
  return '<circle cx="50" cy="50" r="32" ' + trazo(16) + "/>" +
    '<circle cx="50" cy="50" r="8"/>';
};

P.policia = function () {
  return texto("POLICÍA", 50, 52, 21);
};

P.taxi = function (fondo) {
  return '<rect x="34" y="6" width="32" height="16" rx="2"/>' +
    texto("TAXI", 50, 14.5, 12, fondo) +
    '<g transform="translate(0 16) scale(1 0.84)">' + P.auto(fondo) + "</g>";
};

P.estacionamiento = function () {
  return texto("E", 50, 53, 76);
};

function octogono() {
  return '<polygon points="30,2 70,2 98,30 98,70 70,98 30,98 2,70 2,30" fill="' + ROJO + '"/>' +
    '<polygon points="32,7 68,7 93,32 93,68 68,93 32,93 7,68 7,32" fill="none" stroke="' + BLANCO + '" stroke-width="2.5"/>' +
    texto("PARE", 50, 51, 27, BLANCO);
}

function triangulCeda(conTexto) {
  var t = '<path d="M5 8 H95 L50 94 Z" fill="' + BLANCO + '" stroke="' + ROJO + '" stroke-width="9" stroke-linejoin="round"/>';
  if (conTexto) {
    t += texto("CEDA EL", 50, 27, 10.5, NEGRO) + texto("PASO", 50, 39, 10.5, NEGRO);
  }
  return t;
}

var DIBUJAR = {};

DIBUJAR.pare = function () {
  return lienzo(octogono());
};

DIBUJAR.ceda = function () {
  return lienzo(triangulCeda(true));
};

DIBUJAR.contramano = function () {
  return lienzo('<circle cx="50" cy="50" r="47" fill="' + ROJO + '"/><rect x="16" y="41" width="68" height="18" fill="' + BLANCO + '"/>');
};

DIBUJAR.prohibicion = function (picto, escala, opciones) {
  opciones = opciones || {};
  var barra = '<line x1="20" y1="20" x2="80" y2="80" stroke="' + ROJO + '" stroke-width="9"/>';
  if (opciones.doble) {
    barra += '<line x1="80" y1="20" x2="20" y2="80" stroke="' + ROJO + '" stroke-width="9"/>';
  }
  return lienzo('<circle cx="50" cy="50" r="44" fill="' + BLANCO + '" stroke="' + ROJO + '" stroke-width="10"/>' +
    ubicar(P[picto](BLANCO), escala || 0.56, NEGRO, opciones.dx, opciones.dy) + barra);
};

DIBUJAR.adelantarse = function () {
  return lienzo('<circle cx="50" cy="50" r="44" fill="' + BLANCO + '" stroke="' + ROJO + '" stroke-width="10"/>' +
    ubicar(P.autoAtras(BLANCO), 0.3, ROJO, -15, 2) +
    ubicar(P.autoAtras(BLANCO), 0.3, NEGRO, 15, 2) +
    '<line x1="20" y1="20" x2="80" y2="80" stroke="' + ROJO + '" stroke-width="9"/>');
};

DIBUJAR.limite = function (contenido) {
  return lienzo('<circle cx="50" cy="50" r="44" fill="' + BLANCO + '" stroke="' + ROJO + '" stroke-width="10"/>' +
    '<g color="' + NEGRO + '" fill="currentColor">' + contenido + "</g>");
};

DIBUJAR.prioridadContraria = function () {
  return DIBUJAR.limite(
    '<g color="' + ROJO + '">' + flecha("M38 76 V40", 38, 44, 38, 34, 8, 13) + "</g>" +
    flecha("M62 24 V60", 62, 56, 62, 66, 8, 13)
  );
};

DIBUJAR.obligacion = function (picto, escala, giro) {
  var dibujo = P[picto](AZUL);
  if (giro) {
    dibujo = girar(dibujo, giro);
  }
  return lienzo('<circle cx="50" cy="50" r="47" fill="' + BLANCO + '"/><circle cx="50" cy="50" r="44" fill="' + AZUL + '"/>' +
    ubicar(dibujo, escala || 0.56, BLANCO));
};

DIBUJAR.obligacionLibre = function (contenido) {
  return lienzo('<circle cx="50" cy="50" r="47" fill="' + BLANCO + '"/><circle cx="50" cy="50" r="44" fill="' + AZUL + '"/>' +
    '<g color="' + BLANCO + '" fill="currentColor">' + contenido + "</g>");
};

DIBUJAR.rombo = function (picto, escala, color, opciones) {
  opciones = opciones || {};
  var fondo = color || AMARILLO;
  var fin = "";
  if (opciones.fin) {
    fin = '<line x1="28" y1="72" x2="72" y2="28" stroke="' + NEGRO + '" stroke-width="5"/>';
  }
  var colorPicto = opciones.gris ? "#8a8a8a" : NEGRO;
  return lienzo('<polygon points="50,2 98,50 50,98 2,50" fill="' + NEGRO + '"/>' +
    '<polygon points="50,7 93,50 50,93 7,50" fill="' + fondo + '"/>' +
    '<polygon points="50,10 90,50 50,90 10,50" fill="none" stroke="' + NEGRO + '" stroke-width="1.5"/>' +
    ubicar(P[picto](fondo), escala || 0.5, colorPicto, opciones.dx, opciones.dy) + fin);
};

DIBUJAR.peligro = function (picto, escala, dy) {
  return lienzo('<path d="M50 7 L95 88 H5 Z" fill="' + BLANCO + '" stroke="' + ROJO + '" stroke-width="9" stroke-linejoin="round"/>' +
    ubicar(P[picto](BLANCO), escala || 0.4, NEGRO, 0, dy === undefined ? 12 : dy));
};

DIBUJAR.cruzSanAndres = function (doble) {
  var brazo = function (grados, cy, escala) {
    return '<g transform="translate(50 ' + cy + ") scale(" + escala + ") rotate(" + grados + ')">' +
      '<rect x="-46" y="-8" width="92" height="16" fill="' + BLANCO + '" stroke="' + ROJO + '" stroke-width="4"/></g>';
  };
  if (doble) {
    return lienzo(brazo(38, 34, 0.82) + brazo(-38, 34, 0.82) + brazo(38, 70, 0.82) + brazo(-38, 70, 0.82));
  }
  return lienzo(brazo(40, 50, 1) + brazo(-40, 50, 1));
};

DIBUJAR.panel = function (tipo) {
  contadorId = contadorId + 1;
  var id = "corte" + contadorId;
  var franjas = "";
  var i;
  if (tipo === "chevron") {
    return lienzo('<rect x="24" y="4" width="52" height="92" fill="' + BLANCO + '" stroke="' + NEGRO + '" stroke-width="2"/>' +
      '<polygon points="34,14 52,14 70,50 52,86 34,86 52,50" fill="' + ROJO + '"/>');
  }
  for (i = -100; i < 120; i += 22) {
    franjas += '<polygon points="' + i + ",100 " + (i + 11) + ",100 " + (i + 111) + ",0 " + (i + 100) + ',0" fill="' + ROJO + '"/>';
  }
  return lienzo('<clipPath id="' + id + '"><rect x="30" y="4" width="40" height="92"/></clipPath>' +
    '<rect x="30" y="4" width="40" height="92" fill="' + BLANCO + '"/>' +
    '<g clip-path="url(#' + id + ')">' + franjas + "</g>" +
    '<rect x="30" y="4" width="40" height="92" fill="none" stroke="' + NEGRO + '" stroke-width="2"/>');
};

DIBUJAR.servicio = function (picto, escala) {
  return lienzo('<rect x="14" y="3" width="72" height="94" rx="4" fill="' + AZUL + '"/>' +
    '<rect x="21" y="10" width="58" height="58" fill="' + BLANCO + '"/>' +
    '<g transform="translate(0 -11)">' + ubicar(P[picto](BLANCO), escala || 0.46, NEGRO) + "</g>");
};

DIBUJAR.rutaNacional = function (numero) {
  return lienzo('<path d="M12 6 H88 V22 Q88 70 50 95 Q12 70 12 22 Z" fill="' + BLANCO + '" stroke="' + NEGRO + '" stroke-width="4"/>' +
    texto("RUTA NAC.", 50, 18, 9, NEGRO) + texto(numero, 50, 52, 40, NEGRO));
};

DIBUJAR.rutaProvincial = function (numero) {
  return lienzo('<rect x="16" y="6" width="68" height="88" fill="' + BLANCO + '" stroke="' + NEGRO + '" stroke-width="4"/>' +
    '<rect x="22" y="12" width="56" height="76" fill="none" stroke="' + NEGRO + '" stroke-width="1.5"/>' +
    texto("RUTA", 50, 22, 9, NEGRO) + texto("PROVINCIAL", 50, 32, 7.5, NEGRO) + texto(numero, 50, 62, 40, NEGRO));
};

DIBUJAR.autopista = function (fin) {
  var barra = fin ? '<line x1="12" y1="90" x2="88" y2="10" stroke="' + ROJO + '" stroke-width="9"/>' : "";
  return lienzo('<rect x="4" y="4" width="92" height="92" rx="4" fill="' + VERDE + '"/>' +
    '<path d="M24 92 L42 34 M76 92 L58 34" stroke="' + BLANCO + '" stroke-width="9"/>' +
    '<path d="M50 92 V80 M50 70 V60 M50 50 V42" stroke="' + BLANCO + '" stroke-width="4"/>' +
    '<rect x="14" y="20" width="72" height="11" fill="' + BLANCO + '"/>' + barra);
};

DIBUJAR.sinSalida = function () {
  return lienzo('<rect x="4" y="4" width="92" height="92" rx="4" fill="' + AZUL + '"/>' +
    '<rect x="40" y="36" width="20" height="56" fill="' + BLANCO + '"/>' +
    '<rect x="18" y="18" width="64" height="20" fill="' + ROJO + '"/>');
};

DIBUJAR.marca = function (contenido) {
  return lienzo('<rect x="2" y="2" width="96" height="96" fill="' + ASFALTO + '"/>' + contenido);
};

function luz(cx, cy, color, prendida) {
  return '<circle cx="' + cx + '" cy="' + cy + '" r="11" fill="' + color + '" opacity="' + (prendida ? 1 : 0.25) + '"/>';
}

DIBUJAR.semaforo = function (cual) {
  return lienzo('<rect x="34" y="2" width="32" height="96" rx="6" fill="' + NEGRO + '"/>' +
    luz(50, 20, ROJO, cual === "todas" || cual === "rojo") +
    luz(50, 50, AMARILLO, cual === "todas" || cual === "amarillo") +
    luz(50, 80, VERDE, cual === "todas" || cual === "verde"));
};

DIBUJAR.semaforoIntermitente = function () {
  return lienzo('<rect x="34" y="2" width="32" height="96" rx="6" fill="' + NEGRO + '"/>' +
    luz(50, 20, ROJO, false) +
    '<circle class="titila" cx="50" cy="50" r="11" fill="' + AMARILLO + '"/>' +
    '<circle cx="50" cy="50" r="16" fill="none" stroke="' + AMARILLO + '" stroke-width="2" stroke-dasharray="3 4"/>' +
    luz(50, 80, VERDE, false));
};

DIBUJAR.semaforoGiro = function () {
  return lienzo('<rect x="10" y="2" width="32" height="96" rx="6" fill="' + NEGRO + '"/>' +
    luz(26, 20, ROJO, true) + luz(26, 50, AMARILLO, false) + luz(26, 80, VERDE, false) +
    '<rect x="44" y="64" width="34" height="32" rx="6" fill="' + NEGRO + '"/>' +
    '<g color="' + VERDE + '">' + flecha("M51 80 H62", 58, 80, 62, 80, 6, 10) + "</g>");
};

DIBUJAR.semaforoPeatonal = function () {
  var parado = '<g transform="translate(36 6) scale(0.28)" fill="' + ROJO + '">' +
    '<circle cx="50" cy="12" r="10"/><rect x="38" y="26" width="24" height="40" rx="6"/><rect x="38" y="62" width="9" height="34"/><rect x="53" y="62" width="9" height="34"/></g>';
  var caminando = '<g transform="translate(36 52) scale(0.28)" color="' + VERDE + '" fill="currentColor">' + P.peaton() + "</g>";
  return lienzo('<rect x="30" y="2" width="40" height="96" rx="6" fill="' + NEGRO + '"/>' +
    '<rect x="34" y="6" width="32" height="40" fill="#2a2a2a"/>' + parado +
    '<rect x="34" y="52" width="32" height="40" fill="#2a2a2a"/>' + caminando);
};

DIBUJAR.pasoNivelLuminoso = function () {
  return lienzo('<rect x="47" y="40" width="6" height="58" fill="' + NEGRO + '"/>' +
    '<g transform="translate(50 22) scale(0.42) translate(-50 -50)">' + DIBUJAR.cruzSanAndres(false).replace(/<\/?svg[^>]*>/g, "") + "</g>" +
    '<rect x="14" y="44" width="72" height="20" rx="10" fill="' + NEGRO + '"/>' +
    '<circle class="titila" cx="26" cy="54" r="7" fill="' + ROJO + '"/>' +
    '<circle class="titila titila-2" cx="74" cy="54" r="7" fill="' + ROJO + '"/>');
};
