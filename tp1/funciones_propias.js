function sprite(archivo){
   return loadImage("data/" + archivo + ".png");
}

function crear_array (array,nom,max){
  for (let i = 1; i <= max; i++) {
  array.push (loadImage("data/" + nom + "_"+ i + '.png'));
 }
}

function cargar_animacion (cantidad,nom,x,y){
 let frame = floor(millis() / (velAnim[vel] * 16.67)) % cantidad;
 image(nom[frame], x, y);
}
