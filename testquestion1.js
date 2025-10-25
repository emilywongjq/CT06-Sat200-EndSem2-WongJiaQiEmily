let posX , posY , xSpeed;
function setup(){
    createCanvas(600,400);
    posX = width/ 2;
    posY = height/2;
    xSpeed = 5;
    fill('limegreen');
}

function draw(){
    background('lightblue')
    posX += xSpeed;
    circle(posX,posY,50);
    if(posX - 50/2 <= 0 || posX + 50/2 >=width){
        xSpeed = xSpeed * -1;
    }

}



