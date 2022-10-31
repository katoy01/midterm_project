// our world object - this object handles our tiles, drawing the world and converting screen
// coordinates into game coordinates
let theWorld;
// our user controlled character object - see Player.js for more information

let thePlayer;

// create an object to hold our "world parameters" - we will send this object into our
// OverheadWorld to tell it how our world is organized
let worldParameters = {
    tileSize: 50,
    tileFolder: 'farming',
    numTiles: 49,
    solidTiles: {0:true, 18:true, 6:true}
  };

  // handle the tile loading and creating our player object in preload before the game can start
function preload() {
    // theWorld = new OverheadWorld(worldParameters);
    // thePlayer = new Player(100, 100, theWorld);
}

function setup() {
createCanvas(600,600);
// 
}

function draw() {

}