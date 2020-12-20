var dog, happyDog, database, foodS, foodStock;
var score;

function preload()
{
  dogImage1 = loadImage("images/dogImg.png");
  dogImage2 = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(800, 800);

  score = 20;
  
  dog = createSprite(400,400,40,40);
  dog.addImage(dogImage1);
  dog.scale = 0.3;

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() { 
  
  background("lightgreen");

  text("Food remaining: " + score,400,200);
  textSize(40);

  if(keyWentDown(UP_ARROW)){
      writeStrock(foodS);
      score = score-1
      dog.addImage(dogImage2);
  }



  text(" Note:PressUp_ARROWKeyToFeedDragoMilk",400,100)
  drawSprites();
 

}

function readStock(data){
  foodS = date.val();
}

function writeStrock(){
  if(x <= 0){
    x = 0;
  }else{
    x = x - 1;
  }
  database.ref('/').update({
    Food:x
  })
}



