//funcion para cambiar de fondo de pantalla
function cargarFondo(imag, x, y, ancho, alto, alinea) {
  imageMode(alinea);
  image(imag, x, y, ancho, alto);
}

//Combinamos las funciones de estilo texto y rectangulo texpo en una sola y leagregamos parametros, para qeu se pueda cambiar segun lo necesitemos
function estiloTextoZonaTexto(colt,tamt,colrec,xrec,yrec,wrec,hrec,str,strX,strY,strW){
  
  fill(colrec);
  rect(xrec,yrec,wrec,hrec);
  fill(colt);
  textSize(tamt);
  text(str,strX,strY,strW);
}

//funcion para crear lso botones con un hover
function crearBoton(bx, by, ban, bal) {
  if (hoverBton(bx, by, ban, bal)) {
    fill(0);
  } else {
    fill(185, 49, 20);
  }
  rect(bx, by, ban, bal);
}

//funcion para validar si el mouse se encuentra dentro del boton
function hoverBton(x, y, an, al) {
  return mouseX > x && mouseX < x+an && mouseY > y && mouseY < y+al;
}
