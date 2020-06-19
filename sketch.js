

var dog,dogImg,dogImg1, database;
var foodS,foodStock;
var bgImage,bg;



function preload(){
dogImg=loadImage("Images/Dog.png");
dogImg1=loadImage("Images/happy dog.png");
bgImage=loadImage("Images/Living Room.png");
}


function setup() {
  database=firebase.database();
  createCanvas(1200,800);

  dog=createSprite(600,600,20,20);
 dog.addImage(dogImg);
  dog.scale=0.15;

 /* bg=createSprite(0,0,1200,800);
  bg.addImage(bgImage);
*/
 foodStock=database.ref('Food');
  foodStock.on("value",readStock);

  textSize(20); 
}

function draw() {
 /* if(bg)
  background(bgImage);  
*/
background(150,150,20);
 
  if(keyWentDown(UP_ARROW)){
    foodS--;
    writeStock(foodS);
    dog.addImage(dogImg1);
  }

  drawSprites();
  stroke("white");
  text("Food remaining : "+foodS,400,200);
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}