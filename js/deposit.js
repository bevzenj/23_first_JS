const percentage = 0.05;

let depositAmount = prompt ('Введите сумму вашего вклада (грн):');
let depositTerm = prompt ('Ввeдите срок вклада (в месяцах):');

let deposit = ((depositAmount * percentage) / 12) * depositTerm;

alert (`При вкладе в ${depositAmount} грн, сумма ваших процентов составит
    ${deposit.toFixed(2)} грн за ${depositTerm} мес. при ставке в 5% годовых`)