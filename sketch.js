var canvas;
var music;
var greensur,bluesur,redsur,yellowsur;
var box;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(540,600);

    //create 4 different surfaces
 greensur = createSprite(70,550,100,15)
 greensur.shapeColor = "green";
 
 bluesur = createSprite(200,550,100,15)
 bluesur.shapeColor = "blue";

 redsur = createSprite(330,550,100,15)
 redsur.shapeColor = "red";

 yellowsur = createSprite(460,550,100,15)
 yellowsur.shapeColor = "yellow";

    //create box sprite and give velocity
 box = createSprite(490,470,50,50); 
 box.velocityX  = -3;
 box.shapeColor = "white";
 
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    
    drawSprites();


    //add condition to check if box touching surface and make it box
}
 function bounceOff(greensur,bluesur,redsur,yellowsur) {
 if(greensur.x - bluesur.x < greensur.width/2 + bluesur.width/2
 && bluesur.x - greensur.x < greensur.width/2 + bluesur,width/2
 && redsur.x - yellowsur.x < redsur.width/2 + yellowsur.width/2
 && yellowsur.x - redsur.x < redsur.width/2 + yellowsur.width/2) 
 {
  greensur.velocityX = greensur.velocityX * (-1);
  bluesur.velocityX = bluesur.velocityX * (-1);
  redsur.velocityX = redsur.velocityX * (-1);
  yellowsur.velocityX = yellowsur.velocityX * (-1);
 }
 if(greensur.y - bluesur.y < greensur.height/2 + bluesur.height/2
 && bluesur.y - greensur.y < greensur.height/2 + bluesur,height/2
 && redsur.y - yellowsur.y < redsur.height/2 + yellowsur.height/2
 && yellowsur.y - redsur.y < redsur.height/2 + yellowsur.height/2) 
 {
    greensur.velocityY = greensur.velocityX * (-1);
    bluesur.velocityY = bluesur.velocityX * (-1);
    redsur.velocityY = redsur.velocityX * (-1);
    yellowsur.velocityY = yellowsur.velocityX * (-1);
 }
  }