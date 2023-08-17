const searchBar = document.getElementById("searchbar")

const filteredGlobalRecipes = (searchInput, ingsChips) => {
    const filteredRecipes = recipes.filter(recipe => {
        return searchInput && (recipe.name.toLowerCase().includes(searchInput) ||
        recipe.description.toLowerCase().includes(searchInput) ||
        recipe.ingredients.some((ing) => ing.ingredient.toLowerCase().includes(searchInput))) &&
        ( !ingsChips || (ingsChips && recipe.ingredients.some((ing) => ingsChips.some((ingsChip) => ingsChip.includes(ing.ingredient.toLowerCase())))))
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