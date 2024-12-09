//video youtube: https://www.youtube.com/watch?v=Htwpeg_zHQ8
let clprin;
let jugadorImg, enemigoImg;
let sonidoWin,sonidoLose;

function preload() {
  jugadorImg = loadImage("imagenes/jugador.png");
  enemigoImg = loadImage("imagenes/enemigo.png");
  sonidoWin = loadSound('sonidos/win.mp3');
  sonidoLose = loadSound('sonidos/lose.mp3');
  
  clprin = new Principal(jugadorImg,enemigoImg,3,sonidoWin,sonidoLose);//llamamos a nuestro objeto principal y el cargamos todos los aprametros
  clprin.cargarImagenes(); // Cargar las imágenes en preload
}

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(220);
  clprin.actualizarEnemigos();//
  clprin.mostrar(); // Mostrar la imagen actual
}

function mousePressed() {
  clprin.cambiarPantalla(); // Cambiar de imagen al hacer clic
}

function keyPressed() {
  clprin.moverJugador(key);// Mover al jugador con las teclas
}
