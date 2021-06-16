let distance = prompt("Укажите расстояние между городами (км):");
let time = prompt("укажите время, за которое вы ходите добраться (час)");
let speed = distance / time;
if (distance > 0 & time > 0) {
    alert(`Нобходимая скорость: ${speed} км/час`);
} else {
    alert('Параметр не может быть отрицательным');
}