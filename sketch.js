//Extracting constants
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

//Declaring variables
var engine, world;
var child,backgroundImage;
var snow1, snow2, snow3, snow4, snow5, snow6, snow7, snow8;

function preload(){

  //Calling function to set background image according to time
  backGround();

  //Loading animation
  running=loadAnimation("images/Run1.png", "images/Run2.png", "images/Run3.png", "images/Run4.png");

}

function setup(){

   //Creating canvas 
   var canvas= createCanvas(900,900);

   //Creating an engine and a world
   engine=Engine.create();
   world=engine.world;
   
   //Creating child sprite and adding animation
   child=createSprite(50,750,50,50);
   child.velocityX=12.5;
   child.addAnimation("running", running);
   
   //Code for snowfall
   snow1= new Snow(100, 100, 50, 50);
   snow2= new Snow(200, 100, 50, 50);
   snow3= new Snow(300, 100, 50, 50);
   snow4= new Snow(400, 100, 50, 50);
   snow5= new Snow(500, 100, 50, 50);
   snow6= new Snow(600, 100, 50, 50);
   snow7= new Snow(700, 100, 50, 50);
   snow8= new Snow(800, 100, 50, 50);
 
}

function draw(){

   //Updating engine
   Engine.update(engine);

   //Adding background image
   if(backgroundImage){
   background(backgroundImage);
    }

  //Displaying objects for snowfall
  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();
  snow6.display();
  snow7.display();
  snow8.display();

  //Drawing sprites
  drawSprites();
}

async function backGround(){

  //Getting information from API
  var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")

  //Fetching information in JSON format
  var responseJSON= await response.json();

  //Fetching the part of the API which contains date and time
  var dateTime=responseJSON.datetime;

  //Using the index of hour to separate hour from other information
  var hour= dateTime.slice(11,13);
  
  //Setting background iamge according to time
  if(hour>=0 && hour<=19){
    bg="images/snow1.jpg" } 
    else{
    bg="images/snow2.webp"
  }

  backgroundImage=loadImage(bg);

}