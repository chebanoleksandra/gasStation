let typeOfFuel = document.querySelector("#typeOfFuel");
typeOfFuel.addEventListener("change", GetPrice);
typeOfFuel.addEventListener("change", ChangeSum);

let price = document.querySelector("#price");
let priceList = [52.89, 58.45, 53.64, 55.70];
let currency;
function GetPrice() {
    let index = typeOfFuel.selectedIndex;
    currency = document.querySelector('input[name="currency"]:checked');
    if (currency.value == "uah") {
        price.innerText = priceList[index];
    }
    else if (currency.value == "euro") {
        price.innerText = (priceList[index] / 44.08).toFixed(2);
    }
    else if (currency.value == "usd") {
        price.innerText = (priceList[index] / 41.34).toFixed(2);
    }
}

let currencyList = Array.from(document.querySelectorAll('input[name="currency"]'));
currencyList.forEach(radio => {
    radio.addEventListener("change", GetPrice);
    radio.addEventListener("change", ChangeSum);
});

let amountBox = document.querySelector("#amount");
amountBox.addEventListener("change", ChangeSum);
let amount = 1;
let sum = document.querySelector("#sum");

function ChangeSum() {
    amount = amountBox.value;
    sum.innerText = (amount * price.innerText).toFixed(3);
}

let okBtn = document.querySelector("#OKBtn");
okBtn.addEventListener("click", function () {
    alert(sum.innerText);
})