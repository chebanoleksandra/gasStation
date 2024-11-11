let okBtn = document.querySelector("#OKBtn");
okBtn.addEventListener("click", function () {
    alert();
})

let typeOfFuel = document.querySelector("#typeOfFuel");
typeOfFuel.addEventListener("change", GetPrice);

let price = document.querySelector("#price");
let priceList = [52.89, 58.45, 53.64, 55.70];

function GetPrice() {
    let index = typeOfFuel.selectedIndex;
    let currency = document.querySelector('input[name="currency"]:checked');
    if(currency.value == "uah")
    {
        price.innerText = priceList[index];
    }
    else if(currency.value == "euro"){
        price.innerText = (priceList[index]/44.08).toFixed(2);
    }
    else if(currency.value == "usd"){
        price.innerText = (priceList[index]/41.34).toFixed(2);
    }
}