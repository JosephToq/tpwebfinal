//Enlace video youtube: https://youtu.be/Z9FfvpUOEcw
let pantallas = [];
let textosprincipal = [];
let textoscamino2 = [];
let textoscamino3 = [];
let pantalla;
//variables para los sonidos
let musicaFondo,sonidobtn,sonidodesicion,clic;

//const pantinicial = 0;
let tp=0;
let tc=0;
let tcc=0;

function preload() {
  //cargar sonidos
  musicaFondo =loadSound('sonidos/musicaFondo.mp3');
  sonidobtn =loadSound('sonidos/telefono.mp3');
  sonidodesicion = loadSound('sonidos/sonidodesicion.mp3');
  clic = loadSound('sonidos/clic.mp3');
  //cargamos las imagenes
  for (let i=0; i<16; i++) {
    pantallas[i] = loadImage("imagenes/"+i+".jpg");
  }
  //cargamos la imagen para el titulo
  telefono=loadImage("imagenes/telefono.jpg");
  //cargamos el archivo de texxto apra la historia principal
  textos= loadStrings("textos/textoshistoriaprincipal.txt");
  //archivo de texto segundo camino
  textos2= loadStrings("textos/textoscamino1.txt");
  //archivo de texto segundo camino
  textos3= loadStrings("textos/textoscamino2.txt");
}

function setup() {
  //tamano lienzo
 createCanvas(640, 480); 
 //Creamos una variable que sera la que nos indique en que pantalla estamos
 pantalla = 0;
 
}


