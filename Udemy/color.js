//var tag = document.querySelector("body");
//tag.classList.add("body");
var button = document.querySelector("button");

//var zmienna = false;
//button.addEventListener("click", function () {
//  if (zmienna === true) {
//    document.body.style.background = "white";
//    zmienna = false;
//  }
//  else {
//    document.body.style.background = "green";
//    zmienna = true;
//  }
//});

button.addEventListener("click", function () {
      document.body.classList.toggle("body")
    });
