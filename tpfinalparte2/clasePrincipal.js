class Principal {
  constructor(jugadorImg, enemigoImg, numEnemigos,sonidoWin,sonidoLose) {
    this.jugador = new Jugador(jugadorImg);//llamamos al objeto jugador
    this.enemigos = []; // Lista de enemigos
    this.numEnemigos = numEnemigos;//cantidad de enemigos que queremos 
    this.enemigoImg = enemigoImg;//imagen de los enemigos 
    this.puntaje = 0; // Puntaje inicial
    this.meta = 10; // Meta para ganar
    this.jugar = true;//validamos q el jugador pueda jugar
   
    this.sonidoWin = sonidoWin;//sonido victoria
    this.sonidoLose = sonidoLose;//sonido derrota
    
    
    this.fondo = new Imagenes(0, 0, width, height); // asignamos los valores que vana tener las imagenes
    this.logo = new Imagenes(190,50,200,150);//creamos un nuevo objeto para la imagen de la aportada
    this.boton1 = new Botones(220,280,200,40);//boton de comenzar
    this.boton2 = new Botones(220,400,200,40);//boton de creditos
    this.boton3 = new Botones(220,360,200,40);//boton de reinicio
    this.boton4 = new Botones(5,5,110,40);//boton home
    this.boton5 = new Botones(220,340,200,40);//boton de instrucciones
    this.boton6 = new Botones(220,380,200,40);//boton reninicio
    this.imagenes = []; // Arreglo  para guardar las imágenes
    this.indiceActual = 0; // Índice para saber que imagen se mostrara
    
    //creamos un arreglo para la cantidad de enemigos que queremos que se creen
    for (let i=0; i<this.numEnemigos; i++) {
      let nuevoEnemigo = new Enemigo(enemigoImg);//llamamos al objeto enemigo
      this.enemigos[i] = nuevoEnemigo;//asignamos los enemigos al arreglo
    }
  }
  
  
  //metodo apra actualizar el movimiento de los enemigos dependiendo el que se este mostrando
  actualizarEnemigos() {
    
   //validamos si nos encontramos en la pantalla 4 y si jugar es true si no estamos en esta pantalla o juagr es false no 
   //se va ejecutar nada, pero cuando estemso se empieza a ejecutar el juego
   if (this.indiceActual !== 4 || !this.jugar){
       return;
  }else{
    
  for (let i = 0; i < this.enemigos.length; i++) {//mediante el ciclo for recorremos el arreglo donde esta al cantidad de enemigos que se van a mostrar
    this.enemigos[i].mover();//decimos que mueva los enemigos

   //verificamos si lso enemigos chacoron con el jugador
   if(this.enemigos[i].colisiona(this.jugador)){
     this.jugar = false;//el jugador ya no puede juagar
     this.indiceActual = 2;
     this.sonidoLose.play(); // Reproduce el sonido de derrota
     console.log("Perdiste");
     return; // Salimos del método
   }
   
   //verificamos si el enemigo salio de la pantalla
   if (this.enemigos[i].fueraDePantalla()) {
      this.enemigos[i] = new Enemigo(this.enemigoImg); // Reposicionar al enemigo
      this.puntaje++; // Incrementar la puntuación
      
      if (this.puntaje >= this.meta) {//si tiene la puntuacion necesarioa pasa a la pantalla de victoria
         this.jugar = false;//el jugador ya no puede juagar
         this.indiceActual=3;//enviamos el juagdor a la pantalla 3
         this.sonidoWin.play(); // Reproduce el sonido de derrota
         console.log("Ganaste");
         return; // Salimos del método
    }
   }
  }
}
}

 // Método para reiniciar el juego, restauramos todos los valores
  reiniciarJuego() {
    this.jugar = true;//el jugador puede juagr nuevamente
    this.puntaje = 0;
    this.jugador = new Jugador(this.jugador.imagen); // Reiniciar jugador
    this.enemigos = []; // Reiniciar enemigos
    for (let i = 0; i < this.numEnemigos; i++) {
      this.enemigos[i] = new Enemigo(this.enemigoImg);
    }
    this.indiceActual = 4; // Volver a la pantalla de juego
    // al precionar el boton detenemos los sonidos en caso de qeu se esten reproduciendo
    if (this.sonidoWin.isPlaying()) {
      this.sonidoWin.stop();
    }
    if (this.sonidoLose.isPlaying()) {
      this.sonidoLose.stop();
  }
  }
  
  // Método para reiniciar el juego, desde boton home
  reiniciarJuegoHome() {
    this.jugar = true;//el jugador puede juagr nuevamente
    this.puntaje = 0;
    this.jugador = new Jugador(this.jugador.imagen); // Reiniciar jugador
    this.enemigos = []; // Reiniciar enemigos
    for (let i = 0; i < this.numEnemigos; i++) {
      this.enemigos[i] = new Enemigo(this.enemigoImg);
    }
    this.indiceActual = 0; // Volver a la pantalla de juego
    // al precionar el boton detenemos los sonidos en caso de qeu se esten reproduciendo
    if (this.sonidoWin.isPlaying()) {
      this.sonidoWin.stop();
    }
    if (this.sonidoLose.isPlaying()) {
      this.sonidoLose.stop();
  }
  }


 
  // Método para cargar las imágenes en el arreglo
  cargarImagenes() {
    //Cargamos los fondos de las pantallas
    for (let i = 0; i < 6; i++) {
      this.imagenes[i] = loadImage("imagenes/" + i + ".jpeg"); // Cargar cada imagen
    }
    //cargamos la imagen de telefono
    this.logo.asignarImagen(loadImage('imagenes/telefono.jpg'));
  }
  
  // Metodo para mover al jugador
  moverJugador(tecla) {
    if(!this.jugar){//validamos que jugar sea true para poder mover el personaje
    return;
   }else{
   this.jugador.mover(tecla);
   }
  }

  // Método para mostrar la imagen actual
  mostrar() {
    // Asigna la imagen actual al fondo y la muestra
    if (this.indiceActual === 0) {
    this.fondo.asignarImagen(this.imagenes[this.indiceActual]);
    this.fondo.mostrarImagen();
    //Titulo
    textSize(30);
    fill(0);
    this.logo.mostrarImagen();
    textStyle(BOLD);
    text('SOLO \nVINE A \nHABLAR \nPOR \nTELEFONO',345,85);
    //botones pantalla principal
    this.boton1.mostrarBoton();
    this.boton2.mostrarBoton();
    this.boton5.mostrarBoton();
    //texto botones
    fill(250);
    text('EMPEZAR',245,310);
    text('REGLAS',255,370);
    text('CREDITOS',245,430);
  }else if (this.indiceActual === 1) {
    this.fondo.asignarImagen(this.imagenes[this.indiceActual]);
    this.fondo.mostrarImagen();
    //boton home
    this.boton4.mostrarBoton();
    fill(255);
    text('Home', 15,35);
    //creditos
    fill(0);
    text('Cuento escrito por:',20,140);
    fill(255);
    text('Gabriel Garcia Marquez',width/2-100,180);
    fill(0);
    text('Juego diseñado por',20,220);
    fill(255);
    text('Daniela Lemus\nJoseph Toquica',width/2-100,260);
    fill(0);
    text('Ilustraciones creadas por:',20,340);
    fill(255);
    text('IA Meta\nDaniela Lemus\nJoseph Toquica',width/2-100,380);
  }else if(this.indiceActual === 2) {//validamos que no se este reproduciendo el sonido
    this.fondo.asignarImagen(this.imagenes[this.indiceActual]);
    this.fondo.mostrarImagen();
    //boton home
    this.boton4.mostrarBoton();
    fill(255);
    text('Home', 15,35);
    //Titulo
    textSize(30);
    fill(255);
    textStyle(BOLD);
    text('¡HAS PERDIDO! \nVUELVE A INTENTAR ESCAPAR',100,310);
    this.boton6.mostrarBoton();
    fill(255);
    text('Reiniciar', 260,410);
  }else if(this.indiceActual === 3) {//validamos que el sonido no se este reproduciendo
    this.fondo.asignarImagen(this.imagenes[this.indiceActual]);
    this.fondo.mostrarImagen();
    //boton para volver al inicio y reiniciar los valores del juego
    this.boton6.mostrarBoton();
    fill(255);
    text('Reiniciar', 260,410);
    //Titulo
    textSize(30);
    fill(255);
    textStyle(BOLD);
    text('¡HAS GANADO! \nFELICITACIONES LOGRASTE ESCAPAR',45,310)
  }else if(this.indiceActual === 4) {
    this.fondo.asignarImagen(this.imagenes[this.indiceActual]);
    this.fondo.mostrarImagen();
    
    //mostrarjugador
    this.jugador.mostrar();
    
    // Mostrar enemigos
    for (let i = 0; i < this.enemigos.length; i++) {
      this.enemigos[i].mostrar();
      }
    //puntuacion
    fill(0);
    rect(5,5,125,40);
    textSize(24);
    fill(255);
    text('Puntaje: ' + this.puntaje, 10, 30);
  }else if(this.indiceActual === 5) {
    this.fondo.asignarImagen(this.imagenes[this.indiceActual]);
    this.fondo.mostrarImagen();
    //boton home
    this.boton4.mostrarBoton();
    fill(255);
    text('Home', 15,35);
    //Titulo
    textSize(30);
    fill(0);
    textStyle(BOLD);
    text('INSTRUCCIONES',30,125);
    fill(0);
    rect(20,155,600,180);
    fill('tomato');
    text('Evita a las vigilantes y logra escapr del manicomio utiliza las teclas "A" y "D" para moverte de derecha a izquierda entre los carriles',30,170,600);
  }
 }
  // Cambiar a la siguiente imagen
  cambiarPantalla() {
    //validamos que pantalla esta mostrando el indice
    if (this.indiceActual === 0) {
    //validamos que el mouse se encuentre dentro del boton empezar para q cuando haga clic nos lleve a la pantalla correspondiente
    if (this.boton1.hoverBoton()) {
      this.indiceActual = 4;
    //validamos que el mouse se encuentre dentro del creditos empezar para q cuando haga clic nos lleve a la pantalla correspondiente
    }else if (this.boton2.hoverBoton()) {
      this.indiceActual = 1;
    //validamos que el mouse se encuentre dentro del creditos empezar para q cuando haga clic nos lleve a la pantalla correspondiente
    }else if (this.boton5.hoverBoton()) {
      this.indiceActual = 5;
    }
  }else if (this.indiceActual === 1  || this.indiceActual === 5) {
    //validamos que el mouse se encuentre dentro del boton para q cuando haga clic nos lleve a la pantalla correspondiente
    if (this.boton4.hoverBoton()) {
      this.indiceActual = 0;
    }
  }else if(this.indiceActual === 2){
    if(this.boton4.hoverBoton()){
      this.reiniciarJuegoHome();//reinicia el juego enviando al jugador a la pantalla de inicio
    }else if(this.boton6.hoverBoton()){
      this.reiniciarJuego();//se reinicia el juego
    }
  }else if(this.indiceActual === 3){
    if(this.boton6.hoverBoton()){
      this.reiniciarJuegoHome();//reinicia el juego enviando al jugador a la pantalla de inicio
    }
  }
 }
}
