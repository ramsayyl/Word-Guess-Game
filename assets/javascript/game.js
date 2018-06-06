var $ = function (id) {
  return document.getElementById(id);
}

var options = ["one", "two", "three", "four"];
var choice = Math.floor(Math.random() * 4);
var computerWord = options[choice];
var length = computerWord.length;
var displayArea = [length];
var letters = computerWord.split('');
var attempts = 10;
var output = "";
var userLetter = "";


  var setup = function() {
    for (var i = 0; i < length; i++) {
      displayArea[i] = "_ ";
      output += displayArea[i];
    }

    document.getElementById("display").innerHTML = output;
    output = "";
  }

  var submit = function() {
    output = "";
    userLetter = $("letter").value;
    $("letter").value = "";

    for (var j = 0; j < length; j++) {
      if (userLetter.toUpperCase() == letters[j]) {
        displayArea[j] = userLetter.toUpperCase();
        attempts--;
      }
      output += displayArea[j] + " ";
      console.log(letters[j]);
      console.log(userLetter);
    }
    document.getElementById("display").innerHTML = output;
    output="";
    attempts--;
  }

  window.onload = function() {
    setup();
    $("submit").onclick = submit;
  }
