const thisYear = 2021;

let userYear = prompt ('Введите год вашего рождения', '');
let result = thisYear - userYear;

if (result >= 21 && result < 25) {
    alert(`Вам: ${result} года`);
} 
else {
    alert(`Вам: ${result} лет`)
}
