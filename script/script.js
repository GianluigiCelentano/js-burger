var calculateButton = document.getElementsByClassName("calculate")[0];
var totalCost = document.getElementById("total")
calculateButton.addEventListener('click', function(){
    var ingredients = document.getElementsByClassName("ingredients");
    for (var i = 0; i < ingredients.length; i++) {
        if(ingredients[i].checked) {
            console.log(ingredients[i].value)
            totalCost.innerHTML = ingredients[i].value
        }
    }
})