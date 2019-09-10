var btnElement = document.body.childNodes[1][3];
var firstNameElement = document.getElementById("nom") ;
var lastNameElement = document.getElementById("prenom") ;
var cityElement = document.getElementById("ville") ;

var reset = btnElement.addEventListener("click", function(){
    firstNameElement.value = "";
    lastNameElement.value = "";
    cityElement.value = "";
})