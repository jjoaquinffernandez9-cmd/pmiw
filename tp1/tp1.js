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
 
 let piranaY = 840;

//MARIO
 let caminar = [];
 let saltar;
 let killMario = []
 let MarioMuerto = false;
 let x = 0;
 let paso1 = false;

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

let muerteY = 210;


//GENERALES
let velAnim = [];
let velMov = [];
let vel = 1;

let cantidad;


function preload() {
 
//Velocidades
 velAnim[0] = 20;
 velAnim[1] = 10;
 velAnim[2] = 5;
 
 velMov[0] = 0.5;
 velMov[1] = 1;
 velMov[2] = 2;
  
//Parametros del salto
 tope[0] = 250;
 tope[1] = 258;
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
 
 crear_array(killMario,"killMario",2);
}


function setup() { 
createCanvas(800,600); 
}

function draw() {
background(140,190,215);  

print(frameCount)

//Pirañas
 //S
cargar_animacion(2,piranaS,340,286);
cargar_animacion(2,piranaS,357,286);

 //M
 piranaY -= velMov[vel];
 if (piranaY >= 200){
 cargar_animacion(2,piranaM,656,piranaY);
 }else {
   cargar_animacion(2,piranaM,656,200);
 }


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
  coinY -= velMov[vel];
  if (coinAnim == true){
 cargar_animacion(4,coin,216,coinY);
 }
}

//Compuesto
cargar_animacion(4,compuesto,200,240);
if (marioX >= 214){
  image(vacio,216,240);
}

//Lucky
cargar_animacion(4,lucky,168,240);
cargar_animacion(4,lucky,629,100);

//Fila de ladrillos
image(fila_ladrillos,517,219);
image(fila_ladrillos,613,151);

//Goomba
cargar_animacion(2,goomba,150-(frameCount*velMov[vel]),294);

//Mario
marioX += velMov[vel]; 

if (marioX === 634){
  MarioMuerto = true;
}

if (MarioMuerto === false){
  
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
  let salto = (frameCount - resto) * velMov[vel];
  marioY = 280 - salto;
  image(saltar, marioX, marioY);   // sin sumar marioX acá
  if (marioY <= tope[j]) {
    arriba = false;
    resto = frameCount;
  }
} else {
  let salto = (frameCount - resto) * velMov[vel];
  marioY = tope[j] + salto;
  image(saltar, marioX, marioY);
  if (marioY >= 280) {
    saltando = false;
    arriba = true;
    i += 1;
    j += 1;
  }
 }
}
} else {
 //boton
 if (dist(mouseX,mouseY, 400,450) < 60 && mouseIsPressed){
 empezar = false;
 i = 0;
 j = 0;
 muerteY = 210;
 coinY = 240;
 piranaY = 840;
 MarioMuerto = false;
 x = 0;
 paso1 = false;
 saltando = false;
 arriba = true;
 resto = null;
 marioX = 0;
 }
 circle (400,450,90);
 fill(0);
 textAlign(CENTER, CENTER);
 text("Reiniciar", 400, 450);
 
 let rapido = 255;
 let medio = 255;
 let lento = 255;
if (mouseX >= 664 && mouseX <= 754 && mouseY >= 425 && mouseY <= 471){
  rapido = color(125);
  if (mouseIsPressed){
    vel = 2
  }
}
if (mouseX >= 664 && mouseX <= 754 && mouseY >= 471 && mouseY <= 518){
  medio = color(125);
    if (mouseIsPressed){
    vel = 1
    }
}
if (mouseX >= 664 && mouseX <= 754 && mouseY >= 518 && mouseY <= 565){
  lento = color(125);
    if (mouseIsPressed){
    vel = 0
    }
}
  rect(624,410,100,180,10);
  fill(rapido);
  text("Rapido",674,445);
  fill(medio);
  text("Medio",674,495);
  fill(lento);
  text("Lento",674,545);
  fill(0);
  fuente = loadFont("NotoSans-Regular-15.vlw");
  textFont(fuente);
 
 //Muerte de mario
 if (x === 0){
 muerteY -= velMov[vel];
 } else {
 muerteY += velMov[vel];
 }
 
 image (killMario[x],634,muerteY);
 
 if (muerteY <= 185 && paso1 === false){
  x = 1
  paso1 = true
 }
}

fill (250,250,0);
  textSize (20);
  text(mouseX + " - " + mouseY, mouseX, mouseY);
}