function draw() {
  //empezamos a dibuhjar la pantallas dependiendo el valor de la variable pantalla nos muestra una imagen u otra
   if (pantalla === 0) {
    cargarFondo(pantallas[0], 0, 0, width, height);
    image(telefono,190,50,150,200);
    //Titulo
    textSize(30);
    fill(0);
    textStyle(BOLD);
    text('SOLO \nVINE A \nHABLAR \nPOR \nTELEFONO',345,85);
     
     //Botones inicio y creditos
     crearBoton(220,280,200,40);
     crearBoton(220,360,200,40);
     noStroke();
     //texto botones
     fill(250);
     text('EMPEZAR',245,310);
     text('CREDITOS',245,390);
     
  }else if(pantalla ===1){
    cargarFondo(pantallas[1], 0, 0, width, 350);
    //boton home
    crearBoton(5,5,80,40);
    fill(255);
    text('Home', 15,30);
    //boton siguiente
    crearBoton(515,305,120,40);
    fill(255);
    text('Siguiente', 525,335);
    //Funcion donde se unifico el fondo del texto donde se ceunta la historia con el texto
    estiloTextoZonaTexto(255,20,0,0,350,width,130,textos[tp],10,360,600);
   
  }else if(pantalla ===2){
    cargarFondo(pantallas[2], 0, 0, width, 350);
    //boton home
    crearBoton(5,5,80,40);
    fill(255);
    text('Home', 15,30);
    //boton siguiente
    crearBoton(515,305,120,40);
    fill(255);
    text('Siguiente', 525,335);
    //Funcion donde se unifico el fondo del texto donde se ceunta la historia con el texto
    estiloTextoZonaTexto(255,20,0,0,350,width,130,textos[tp],10,360,600);
  }else if(pantalla ===3){
    cargarFondo(pantallas[3], 0, 0, width, 350);
    //boton home
    crearBoton(5,5,80,40);
    fill(255);
    text('Home', 15,30);
    //boton Detenerse
    crearBoton(5,305,120,40);
    fill(255);
    text('Escapar', 10,335);
    //boton Escapar
    crearBoton(515,305,120,40);
    fill(255);
    text('Detenerse', 525,335);
    //Funcion donde se unifico el fondo del texto donde se ceunta la historia con el texto
    estiloTextoZonaTexto(255,20,0,0,350,width,130,textos[tp],10,360,600);
  }else if(pantalla ===4){
    cargarFondo(pantallas[4], 0, 0, width, 350);
    //boton home
    crearBoton(5,5,80,40);
    fill(255);
    text('Home', 15,30);
    //boton siguiente
    crearBoton(515,305,120,40);
    fill(255);
    text('Siguiente', 525,335);
    //Funcion donde se unifico el fondo del texto donde se ceunta la historia con el texto
    estiloTextoZonaTexto(255,20,0,0,350,width,130,textos2[tc],10,360,600);
  }else if(pantalla ===5){
    cargarFondo(pantallas[5], 0, 0, width, 350);
    //boton home
    crearBoton(515,305,120,40);
    fill(255);
    text('Home', 525,335);
    //Funcion donde se unifico el fondo del texto donde se ceunta la historia con el texto
    estiloTextoZonaTexto(255,20,0,0,350,width,130,textos2[tc],10,360,600);
  }else if(pantalla ===6){
    cargarFondo(pantallas[6], 0, 0, width, 350);
    //boton home
    crearBoton(5,5,80,40);
    fill(255);
    text('Home', 15,30);
    //boton siguiente
    crearBoton(515,305,120,40);
    fill(255);
    text('Siguiente', 525,335);
    //Funcion donde se unifico el fondo del texto donde se ceunta la historia con el texto
    estiloTextoZonaTexto(255,20,0,0,350,width,130,textos[tp],10,360,600);
  }else if(pantalla ===7){
    cargarFondo(pantallas[7], 0, 0, width, 350);
    //boton home
    crearBoton(5,5,80,40);
    fill(255);
    text('Home', 15,30);
    //boton siguiente
    crearBoton(515,305,120,40);
    fill(255);
    text('Siguiente', 525,335);
    //Funcion donde se unifico el fondo del texto donde se ceunta la historia con el texto
    estiloTextoZonaTexto(255,20,0,0,350,width,130,textos[tp],10,360,600);
  }else if(pantalla ===8){
    cargarFondo(pantallas[8], 0, 0, width, 350);
    //boton home
    crearBoton(5,5,80,40);
    fill(255);
    text('Home', 15,30);
    //boton siguiente
    crearBoton(515,305,120,40);
    fill(255);
    text('Siguiente', 525,335);
    //Funcion donde se unifico el fondo del texto donde se ceunta la historia con el texto
    estiloTextoZonaTexto(255,20,0,0,350,width,130,textos[tp],10,360,600);
  }else if(pantalla ===9){
    cargarFondo(pantallas[9], 0, 0, width, 350);
    //boton home
    crearBoton(5,5,80,40);
    fill(255);
    text('Home', 15,30);
    //boton desicion
    crearBoton(440,305,195,40);
    fill(255);
    text('Llamar a su familia', 445,335);
     //boton desicion
    crearBoton(5,305,190,40);
    fill(255);
    text('Llamar a su esposo', 10,335);
    //Funcion donde se unifico el fondo del texto donde se ceunta la historia con el texto
    estiloTextoZonaTexto(255,20,0,0,350,width,130,textos[tp],10,360,600);
  }else if(pantalla ===10){
    cargarFondo(pantallas[10], 0, 0, width, 350);
    //boton home
    crearBoton(5,5,80,40);
    fill(255);
    text('Home', 15,30);
    //boton siguiente
    crearBoton(515,305,120,40);
    fill(255);
    text('Siguiente', 525,335);
    //Funcion donde se unifico el fondo del texto donde se ceunta la historia con el texto
    estiloTextoZonaTexto(255,20,0,0,350,width,130,textos3[tcc],10,360,600);
  }else if(pantalla ===11){
    cargarFondo(pantallas[11], 0, 0, width, 350);
    //boton reiniciar
    crearBoton(515,305,120,40);
    fill(255);
    text('Reiniciar', 525,335);
    //Funcion donde se unifico el fondo del texto donde se ceunta la historia con el texto
    estiloTextoZonaTexto(255,20,0,0,350,width,130,textos3[tcc],10,360,600);
  }else if(pantalla ===12){
    cargarFondo(pantallas[12], 0, 0, width, 350);
    //boton home
    crearBoton(5,5,80,40);
    fill(255);
    text('Home', 15,30);
    //boton siguiente
    crearBoton(515,305,120,40);
    fill(255);
    text('Siguiente', 525,335);
    //Funcion donde se unifico el fondo del texto donde se ceunta la historia con el texto
    estiloTextoZonaTexto(255,20,0,0,350,width,130,textos[tp],10,360,600);
  }else if(pantalla ===13){
    cargarFondo(pantallas[13], 0, 0, width, 350);
    //boton home
    crearBoton(5,5,80,40);
    fill(255);
    text('Home', 15,30);
    //boton siguiente
    crearBoton(515,305,120,40);
    fill(255);
    text('Siguiente', 525,335);
    //Funcion donde se unifico el fondo del texto donde se ceunta la historia con el texto
    estiloTextoZonaTexto(255,20,0,0,350,width,130,textos[tp],10,360,600);
  }else if(pantalla ===14){
    cargarFondo(pantallas[14], 0, 0, width, 350);
    //boton siguiente
    crearBoton(515,305,120,40);
    fill(255);
    text('Reiniciar', 525,335);
    estiloTextoZonaTexto(255,20,0,0,350,width,130,textos[tp],10,360,600);
  }else if(pantalla ===15){
    cargarFondo(pantallas[15], 0, 0, width, height);
    //boton home
    crearBoton(5,5,110,40);
    fill(255);
    text('Home', 15,35);
    fill(0);
    text('Cuento escrito por:',20,140);
    fill(255);
    text('Gabriel Garcia Marquez',width/2-100,180);
    fill(0);
    text('Historias extra creada por:',20,220);
    fill(255);
    text('Daniela Lemus\nJoseph Toquica',width/2-100,260);
    fill(0);
    text('Ilustraciones creadas por:',20,340);
    fill(255);
    text('IA Meta',width/2-100,380);
  }
  console.log(tp);
}

