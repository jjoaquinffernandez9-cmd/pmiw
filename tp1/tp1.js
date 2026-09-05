//PROFESOR: ESTOY ACOSTUMBRADO A ESCRIBIR PALABRAS EN INGLES, LO SUELO HACER CUANDO LA PALABRA EN INGLES ES MAS CORTA QUE EN ESPAÑOL.

//TERRENO
 //Objetos
 let lucky = [];
 let vacio;
 let compuesto = [];
 
 let fila_ladrillos;
 let pipeM;
 
 //Piso
  let terreno;


//ELEMENTOS
 //Entidades(?
 let coin = [];
 let coinY = 240
 
 let goomba = [];
 let piranaS = [];
 let piranaM = [];

//MARIO
 //Movimiento
 let caminar = [];
 let saltar;

 let saltando = false;
 let arriba = true;
 let resto = null;

//Posiciones de origen
let marioX = 0;

let marioY;
let tope = [];
let origen = [];
let i = 0;
let j = 0;

//GENERALES
let velAnimacion = 10;
let cantidad;


function preload() {
//Parametros del salto
 tope[0] = 250;
 tope[1] = 260;
 tope[2] = 230;
 tope[3] = 218;
 tope[4] = 170;

 origen[0] = 45;
 origen[1] = 190;
 origen[2] = 290;
 origen[3] = 390;
 origen[4] = 550;
 
// Fijos
 saltar=sprite("saltar");
 
 terreno=sprite("terreno");
 
 fila_ladrillos=sprite("fila_ladrillos");
 
 vacio=sprite("vacio");
 
 pipeM=sprite("pipeM");

// Animaciones

 crear_array(caminar,"caminar",8);

 crear_array(compuesto,"compuesto",4);
 
 crear_array(lucky,"lucky",4);
 
 crear_array(coin,"coin",4);
 
 crear_array(goomba,"goomba",2);
 
 crear_array(piranaS,"piranaS",2);
 
 crear_array(piranaM,"piranaM",2);
}


function setup() { 
createCanvas(800,600); 
}

function draw() {
background(140,190,215);  

//Pirañas
 //S
cargar_animacion(2,piranaS,340,286);
cargar_animacion(2,piranaS,357,286);

 //M
cargar_animacion(2,piranaM,656,200);


//Tuberia/pipes
image(pipeM,448,272);
image(pipeM,648,230);

//Terreno
for (let t = 0; t < 960; t+=32){
image(terreno,t,310);
}

//Moneda
if (marioX >= 214 && marioX <= 245){
  let coinAnim = true;
  coinY -= 1;
  if (coinAnim == true){
 cargar_animacion(4,coin,216,coinY);
 }
}

//Compuesto
cargar_animacion(4,compuesto,200,240);

//Lucky
cargar_animacion(4,lucky,168,240);
if (marioX >= 214){
  image(vacio,216,240);
}

//Fila de ladrillos
image(fila_ladrillos,517,219);

//Goomba
cargar_animacion(2,goomba,150-frameCount,294);

//Mario
marioX += 1;

if (saltando === false){
//Reproducir animacion
cargar_animacion (8,caminar,marioX+1, 278);
resto = frameCount

//Momentos para cortar animacion y cambiar a salto
  if (marioX >= origen[i]) {
   saltando = true;
   inicioSalto = frameCount;
  }
 } else {
   if (arriba === true){
    let salto = frameCount - resto;
    marioY = 280 - salto
    image(saltar, marioX, marioY);
    if (marioY <= tope[j]) {
      arriba = false
      resto = frameCount
   }
  }else{
    let salto = frameCount - resto;
    marioY = tope[j] + salto
    image(saltar, marioX, marioY);
    if (marioY >= 280) {
      saltando = false
      arriba = true
      i += 1
      j += 1
  }
 }
}


fill (250,250,0);
  textSize (20);
  text(mouseX + " - " + mouseY, mouseX, mouseY);
}
