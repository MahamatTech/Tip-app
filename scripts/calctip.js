let btnCalc = document.getElementById("btnCalcTip");

btnCalc.addEventListener('click', function(){
    //input
    let meal = document.getElementById("txtMeal").value;
    let perc = document.getElementById("cboPercent").value;
    
    //convert to number types
    let basePrice = parseFloat(meal);
    let tipPerc = parseFloat(perc);

    

   //calculate tip
let tip = basePrice * tipPerc;


//output result
alert(`The tip is: $${tip.toFixed(2)} and the overall amount is: $${(basePrice + tip).toFixed(2)}`)


});
