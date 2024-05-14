const listEl = document.querySelector("#ingredients-fieldset")
const listEl1 = document.querySelector("#instructions-list")
var recipe = document.getElementById("data-input").getAttribute("recipe-name")
var normalServings = document.getElementById("servings").innerText
var desiredServings = document.getElementById("servings").innerText
console.log(servings)


window.onload = function () {
    loadRecipe(desiredServings)
}

function loadRecipe(desiredServings) {
    desiredServings = desiredServings
    listEl.innerHTML = ""
    listEl1.innerHTML = ""
    fetch('../recipes.json')
        .then(res => res.json())
        .then(data => {
            for (let i = 0; i < data[recipe].ingredients.length; i++) {
                listEl.insertAdjacentHTML("beforeend", `<div><input type="checkbox"><span>${data[recipe].quantities[i] * (desiredServings / normalServings)} ${data[recipe].unit[i]} ${data[recipe].ingredients[i]}</span></div>`)
            }
        }
        )


    fetch('../recipes.json')
        .then(res => res.json())
        .then(data => {
            for (let i = 0; i < data[recipe].instructions.length; i++) {
                listEl1.insertAdjacentHTML("beforeend", `<li>${data[recipe].instructions[i]}</li>`)
            }
        }
        )
}

var form = document.getElementById('form');
number = document.getElementById('number');
form.onsubmit = function () {
    desiredServings = number.value;
    loadRecipe(4)
}