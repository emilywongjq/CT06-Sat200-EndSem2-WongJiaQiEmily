let pokemons = ["Pikachu","Raichu","Bulbasaur","Mewtwo","Charizard"];
let yPos;

function setup(){
    createCanvas(200, 300);
    background('black');
}
function draw(){
    fill("pink");
    textAlign(CENTER,CENTER);
    textSize(20);
    yPos = 100;
    for(let i = 0 ; i < pokemons.length ; i++){
        text(pokemons[i],100 , 80 + i*30);
    }
}


