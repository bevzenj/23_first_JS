let radius=prompt('Введите радиус окружности (см):');
let area = (radius ** 2) * Math.PI;
if (radius > 1) {
    alert(`Площадь круга: ${area}`);
} else {
    alert('Параметр не может быть отрицательным');
}