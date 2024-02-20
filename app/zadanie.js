let plohieSlova = ["дурачёк", "дебил", "тупой"]
let diestvie = ["ударить об стенку", "выбросить из окна"]

let draznilka = ["Ты такой", plohieSlova[Math.floor(Math.random() * plohieSlova.length)], ", что тебя хочется", diestvie[Math.floor(Math.random() * diestvie.length)]]

console.log(draznilka);




let x = 0
while (x <= 2) {
    console.log(x++);
}


let animals = ["Кот", "Рыба", "Лемур", "Комодский варан"];

for (let y = 0; y < animals.length; y++) {
    animals[y] = animals[y] + " - прекрасное животное";
    console.log(animals[y]);
}

let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
let result = [];
let result2 = []
console.log();

for(let z = 0; z <= 6; z++) {
    let elem = [];
    result[z] = alphabet[Math.floor(Math.random() * alphabet.length)];
    
}



console.log(result);


let input = "javascript is awesome";
let output = "";


for(let a = 0; a <= input.length; a++) {
    // input[x] = 

    if(input[a] = "a") {
        output[a] = "4";
    }
    else if (input[a] = "e") {
        output[a] = "3";
    }
    else if (input[a] = "i") {
        output[a] = "1";
    }
    else if (input[a] = "o") {
        output[a] = "0";
    }
    else {
        output[a] = input[a];
    }
    
}

console.log(output);


let input1 = "javascript is awesome";
let output1 = "";