let side=prompt('Введите длинну стороны квадрата:', '');
let square = side * 4;
if (square > 1) {
    alert(`Перимерт квадрата: ${square}`);
} else {
    alert('Параметр не может быть отрицательным');
}