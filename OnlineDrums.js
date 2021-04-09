var KeyboardK;

window.addEventListener("keydown", function (event) {
  KeyboardK = event.key;
  if (KeyboardK == "C" || KeyboardK == "c") {
    new Audio("Sounds/caixa.mp3").play();
    KeyboardK = " ";
  } else if (KeyboardK == "B" || KeyboardK == "b") {
    new Audio("Sounds/bumbo.mp3").play();
    KeyboardK = " ";
  } else if (KeyboardK == "S" || KeyboardK == "s") {
    new Audio("Sounds/hihat1.mp3").play();
    KeyboardK = " ";
  } else if (KeyboardK == "F" || KeyboardK == "f") {
    new Audio("Sounds/crash.mp3").play();
    KeyboardK = " ";
  } else if (KeyboardK == "G" || KeyboardK == "g") {
    new Audio("Sounds/crash2.mp3").play();
    KeyboardK = " ";
  } else if (KeyboardK == "R" || KeyboardK == "r") {
    new Audio("Sounds/ride.mp3").play();
    KeyboardK = " ";
  } else if (KeyboardK == "E" || KeyboardK == "e") {
    new Audio("Sounds/surdo.mp3").play();
    KeyboardK = " ";
  } else if (KeyboardK == "T" || KeyboardK == "t") {
    new Audio("Sounds/tom1.mp3").play();
    KeyboardK = " ";
  } else if (KeyboardK == "Y" || KeyboardK == "y") {
    new Audio("Sounds/tom2.mp3").play();
    KeyboardK = " ";
  }
});



