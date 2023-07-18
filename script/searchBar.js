// function search(word) {
    
//     //console.log(results);
//     return results;
// }

const searchBar = document.getElementById("searchbar")

searchBar.addEventListener('keyup', (e) => {
    const searchInput = e.target.value.toLowerCase()
    console.log(searchInput)
    let results = [];
    for(let i = 0; i < recipes.length; i++) {
        if(recipes[i].name.toLowerCase().includes(searchInput.toLowerCase())) {
            results.push(recipes[i])
        } else if(recipes[i].description.toLowerCase().includes(searchInput.toLowerCase())) {
            results.push(recipes[i])
        } else {
            let ingredientsTmp = recipes[i].ingredients;
            for(let j = 0; j < ingredientsTmp.length; j++) {
                if(ingredientsTmp[j].ingredient.toLowerCase().includes(searchInput.toLowerCase())) {
                    results.push(recipes[i])
                    j = ingredientsTmp.length;
                }
            }
        }
    }
    console.log(results)
    displayRecipes(results)
})