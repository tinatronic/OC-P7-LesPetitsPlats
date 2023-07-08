console.log("recipes", recipes)

const cards = document.getElementById("cards")
let children = ""

for (let i = 0; i < recipes.length; i++) {
    children += `<div class="col-sm-4"><div class="card ">
                            <img src="../img/recipes/${recipes[i].image}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${recipes[i].name}</h5>
                                <p class="card-text">${recipes[i].description}</p>
                            </div>
                        </div></div>`
}

cards.innerHTML += `<div class="container">
                        <div class="row">
                        ${children}</div>
                    </div>`