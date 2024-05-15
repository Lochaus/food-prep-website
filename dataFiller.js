const listEl = document.querySelector("#ingredients-fieldset")
const listEl1 = document.querySelector("#instructions-list")
var recipe = document.getElementById("data-input").getAttribute("recipe-name")
var normalServings = document.getElementById("servings").value
var desiredServings = document.getElementById("servings").value

window.onload = function () {
    loadRecipe(false)
}

function loadRecipe() {
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

function changeServings(e) {
    e.preventDefault()
    desiredServings = document.getElementById("servings").value
    loadRecipe()
}