var img1 = document.getElementById("image1");

var mouseOver = img1.addEventListener("mouseover", function(event){
    event.target.src = "images/image1_2.jpg";
});