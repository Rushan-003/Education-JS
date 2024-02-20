let account = [

]

let user = {
    name: "Rushan",
    tel: "+7 (916) 007-00-00",
    admin: true,
    money: 100000,
    сurrency: "rub",
    country: "Russia",
    city: "Moscow",
    messages: ["Привет", "Как дела?"]
}

function rename () {
    user.name = prompt("Введите ваше новое имя");
    console.warn("Ваше имя изменено. Ваше новое имя:" + user.name );
    return user.name;
}

function createAccount () {
    user.name = prompt("Ваше имя");
    user.tel = prompt("Укажите ваш номер телефона");

    return user.name, user.tel;
}


