var imgElements = document.getElementsByClassName("conteneur");
var img1Element = document.getElementById("image1");
var img2Element = document.getElementById("image2");
var img3Element = document.getElementById("image3");
var img4Element = document.getElementById("image4");
var img5Element = document.getElementById("image5");


var mouseOver = imgElements.addEventListener("mouseover", function(event){
    alert("test")
    event.target.src = "images/image2_2.jpg";

}


// if (img1Element.addEventListener("mouseover", function (event)){
//     for (let pas = 0; pas < 4; pas++) {
//         if (event.target.src != "images/image" + str(pas) + "_2.jpg")
//             event.target.src = "images/image" + str(pas) + "_2.jpg";
//     };

// }





// });
// });
// var mouseOver = img3Element.addEventListener("mouseover", function(event){
//     event.target.src = "images/image3_2.jpg";
// });
// var mouseOver = img4Element.addEventListener("mouseover", function(event){
//     event.target.src = "images/image4_2.jpg";
// });
// var mouseOver = img5Element.addEventListener("mouseover", function(event){
//     event.target.src = "images/image5_2.jpg";
// });