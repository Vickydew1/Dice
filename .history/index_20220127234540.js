var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomdiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomdiceImage;

var image1 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImageSource);
