var calculateButton = document.getElementsByClassName("calculate")[0];
var totalCost = document.getElementById("sum-ingredients")
calculateButton.addEventListener('click', function(){
    var result = 2
    var ingredients = document.getElementsByClassName("ingredients");
    for (var i = 0; i < ingredients.length; i++) {
        if(ingredients[i].checked) {
            console.log(ingredients[i].value)
            result += parseFloat(ingredients[i].value)
        }
    }
    totalCost.innerHTML = "Your price" + " " + result.toFixed(2) + " " + "€"
})
var coupon = document.getElementById("discount")
coupon = false
var discount20 = parseInt(result) * 20 / 100;
var couponCodes = ["1234","abcd"]
if (coupon === couponCodes) {
    var result = 2
    coupon = true
    var discountPrice = result - discount20;
    totalCost.innerHTML = "Your price" + " " + discountPrice.toFixed(2) + " " + "€"
} 