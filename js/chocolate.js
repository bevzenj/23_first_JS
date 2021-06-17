let moneyInWallet = prompt ('Сколько денег в вашем кошельке? (грн)');
let costChocolate = prompt ('Какая стоимость одной шоколадки? (грн)');

let piecesChocolate = Math.floor(moneyInWallet / costChocolate);
let deliveryMoney = moneyInWallet - (costChocolate * piecesChocolate);

alert (`За ${moneyInWallet} грн вы сможете купить 
    ${piecesChocolate} шт. и у вас останется ${deliveryMoney} грн`);



    /*
    let moneyInWallet = prompt ('Сколько денег в вашем кошельке? (грн)');
let costChocolate = prompt ('Какая стоимость одной шоколадки? (грн)');

let piecesChocolate = Math.floor(moneyInWallet / costChocolate);
let deliveryMoney = moneyInWallet - (costChocolate * piecesChocolate);

if (moneyInWallet > costChocolate) {
    alert (`За ${moneyInWallet} грн вы сможете купить 
        ${piecesChocolate} шт. и у вас останется ${deliveryMoney} грн`);
}
else {
    alert ('У вас не достаточно денег для такой цены шоколада');
} 
*/
