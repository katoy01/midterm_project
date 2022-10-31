// our world object - this object handles our tiles, drawing the world and converting screen
// coordinates into game coordinates
let theWorld;
// our user controlled character object - see Player.js for more information

let thePlayer;

// room data - loaded in from an external file (see 'data/rooms.json')
let roomData;

// create an object to hold our "world parameters" - we will send this object into our
// OverheadWorld to tell it how our world is organized
let worldParameters = {
    tileSize: 16,
    tileFolder: 'farming',
    numTiles: 0,
    solidTiles: { 0: true, 18: true, 6: true }
};

// handle the tile loading and creating our player object in preload before the game can start
function preload() {
    worldParameters.numTiles = tileMap.width / worldParameters.tileSize;

    // create our world
    theWorld = new OverheadWorld(worldParameters);

    // create our player
    thePlayer = new Player(100, 100, theWorld);
}

function setup() {
    createCanvas(960, 480);
}

function setup() {
    createCanvas(960, 480);
    // 

}

function allDone(worldData) {
    console.log("here");
}

function badStuffHappened(result) {
    console.log(result);
}

function draw() {
    background(0);
    ellipse(width / 2, height / 2, 48, 48);
}

