var calculateButton = document.getElementsByClassName("calculate")[0];
var totalCost = document.getElementById("sum-ingredients")
calculateButton.addEventListener('click', function(){
    var result = 0
    var ingredients = document.getElementsByClassName("ingredients");
    for (var i = 0; i < ingredients.length; i++) {
        if(ingredients[i].checked) {
            console.log(ingredients[i].value)
            result += parseInt(ingredients[i].value)
        }
    }
    totalCost.innerHTML = "Your price" + " " + result.toFixed(2) + " " + "€"
})