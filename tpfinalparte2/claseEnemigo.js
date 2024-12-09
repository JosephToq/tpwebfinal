class Enemigo {
  constructor(imagen) {
    this.carriles = [160, 320, 480]; // Carriles
    this.indiceCarril = int(random(0, this.carriles.length)); // seleccionamos un indice aleatorio y convertir el valor de random en un entero
    this.x = this.carriles[this.indiceCarril]; // Posición en X
    this.y = 0; // Empieza en la parte superior
    this.tamano = 50; // Tamaño del enemigo
    this.velocidad = random(1,2); // Velocidad aleatoria
    this.imagen = imagen; // Imagen del enemigo
  }
  //metodo mostrar para dibujar el enemigo
   mostrar() {
    image(
      this.imagen,
      this.x - this.tamano / 2,//posicion x del enemigo
      this.y - this.tamano / 2,//posicion y del enemigo
      this.tamano,//ancho del enemigo
      this.tamano//alto del enemigo
    );
  }
  
  //metodo mover para que los enemigos avancen hacia el jugador
   mover() {
    this.y += this.velocidad;
  }
  
  //metodo para verificar si los enemigos chocan con el jugador
  colisiona(jugador) {
  let jugadorX = jugador.carriles[jugador.indiceCarril];//verificamos en que carril se encuentra el jugador, y guardamos el valor en jugadorX
  //restamos el valor de X del enemigo y el valor de X del juagdor para saber si estan en el mismo carril
  let distanciaX = this.x - jugadorX;
  //restamos el valor de y del enemigo y el valor de y del juagdor para saber a que distancia se encuentra el uno del otro
  let distanciaY = this.y - jugador.y;

  // convertimos los valores de distanciaX y distanciaY a positivo en caso de que sean negativos
  if (distanciaX < 0) {
    distanciaX = -distanciaX;
  }
  if (distanciaY < 0) {
    distanciaY = -distanciaY;
  }

  // Verificamos colisión si las distancias son menores al tamaño
  return distanciaX < this.tamano && distanciaY < this.tamano;
  }
  
  //metodo para validar si el enemigo ya salio de la pantalla
  fueraDePantalla() {
    return this.y > height + this.tamano; // Si salió de la pantalla
  }
  
}
