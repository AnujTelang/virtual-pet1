//Create variables here
var dog 
var happyDogImage
var dogImage
var database
var foodS=0;
var foodStock
function preload()
{
  dogImage=loadImage("dogImg.png");
  happyDogImage=loadImage("dogImg1.png");
}

function setup() {
  createCanvas(500,500);
  
  database = firebase.database();
  foodStock=database.ref('food');
  
  foodStock.on('value',readStock);
  //alert("foodStock "+foodS);
  dog=createSprite(250,250,20,20)
  dog.addImage("dog",dogImage);
  dog.scale=0.5;

}


function draw() { 
  background("green") ;
  fill("white")
  text("food remaning :"+foodS,300,50);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    //alert("adding image"+happyDogImage);
    dog.addImage("dog",happyDogImage);
  }
  dog.display();
  drawSprites();
  //add styles here
 
}


function readStock(data){
 // alert("data is "+data);
  foodS = data.val();
  }
  
  function writeStock(x){
    //alert("foodS is ?"+foodS);
    if(x <= 0){
      x = 0;
    }
    else{
      x = x-1;
    }
      database.ref("/").update({
        food : x,
      })
    }

function UP_ARROW(){
  if(keyWentDown(UP_ARROW)){
   // alert("foodS is"+foodS);
writeStock(foodS)
dog.addImage("doghappy", happyDogImage)
  }
}




