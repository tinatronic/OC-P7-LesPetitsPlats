 //console.log("recipes", recipes)
 function displayRecipes(recipes) {
    console.log(recipes)
    const cards = document.getElementById("cards")
    let children = ""
    
    for (let i = 0; i < recipes.length; i++) {
        let ingredientList = ""
        
        recipes[i].ingredients.forEach (ing => ingredientList += `<p class="card-ingredient col-sm-6"><b>${ing.ingredient}</b><br><span>${ing.quantity ? ing.quantity : "-"} ${ing.unit ? ing.unit : ""}</span></p>`)
        //console.log(ingredientList)
        children += `<div class="col-sm-4">
        <div class="card ">
        <img src="./img/recipes/${recipes[i].image}" class="card-img-top" alt="...">
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
        //console.log("ingredients", recipes[i].ingredients)
        
        // for(let j = 0; j < recipes[i].ingredients.length; j++) {
        //     console.log("unit", recipes[i].ingredients[j].unit)
        //     children += `<p>${recipes[i].ingredients[j].ingredient} ${recipes[i].ingredients[j].unit}</p>`
        // }   
    }
    
    cards.innerHTML = `<div>
    <div class="row gy-5">
    ${children}</div>
    </div>`
}

displayRecipes(recipes);

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

// const tab = [ 'simone', 'marc', 'David'];
// const tab1 = [{type: 'dog', age: 2, name: 'carmen'},{type: 'cats', age: 5, name: 'catou'},{type: 'dog', age: 1, name: 'pifou'},{type: 'dog', age: 10, name: 'milou'}]
// let result = [];

// for(let i = 0 ; tab.length; i++){
//     tab[i].toUpperCase();
//     result.push(tab[i]);
// }
// console.log(result);

// foreach map filter reduce for

// map retourner le meme nombre que tu as mis en entrer
// foreach  retourne toujours undefined
//filter // retourne tout les elements qui respect ta condition
//reduce // retouner un resultat
//for te permet d'interrompre le parcours du tableau a contrario des auttres qui parcours toujours tout le tableau
//every true ou false sur la caondition 

// console.clear();
// const res = tab.filter( prenom => {
//     prenom.toUpperCase();
//     if(prenom === 'simone'){
//         return
//     }
//     return prenom
// }); 

// const res1 = tab.map(prenom => prenom.toUpperCase());
// const res2 = tab.forEach(prenom => prenom.toUpperCase());
// const res3= tab.filter(prenom => prenom.toUpperCase());
// const res4 = tab1.reduce((acc, animal) => animal.age + acc ,0)
// const res5 = tab1.map(animal =>{const response = animal.name.toUpperCase();return response})
// const tt = res5.filter(animal => animal);
// // console.log(res);
// // console.log(res1);
// // console.log(res2);
// // console.log(res4);
// console.log(res5);
// console.log(tt);
