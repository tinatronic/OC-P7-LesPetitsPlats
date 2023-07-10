console.log("recipes", recipes)
console.log(recipes[1])

const cards = document.getElementById("cards")
let children = ""

for (let i = 0; i < recipes.length; i++) {
    children += `<div class="col-sm-4">
                    <div class="card ">
                        <img src="../img/recipes/${recipes[i].image}" class="card-img-top" alt="...">
                        <div class="card-recipe-time"><p class="px-3 py-1 m-0">${recipes[i].time}min</p></div>
                        <div class="card-body p-4">
                            <h5 class="card-title py-3">${recipes[i].name}</h5>
                            <h6 class="card-subtitle pb-3 m-0">Recette</h6>
                            <p class="card-text">${recipes[i].description}</p>
                            <h6 class="card-subtitle pt-3">Ingrédients</h6>
                        </div>
                    </div>
                </div>`
}

cards.innerHTML += `<div class="container">
                        <div class="row">
                        ${children}</div>
                    </div>`