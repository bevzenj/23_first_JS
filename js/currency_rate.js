const currencyRate = 0.84;
let currencyUSD = prompt ('Введите сумму (USD):');

let exchange = currencyUSD * currencyRate;

alert (`${currencyUSD} USD будет ${currencyRate} EUR`);