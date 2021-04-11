var canvas;
var music;
var box1,box2,box3,box4;
var striker

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces


    //create box sprite and give velocity
    box1 = createSprite(500,580,200,50)
    box2 = createSprite(720,580,200,50)
    box3 = createSprite(280,580,200,50)
    box4 = createSprite(60,580,200,50)

    striker = createSprite(400,200,20,20)

    box1.shapeColor = "red"
    box2.shapeColor = "green"
    box3.shapeColor = "blue"
    box4.shapeColor = "yellow"

    striker.shapeColor = "black"

    striker.velocityX = 2
    striker.velocityY = 2
}

function draw() {
    background(rgb(169,169,169));

    //create edgeSprite

    //add condition to check if box touching surface and make it box
    if(box2.isTouching(striker) && striker.bouneOff(box2)) {
        striker.shapeColor = "green"
    }
    drawSprites();
}
