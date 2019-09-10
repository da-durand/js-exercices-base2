var imgElements = document.getElementsByClassName("conteneur");

var mouseOver = imgElements.addEventListener("mouseover", function(event){
    event.target.src = "images/image1_2.jpg";
});