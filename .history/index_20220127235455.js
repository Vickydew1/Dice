var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomdiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomdiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomdiceImage2 = "images/" + "dice" + randomNumber2 + ".png";

var image2 = document
  .querySelectorAll("img")
  .setAttribute("src", randomdiceImage2);
