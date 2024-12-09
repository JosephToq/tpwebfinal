class Imagenes {
  //creamos nuestro constructor con las variables de la posicion, el ancho y alto de la iamgen
  constructor(imgx, imgy, imgH, imgW) {
    this.imgx = imgx;
    this.imgy = imgy;
    this.imgH = imgH;
    this.imgW = imgW;
  }

  // Método para asignar una imagen cargada
  asignarImagen(img) {
    this.img = img;
  }

  // Creamos el metodo que mostrara laas imagenes solo cuando la variable img tenga una imagen cargada y le pone los atributos de
  // de nuestro contructor
  mostrarImagen() {
    if (this.img) { // Solo muestra la imagen si ya está cargada
      image(this.img, this.imgx, this.imgy, this.imgW, this.imgH);
    }
  }
}
