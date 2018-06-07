var $ = function (id) {
  return document.getElementById(id);
}

var options = ["JACKSON", "BRYANT", "THREE", "FOUR"];
var choice = Math.floor(Math.random() * 4);
var computerWord = options[choice];
var length = computerWord.length;
var displayArea = [length];
var letters = computerWord.split('');
var attempts = 10;
var output = "";
var userLetter = "";
var wrongGuess = [];
var flag = true;




  var setup = function() {
    for (var i = 0; i < length; i++) {
      displayArea[i] = "_ ";
      output += displayArea[i];

      if(userLetter.toUpperCase() === displayArea[i]) {
        displayArea[i] = userLetter.toUpperCase();
        // console.log(displayArea);
      }
    }


    document.getElementById("display").innerHTML = output;
    output = "";

    document.getElementById("record").innerHTML = "Wins: ";
    document.getElementById("guesses").innerHTML = "Guessed Letters: ";
    console.log(computerWord);

    pictureHint();

  }

  var submit = function() {
    output = "";
    userLetter = $("letter").value;
    $("letter").value = "";

    console.log(displayArea);
    console.log(output);
    for (var j = 0; j < length; j++) {
      if (userLetter.toUpperCase() === letters[j]) {
        displayArea[j] = userLetter.toUpperCase();
        flag = true;
      }
      output += displayArea[j] + " ";
    }

    if (flag == false) {
      wrongGuess.push(userLetter);
      attempts--;
    }
    console.log(userLetter);
    document.getElementById("display").innerHTML = output;
    output="";

      displayGuesses();
      displayAttempts();

  }

  function displayScore () {
    document.getElementById("record").innerHTML = "Wins: ";
  }

  function displayGuesses () {
    $("guesses").append(" " + userLetter);
  }

  function displayAttempts () {
    document.getElementById("guessTotal").innerHTML = "Guesses Remaining: " + attempts;
  }

  function pictureHint () {

    document.getElementById("hint").innerHTML = "\n\nHint: \n"

    if (computerWord === "JACKSON") {
      var img = document.createElement("img");

      img.src = "/Users/lukeramsay/Desktop/School/Assignment-3/Word-Guess-Game/assets/images/jackson.jpg ";
      var src = document.getElementById("hint");

      src.appendChild(img)
    }
    if (computerWord === "BRYANT") {
      var img = document.createElement("img");

      img.src = "/Users/lukeramsay/Desktop/School/Assignment-3/Word-Guess-Game/assets/images/kobe.jpeg ";
      var src = document.getElementById("hint");

      src.appendChild(img)
    }
  }

  window.onload = function() {
    setup();
    $("submit").onclick = submit;
    displayScore();
  }
