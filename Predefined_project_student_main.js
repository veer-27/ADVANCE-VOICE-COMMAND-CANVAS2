x = 0;
y = 0;

draw_apple = "";
screen_width = 0;
screen_height = 0;
apple = "";
speak_data = "";
to_number = "";
content = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload()
{
apple = "Predefined_project_student_apple.png";
}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event);
 
 to_number = Number(content);

 if(Number.isInteger(to_number))
 {
  document.getElementById("status").innerHTML = "The speech has been recognized " + content; 
 }

 else
 {
  document.getElementById("status").innerHTML = "The speech has Not recognized A Number " + content; 
 }

 content = event.results[0][0].transcript;

}

function setup() {
 screen_width = window.innerWidth;
 screen_height = window.innerHeight;

 canvas = createCanvas(150,150);
 canvas.position(0,150);
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }

  for(var i = 1; i <= to_number; i++)
  {
    x = Math.floor(math.random() * 700);
    y = Math.floor(math.random() * 400);
    image(apple,x,y,50,50);
    document.getElementById("status").innerHTML = to_number + "Apple Drawn";
    speak_data = to_number;
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
