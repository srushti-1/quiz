var gameState = 0;
var contestantCount;
var database;
var quiz, question, contestant;
var allContestant, answer; 

var canvas;

function setup(){
  database = firebase.database();
  canvas = createCanvas(850,400);
  database = firebase.database()
    createCanvas(400,400);
    quiz = new Quiz()
    quiz.getState()
    quiz.start()
}


function draw(){
  background("pink");

  if(contestantCount === 4){
    quiz.update(1);
  }

  if(gameState === 1){
    clear();
    quiz.play();
  }
  drawSprites()
}
