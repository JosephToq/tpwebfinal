class Jugador{
  constructor(imagen){
    this.carriles=[160,320,480];//carriles donde se mueve el jugador
    this.indiceCarril = 1; // Carril inicial (central)
    this.y = 430; // Posición vertical fija
    this.tamano = 50; // Tamaño del jugador
    this.imagen = imagen; // Imagen del jugador
  }
  
  //metodo mostrar para dibujar nuestro jugador
  mostrar() {
    image(
      this.imagen,
      this.carriles[this.indiceCarril] - this.tamano / 2,//posicionamos nuestro personaje en la mitad del carril y posicion en X
      this.y - this.tamano / 2,// posicionamos en un alto especifico para nuestro personaje posicion Y
      this.tamano,//ancho del personaje
      this.tamano// alto del personaje
    );
  }
  
  //metodo para moveer nuestro personaje
  mover(tecla) {
    //con la letra a nos movemos ahcia la izquierda pero solo si el indice de nuestro carril es mayor a 0
    if (tecla === 'a' || tecla === 'A') {
      if (this.indiceCarril > 0) {
        this.indiceCarril--;
      }
    //usando la letra d el personaje s eva mover hacia la derecha, pero solo si nuestra variable indiceCarril es menor al tamano de nuestro array -1
    } else if (tecla === 'd' || tecla === 'D') {
      if (this.indiceCarril < this.carriles.length - 1) {
        this.indiceCarril++;
      }
    }
  }
}
