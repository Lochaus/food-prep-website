const listEl = document.querySelector("#ingredients-fieldset")
var recipe = document.getElementById("data-input").getAttribute("recipe-name")

fetch('../recipes.json')
    .then(res => res.json())
    .then(data => {
        for (let i = 0; i < data[recipe].ingredients.length; i++) {
            listEl.insertAdjacentHTML("beforeend", `<div><input type="checkbox"><span>${data[recipe].quantities[i]} ${data[recipe].unit[i]} ${data[recipe].ingredients[i]}</span></div>`)
        }
    }
    )

const listEl1 = document.querySelector("#instructions-list")

fetch('../recipes.json')
    .then(res => res.json())
    .then(data => {
        for (let i = 0; i < data[recipe].instructions.length; i++) {
            listEl1.insertAdjacentHTML("beforeend", `<li>${data[recipe].instructions[i]}</li>`)
        }
    }
    )