var burgerName = prompt("Insert the name of your hamburger")
document.getElementById("burgername").innerHTML = burgerName
var calculateButton = document.getElementsByClassName("calculate")[0];
var totalCost = document.getElementById("sum-ingredients")
calculateButton.addEventListener('click', function(){
    var result = 3
    var ingredients = document.getElementsByClassName("ingredients");
    for (var i = 0; i < ingredients.length; i++) {
        if(ingredients[i].checked) {
            console.log(ingredients[i].value)
            result += parseFloat(ingredients[i].value)
        }
    }
    totalCost.innerHTML = "YOUR PRICE" + " " + result.toFixed(2) + " " + "€"

 // discount code

    var coupon = document.getElementById("discount").value
    var couponFlag = false
    var couponCodes = ["1234","abcd"]
    var discount20 = parseInt(result) * 20 / 100;
    for(var x = 0; x < couponCodes.length; x++) {
    if (coupon === couponCodes[x]) {
        couponFlag = true
    }
    } 
    if (couponFlag) {
        var discountPrice = result - discount20
        totalCost.innerHTML = "YOUR PRICE" + " " + discountPrice.toFixed(2) + " " + "€"
    } else if(coupon.length > 0 && couponFlag !== true) {
        alert("coupon non presente")
    } else {
        console.log("L'utente non ha inserito nessun coupon")
    }
})

    

