console.log("recipes", recipes)

const cards = document.getElementById("cards")
let children = ""

for (let i = 0; i < recipes.length; i++) {
    let ingredientList = ""
    
    recipes[i].ingredients.forEach (ing => ingredientList += `<p class="card-ingredient col-sm-6"><b>${ing.ingredient}</b><br><span>${ing.quantity ? ing.quantity : "-"} ${ing.unit ? ing.unit : ""}</span></p>`)
    //console.log(ingredientList)
    children += `<div class="col-sm-4">
    <div class="card ">
    <img src="../img/recipes/${recipes[i].image}" class="card-img-top" alt="...">
    <div class="card-recipe-time"><p class="px-3 py-1 m-0">${recipes[i].time}min</p></div>
    <div class="card-body p-4">
    <h5 class="card-title py-3 m-0">${recipes[i].name}</h5>
    <h6 class="card-subtitle py-3 m-0">Recette</h6>
    <p class="card-text">${recipes[i].description}</p>
    <h6 class="card-subtitle pt-3">Ingrédients</h6>
    <div class="d-flex flex-wrap">
    ${ingredientList}
    </div>
    </div>
    </div>
    </div>`
    console.log("ingredients", recipes[i].ingredients)
    
    for(let j = 0; j < recipes[i].ingredients.length; j++) {
        //console.log("unit", recipes[i].ingredients[j].unit)
        //children += `<p>${recipes[i].ingredients[j].ingredient} ${recipes[i].ingredients[j].unit}</p>`
    }   
}

cards.innerHTML += `<div>
<div class="row gy-5">
${children}</div>
</div>`


function search(word) {
    let results = [];
    for(let i = 0; i < recipes.length; i++) {
        if(recipes[i].name.toLowerCase().includes(word.toLowerCase())) {
            results.push(recipes[i])
        } else if(recipes[i].description.toLowerCase().includes(word.toLowerCase())) {
            results.push(recipes[i])
        } else {
            let ingredientsTmp = recipes[i].ingredients;
            for(let j = 0; j < ingredientsTmp.length; j++) {
                if(ingredientsTmp[j].ingredient.toLowerCase().includes(word.toLowerCase())) {
                    results.push(recipes[i])
                    j = ingredientsTmp.length;
                }
            }
        }
    }
    console.log(results);
    return results;
}
