let baseSlow = ["Рыба", "Конь", "Слон", "Кирпичь", "Олень", "Осень", "Ноябрь", "Германия", "Самолёт", "Автомобиль", "Город", "Шашлык", "Дача", "Мышь", "Компьютер", "Сосна", "Университет", "Паспорт", "Килька", "Кросовок", "Подставка", "Книга", "Пол", "Солдат", "Герб", "Экономика", "Земля", "Романс", "Кнопка", "Рок", "Повар", "Ошибка", "Кровать"]

let vibor = baseSlow[Math.floor(Math.random() * baseSlow.length)]



alert('Добро пожаловать в игру "Висельница"');

let simvl_vibor = vibor.length;

let result = [];

for (let a = 0; a < simvl_vibor; a++) {
    result[a] = "_";
}
console.log(result.join(" "));
console.log(vibor)




let bukva = prompt("Введите букву!");

    for (let a = 0; a <= simvl_vibor ; a++) {
        if (vibor[a] == bukva) {
            result[a] = bukva;
            console.warn("Буква найдена!")
        }
        else {
            console.warn("Это не та буква!")
        }
    }


// Доделать задание стр. 116 - 125.

