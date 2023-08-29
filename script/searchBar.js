const searchBar = document.getElementById("searchbar")

const filteredGlobalRecipes = (searchInput, ingsChips, appChips, ustChips) => {
    //console.log(appChips)
    //console.log(ingsChips)
    const filteredRecipes = recipes.filter(recipe => {
        //console.log(recipe.appliance)
        
        return (searchInput && (recipe.name.toLowerCase().includes(searchInput) ||
        recipe.description.toLowerCase().includes(searchInput) ||
        recipe.ingredients.some((ing) => ing.ingredient.toLowerCase().includes(searchInput)))) ||
        (!appChips || (appChips.includes(recipe.appliance.toLowerCase()))) ||
        (!ingsChips || (recipe.ingredients.some((ing) => ingsChips.some((ingsChip) => ingsChip.includes(ing.ingredient.toLowerCase())))))
        
        //(!ustChips || (ustChips && recipe.ustensils.filter(ust => ustChips.includes(ust.toLowerCase())).length > 0))
        //(!ustChips || (ustChips && recipe.ustensils.some((ust) => ustChips.includes(ust.toLowerCase()))))
        //recipes.appliance.toLowerCase().includes(searchInput)
    })
    return filteredRecipes;
};

searchBar.addEventListener('keyup', (e) => {
    const searchInput = e.target.value.toLowerCase()
    //console.log(searchInput)
    const filteredRecipes = filteredGlobalRecipes(searchInput);
    //console.log(filteredRecipes)
    displayRecipes(filteredRecipes)
})

//const filteredArray = array1.filter(value => array2.includes(value));