//All Variables need to be declared in the global js, but nothing should be assigned to the variables outside the functions unless they are "core variables" which determine core systems for the game

// core variables start
var screenState = sessionStorage.getItem("scene");
if(screenState === null) {
    screenState = "menu";
    sessionStorage.setItem("scene", screenState);
}else {
    screenState = sessionStorage.getItem("scene");
}
// core variables end
// game variables are declared here
var screen;

var title;
var new_game;
var load_game;
var controls;
var credits;
var mute_button;
var mute_state = false;;
// game variables end

//game functions

function setup() {
    //screen = createCanvas(800, 450);
    //screen.position(0,0);

    if(screenState === "menu"){
        new p5(menu_screen);
    }
    
}

function draw() {
}