btn = document.createElement('button')
btn.id = "btn_1"

btn.onclick = function () {
    alert('Hello World');
}

btn.textContent = "Привет"

document.body.appendChild(btn)
