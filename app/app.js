let plohieSlova = ["дурачёк", "дебил", "тупой"]
let diestvie = ["ударить об стенку", "выбросить из окна"]

let draznilka = ["Ты такой", plohieSlova[Math.floor(Math.random() * plohieSlova.length)], ", что тебя хочется", diestvie[Math.floor(Math.random() * diestvie.length)]]

console.log(draznilka);


let user = {
    name: "Rushan",
    admin: true,
    money: 100000,
    сurrency: "rub",
    country: "Russia",
    city: "Moscow",
    messages: ["Привет", "Как дела?"]
}

let x = 0
while (x <= 2) {
    console.log(x++);
}


let animals = ["Кот", "Рыба", "Лемур", "Комодский варан"];

for (let y = 0; y < animals.length; y++) {
    animals[y] = animals[y] + " - прекрасное животное";
    console.log(animals[y]);
}