// const buyingPrice = document.getElementById("buying-price");
// const sellingPrice = document.getElementById("selling-price");


const netProfitOrLoss = document.getElementById("calculate"); 
// const outputValue = document.getElementById("output");
// const numberOfShares = document.getElementById("no-of-shares");
// const buyingCommission = document.getElementById("buy-commission");
// const sellingCommission = document.getElementById("sell-commission");

// let numberOfSharesValue = 0;
// let buyingPriceValue = 0;
// let sellingPriceValue = 0;
// let buyCommission = 0;
// let sellCommission = 0;
// let stockAPI = `http://api.marketstack.com/v1/eod?access_key=7417594fbfa376a54de89a48c28dcf41`;





function clickHandler() {
  fetch("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&outputsize=compact&apikey=AJF30UVGZUEVUK0J")
  .then(resposne => resposne.json())
  .then(json => console.log(json))
}

// fetch(stockAPI)
// .then(response => response.json())
// .then(json => console.log(json));

// functions

// function numberOfSharesHandler() {
//   numberOfSharesValue = numberOfShares.value;
// }

// function buyingPriceHandler() {
//   buyingPriceValue = buyingPrice.value;
// }

// function sellingPriceHandler() {
//   sellingPriceValue = sellingPrice.value;
// }

// function buyCommissionHandler() {
//   buyCommission = buyingCommission.value;
// }

// function sellCommissionHandler() {
//   sellCommission = sellingCommission.value;
// }

// function clickHandler() {
//   // Profit (P) = ( (SP * NS) - SC ) - ( (BP * NS) + BC )
//   let profit = ((sellingPriceValue * numberOfSharesValue) - ((sellCommission * sellingPriceValue * numberOfSharesValue) / 100)) - ((buyingPriceValue * numberOfSharesValue) + ((buyCommission * buyingPriceValue * numberOfSharesValue) / 100));

//   console.log(numberOfSharesValue, buyingPriceValue, sellingPriceValue, buyCommission, sellCommission);
//   console.log(profit);
//   outputValue.innerText = `Net Profit(Loss) : $${profit}`;

//   fetch(stockAPI)
//   .then(response => response.json())
//   .then(json => console.log(json));
  
// }

// // event listeners
// numberOfShares.addEventListener("change", numberOfSharesHandler)
// buyingPrice.addEventListener("change", buyingPriceHandler);
// sellingPrice.addEventListener("change", sellingPriceHandler);
// buyingCommission.addEventListener("change", buyCommissionHandler);
// sellingCommission.addEventListener("change", sellCommissionHandler);
netProfitOrLoss.addEventListener("click", clickHandler);

