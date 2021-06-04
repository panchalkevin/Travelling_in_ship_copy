var sea, ship;
var seaimg, shipimg;
function preload()
{
  seaimg = loadImage("sea.png");
  shipimg =                    loadAnimation("ship1.png","ship1.png",
                                          "ship2.png","ship1.png");
}

function setup()
{
  createCanvas(400,400);
  //load the sea 
  sea=createSprite(400,200);
  sea.addImage(seaimg);
  sea.velocityX = -5;
  sea.scale=0.3;

  // load the animation to the ship
  ship = createSprite(100,200,30,30);
  ship.addAnimation("movingShip",shipimg)
  ship.scale=0.2;
  
}

function draw() 
{
    background("0");
    //Reset the background
    if (sea.x<0)
  {
      sea.x = sea.width/8
  }
    drawSprites();
}