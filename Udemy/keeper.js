var buttonPlayerTwo = document.getElementById('button_player_two');
var buttonPlayerOne = document.getElementById('button_player_one');
var reset = document.getElementById('button_reset');
h1 = document.getElementById('h1');
p = document.querySelector('p');
var po = 0;
var pt = 0;

buttonPlayerOne.addEventListener("click", function () {
      po += 1;
      h1.innerHTML = "<h4>" + po +" to " + pt + "</h4>";
      });

buttonPlayerTwo.addEventListener("click", function () {
      pt += 1;
      h1.innerHTML = "<h4>" + po +" to " + pt + "</h4>";
    });

reset.addEventListener("click", function () {
      po = 0;
      pt = 0;
      h1.innerHTML = "<h4>" + po +" to " + pt + "</h4>";
      });

input_wartosc.addEventListener("click", function () {
      p.innerHTML = "<p> Playing to " + input_wartosc.value + "</p>";
      });
