var canva;

function setup(){
  canvas = createCanvas(850,400);
}


function draw(){
  background("pink");

display(){
  this.title.htlm("myQuiz Game");
  this.title.position(350,0);

  this.question.html("Question:- What starts and ends with the letter 'e', but only have one letter");
  this.question.position(150,80);
  this.Option1.html("1: Everyone");
  this.option1.position(150,100);
  this.option2.html("2: Envelope");
  this.option.position(150,120);

  this.input.position(150,230);

}
asyc Start(){
  if(gameState === 0){
    contestate = new Contestant();
    var constantCountRef = await database.ref('contanstant').once("value");
    if(contestantCountRef.exists()){
      constantCount = constantCountRef.val();
      constantCountRef.getCount();
    }
    question = new Question();
    question.display();
  }
}
this.button.mousePressed(()=>{
  this.title.hide();
  this.input.hide();
  this.button.hide();
  constantCountRef.name = this.input1.value();]
  constantCount+=1;
  constantCountRef.index = constantCount;
  constantCountRef.update();
  constant.updateCount(constantCount);
}
for(var plr in allConstestants){
  var correct = "2";
  fill ("Green")
  else
  fill("red");
}
}

