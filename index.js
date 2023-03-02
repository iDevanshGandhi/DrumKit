for(var i=0;i<document.querySelectorAll("button").length;i++){
switch (i) {
    case 0:
        document.querySelectorAll("button")[i].addEventListener("click", function(){
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
        })
      break;
    case 1:
        document.querySelectorAll("button")[i].addEventListener("click", function(){
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();
        })
        break;
    case 2:
        document.querySelectorAll("button")[i].addEventListener("click", function(){
        audio = new Audio('sounds/tom-3.mp3');
        audio.play();
        })
        break;
    case 3:
        document.querySelectorAll("button")[i].addEventListener("click", function(){
        audio = new Audio('sounds/tom-4.mp3');
        audio.play();
        })
        break;
    case 4:
        document.querySelectorAll("button")[i].addEventListener("click", function(){
        audio = new Audio('sounds/snare.mp3');
        audio.play();
        })
        break;
    case 5:
        document.querySelectorAll("button")[i].addEventListener("click", function(){
        audio = new Audio('sounds/crash.mp3');
        audio.play();
        })
        break;
    case 6:
        document.querySelectorAll("button")[i].addEventListener("click", function(){
        audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
        })
        break;
    default:
        console.log();
  }
}