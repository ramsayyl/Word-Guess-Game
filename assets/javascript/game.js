  var $ = function (id) {
    return document.getElementById(id);
  }

  var options = ["JACKSON", "BRYANT", "JORDAN", "WINFREY"];
  var choice = Math.floor(Math.random() * 4);
  var computerWord = options[choice];
  var length = computerWord.length;
  var displayArea = [];
  var letters = computerWord.split('');
  var attempts = 10;
  var output = "";
  var userLetter = "";
  var wrongGuess = [];
  var rightGuess = [];
  var flag = true;
  var winTotal = 0;
  var correct = 0;
  var letterGuessed = "";

  for (var index = 0; index < length; index++) {
      rightGuess.push('_');
  }


  document.onkeyup = function (event) {
    output = "";
    letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();

    for (var j = 0; j < length; j++) {
      if (letterGuessed.toUpperCase() === letters[j]) {
        displayArea[j] = letterGuessed.toUpperCase();

      }
      output += displayArea[j] ;
    }

    document.getElementById("display").innerHTML = output;
    output="";

    guessCheck(letterGuessed);
  }

  function guessCheck (letter) {

    letter = letter.toUpperCase();

    if (letters.indexOf(letter) === -1) {
      wrongGuess.push(letter);
      attempts--;
      displayGuesses();
      displayAttempts();

      if (attempts === 0) {
        alert("You lost, Refresh to Play again");
      }
    }
    else {
      correct++;
      console.log(correct);
      if (correct == length) {
        alert("You Win! Refresh to play again");
        winTotal++;
        displayScore();
      }
    }

  }


    function setup () {

      for (var i = 0; i < length; i++) {
        displayArea[i] = "_ ";
        output += displayArea[i];
      }
      document.getElementById("display").innerHTML = output;
      output = "";

      pictureHint();
      displayAttempts();
      displayScore();
    }

    function displayScore () {
      document.getElementById("record").innerHTML = winTotal;
    }

    function displayGuesses () {
      document.getElementById("guesses").innerHTML = " " + wrongGuess;

    }

    function displayAttempts () {
      document.getElementById("guessTotal").innerHTML = attempts;
    }

    function pictureHint () {

      if (computerWord === "JACKSON") {
        var img = document.createElement("img");
        img.alt = "King of Pop!";
        img.src = "assets/images/jackson.jpg ";
        var src = document.getElementById("hint");
        src.appendChild(img);
      }
      if (computerWord === "BRYANT") {
        var img = document.createElement("img");
        img.alt = "The Black Mamba/ LA Lakers"
        img.src = "assets/images/kobe.jpeg ";
        var src = document.getElementById("hint");
        src.appendChild(img);
      }
      if (computerWord === "JORDAN") {
        var img = document.createElement("img");
        img.alt = "The GREATEST of All-Time!"
        img.src = "assets/images/jordan.jpeg ";
        var src = document.getElementById("hint");
        src.appendChild(img);
      }
      if (computerWord === "WINFREY") {
        var img = document.createElement("img");
        img.alt = "The Wealthiest Female Alive!";
        img.src = "assets/images/oprah.jpeg ";
        var src = document.getElementById("hint");
        src.appendChild(img);
      }
    }

    window.onload = function() {
      setup();
    }
