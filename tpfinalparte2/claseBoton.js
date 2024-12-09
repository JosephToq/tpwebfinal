class Botones{
constructor(posx,posy,ancho,alto){
this.posX = posx;
this.posY = posy;
this.alto =  alto;
this.ancho = ancho;

}

//creamos el metodo para que se dibuje nuestro boton y usamos dentro el metodo hover
mostrarBoton(){
  if (this.hoverBoton()) {
    fill(0);
  } else {
    fill(185, 49, 20);
  }
  rect(this.posX,this.posY,this.ancho, this.alto);
}

//creamos el metodo hover, el cual hace que si el cursos se encuentra dentro dedl boton cambie de color
hoverBoton(){
  return mouseX > this.posX && mouseX < this.posX+this.ancho && mouseY > this.posY && mouseY < this.posY+this.alto;
}
}
