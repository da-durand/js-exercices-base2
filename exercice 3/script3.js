var keyInput = document.getElementById("nom");

keyInput.addEventListener("keyup", function(event){
    var resultElement = keyInput.value;
    alert(resultElement);
});