//usamos elmouse pressed con condicional if para que en caso de que se cumpla la condicion y se clickeen lso botnes dependiendo cual useque se realicen la accion correspondiente.
function mousePressed() {
  if (pantalla === 0) {
    if (hoverBton(220,280,200,40)) {
      pantalla=1;
      tp=1;
      //suena el telefono al precionar el boton y validamos que el sonido no se este reprduciendo para ejecutarlo, en caso de q se este reproduciendo lo detiene
      if(!sonidobtn.isPlaying()){
        sonidobtn.play();
      }else{
        sonidobtn.stop();
      }
    }if (hoverBton(220,360,200,40)) {
      pantalla=15;
     //suena el telefono al precionar el boton y validamos que el sonido no se este reprduciendo para ejecutarlo, en caso de q se este reproduciendo lo detiene
      if(!sonidobtn.isPlaying()){
        sonidobtn.play();
      }else{
        sonidobtn.stop();
      }
    }
  } else if (pantalla===1) {
    if (hoverBton(515,305,120,40)) {
      pantalla=2;
      tp=2;
      //suena el clic al precionar el boton y validamos que el sonido no se este reprduciendo para ejecutarlo, en caso de q se este reproduciendo lo detiene
      if(!clic.isPlaying()){
        clic.play();
      }else{
        clic.stop();
      }
    }
    if (hoverBton(5,5,80,40)) {
      pantalla=0;
     //suena el telefono al precionar el boton y validamos que el sonido no se este reprduciendo para ejecutarlo, en caso de q se este reproduciendo lo detiene
      if(!sonidobtn.isPlaying()){
        sonidobtn.play();
      }else{
        sonidobtn.stop();
      }
    }
  } else if (pantalla===2) {
    if (hoverBton(515,305,120,40)) {
      pantalla=3;
      tp=3;
      //suena el clic al precionar el boton y validamos que el sonido no se este reprduciendo para ejecutarlo, en caso de q se este reproduciendo lo detiene
      if(!clic.isPlaying()){
        clic.play();
      }else{
        clic.stop();
      }
    }
    if (hoverBton(5,5,80,40)) {
      pantalla=0;
      //suena el telefono al precionar el boton y validamos que el sonido no se este reprduciendo para ejecutarlo, en caso de q se este reproduciendo lo detiene
      if(!sonidobtn.isPlaying()){
        sonidobtn.play();
      }else{
        sonidobtn.stop();
      }
    }
  }else if (pantalla===3) {
    if (hoverBton(515,305,120,40)) {
      pantalla=6;
      tp=4;
      //suena un sonido con el que se identifican las desiciones al precionar el boton y validamos que el sonido no se este reprduciendo para ejecutarlo, en caso de q se este reproduciendo lo detiene
      if(!sonidodesicion.isPlaying()){
        sonidodesicion.play();
      }else{
        sonidodesicion.stop();
      }
      
    }
    if (hoverBton(5,5,80,40)) {
      pantalla=0;
      //suena el telefono al precionar el boton y validamos que el sonido no se este reprduciendo para ejecutarlo, en caso de q se este reproduciendo lo detiene
      if(!sonidobtn.isPlaying()){
        sonidobtn.play();
      }else{
        sonidobtn.stop();
      }
    }
     if (hoverBton(5,305,120,40)) {
      pantalla=4;
      tc=1;
      //suena un sonido con el que se identifican las desiciones al precionar el boton y validamos que el sonido no se este reprduciendo para ejecutarlo, en caso de q se este reproduciendo lo detiene
      if(!sonidodesicion.isPlaying()){
        sonidodesicion.play();
      }else{
        sonidodesicion.stop();
      }
    }
  }else if (pantalla===4) {
    if (hoverBton(515,305,120,40)) {
      pantalla=5;
      tc=2;
      //suena el clic al precionar el boton y validamos que el sonido no se este reprduciendo para ejecutarlo, en caso de q se este reproduciendo lo detiene
      if(!clic.isPlaying()){
        clic.play();
      }else{
        clic.stop();
      }
    }
    if (hoverBton(5,5,80,40)) {
      pantalla=0;
      //suena el telefono al precionar el boton y validamos que el sonido no se este reprduciendo para ejecutarlo, en caso de q se este reproduciendo lo detiene
      if(!sonidobtn.isPlaying()){
        sonidobtn.play();
      }else{
        sonidobtn.stop();
      }
    }
  }else if (pantalla===5) {
    if (hoverBton(515,305,120,40)) {
      pantalla=0;
      //suena el telefono al precionar el boton y validamos que el sonido no se este reprduciendo para ejecutarlo, en caso de q se este reproduciendo lo detiene
      if(!sonidobtn.isPlaying()){
        sonidobtn.play();
      }else{
        sonidobtn.stop();
      }
    }
  }else if (pantalla===6) {
    if (hoverBton(515,305,120,40)) {
      pantalla=7;
      tp=5;
      //suena el clic al precionar el boton y validamos que el sonido no se este reprduciendo para ejecutarlo, en caso de q se este reproduciendo lo detiene
      if(!clic.isPlaying()){
        clic.play();
      }else{
        clic.stop();
      }
    }
    if (hoverBton(5,5,80,40)) {
      pantalla=0;
      //suena el telefono al precionar el boton y validamos que el sonido no se este reprduciendo para ejecutarlo, en caso de q se este reproduciendo lo detiene
      if(!sonidobtn.isPlaying()){
        sonidobtn.play();
      }else{
        sonidobtn.stop();
      }
    }
  }else if (pantalla===7) {
    if (hoverBton(515,305,120,40)) {
      pantalla=8;
      tp=6;
      //suena el clic al precionar el boton y validamos que el sonido no se este reprduciendo para ejecutarlo, en caso de q se este reproduciendo lo detiene
      if(!clic.isPlaying()){
        clic.play();
      }else{
        clic.stop();
      }
    }
    if (hoverBton(5,5,80,40)) {
      pantalla=0;
      //suena el telefono al precionar el boton y validamos que el sonido no se este reprduciendo para ejecutarlo, en caso de q se este reproduciendo lo detiene
      if(!sonidobtn.isPlaying()){
        sonidobtn.play();
      }else{
        sonidobtn.stop();
      }
    }
  }else if (pantalla===8) {
    if (hoverBton(515,305,120,40)) {
      pantalla=9;
      tp=7;
      //suena el clic al precionar el boton y validamos que el sonido no se este reprduciendo para ejecutarlo, en caso de q se este reproduciendo lo detiene
      if(!clic.isPlaying()){
        clic.play();
      }else{
        clic.stop();
      }
    }
    if (hoverBton(5,5,80,40)) {
      pantalla=0;
      //suena el telefono al precionar el boton y validamos que el sonido no se este reprduciendo para ejecutarlo, en caso de q se este reproduciendo lo detiene
      if(!sonidobtn.isPlaying()){
        sonidobtn.play();
      }else{
        sonidobtn.stop();
      }
    }
  }else if (pantalla===9) {
    if (hoverBton(515,305,120,40)) {
      pantalla=10;
      tcc=1;
      //suena un sonido con el que se identifican las desiciones al precionar el boton y validamos que el sonido no se este reprduciendo para ejecutarlo, en caso de q se este reproduciendo lo detiene
      if(!sonidodesicion.isPlaying()){
        sonidodesicion.play();
      }else{
        sonidodesicion.stop();
      }
    }
    if (hoverBton(5,5,80,40)) {
      pantalla=0;
      //suena el telefono al precionar el boton y validamos que el sonido no se este reprduciendo para ejecutarlo, en caso de q se este reproduciendo lo detiene
      if(!sonidobtn.isPlaying()){
        sonidobtn.play();
      }else{
        sonidobtn.stop();
      }
    }if (hoverBton(5,305,190,40)){
    pantalla = 12;
    tp=8;
    //suena un sonido con el que se identifican las desiciones al precionar el boton y validamos que el sonido no se este reprduciendo para ejecutarlo, en caso de q se este reproduciendo lo detiene
      if(!sonidodesicion.isPlaying()){
        sonidodesicion.play();
      }else{
        sonidodesicion.stop();
      }
    }
  }else if (pantalla===10) {
    if (hoverBton(515,305,120,40)) {
      pantalla=11;
      tcc=2;
      //suena el clic al precionar el boton y validamos que el sonido no se este reprduciendo para ejecutarlo, en caso de q se este reproduciendo lo detiene
      if(!clic.isPlaying()){
        clic.play();
      }else{
        clic.stop();
      }
    }if (hoverBton(5,5,80,40)) {
      pantalla=0;
      //suena el telefono al precionar el boton y validamos que el sonido no se este reprduciendo para ejecutarlo, en caso de q se este reproduciendo lo detiene
      if(!sonidobtn.isPlaying()){
        sonidobtn.play();
      }else{
        sonidobtn.stop();
      }
    }
  }else if (pantalla===11) {
    if (hoverBton(515,305,120,40)) {
      pantalla=0;
      tp=0;
      //suena el telefono al precionar el boton y validamos que el sonido no se este reprduciendo para ejecutarlo, en caso de q se este reproduciendo lo detiene
      if(!sonidobtn.isPlaying()){
        sonidobtn.play();
      }else{
        sonidobtn.stop();
      }
    }
  }else if (pantalla===12) {
    if (hoverBton(515,305,120,40)) {
      pantalla=13;
      tp=9;
       //suena el clic al precionar el boton y validamos que el sonido no se este reprduciendo para ejecutarlo, en caso de q se este reproduciendo lo detiene
      if(!clic.isPlaying()){
        clic.play();
      }else{
        clic.stop();
      }
    }if (hoverBton(5,5,80,40)) {
      pantalla=0;
      //suena el telefono al precionar el boton y validamos que el sonido no se este reprduciendo para ejecutarlo, en caso de q se este reproduciendo lo detiene
      if(!sonidobtn.isPlaying()){
        sonidobtn.play();
      }else{
        sonidobtn.stop();
      }
    }
    }else if (pantalla===13) {
    if (hoverBton(515,305,120,40)) {
      pantalla=14;
      tp=10;
       //suena el clic al precionar el boton y validamos que el sonido no se este reprduciendo para ejecutarlo, en caso de q se este reproduciendo lo detiene
      if(!clic.isPlaying()){
        clic.play();
      }else{
        clic.stop();
      }
    }if (hoverBton(5,5,80,40)) {
      pantalla=0;
      //suena el telefono al precionar el boton y validamos que el sonido no se este reprduciendo para ejecutarlo, en caso de q se este reproduciendo lo detiene
      if(!sonidobtn.isPlaying()){
        sonidobtn.play();
      }else{
        sonidobtn.stop();
      }
    }
  }else if (pantalla===14) {
    if (hoverBton(515,305,120,40)) {
      pantalla=0;
      tp=0;
      //suena el telefono al precionar el boton y validamos que el sonido no se este reprduciendo para ejecutarlo, en caso de q se este reproduciendo lo detiene
      if(!sonidobtn.isPlaying()){
        sonidobtn.play();
      }else{
        sonidobtn.stop();
      }
    }
  }else if (pantalla===15) {
    if (hoverBton(5,5,110,40)) {
      pantalla=0;
      //suena el telefono al precionar el boton y validamos que el sonido no se este reprduciendo para ejecutarlo, en caso de q se este reproduciendo lo detiene
      if(!sonidobtn.isPlaying()){
        sonidobtn.play();
      }else{
        sonidobtn.stop();
      }
    }
  }if(!musicaFondo.isPlaying() && pantalla != 0 && pantalla != 15){
    musicaFondo.loop(true);
  }else if (musicaFondo.isPlaying() && pantalla === 0 || pantalla === 15){
    musicaFondo.stop();
  }
}
