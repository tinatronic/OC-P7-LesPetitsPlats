const searchBar = document.getElementById("searchbar");


const filteredGlobalRecipes = (searchInput, ingsChips, appChips, ustChips) => {

//     let filteredRecipesBySearch = [];
//     let filteredRecipesByIng = []
//     let filteredRecipesByApp = []
// ​
//     let toFiltered = []


    //console.log(appChips)
    //console.log(ingsChips)
    // const filteredRecipes = recipes.filter(recipe => {
    //     //console.log(recipe.appliance)
        
    //     return (searchInput && (recipe.name.toLowerCase().includes(searchInput) ||
    //     recipe.description.toLowerCase().includes(searchInput) ||
    //     recipe.ingredients.some((ing) => ing.ingredient.toLowerCase().includes(searchInput)))) ||
    //     (!appChips || (appChips.includes(recipe.appliance.toLowerCase()))) ||
    //     (!ingsChips || (recipe.ingredients.some((ing) => ingsChips.some((ingsChip) => ingsChip.includes(ing.ingredient.toLowerCase())))))
        
    //     //(!ustChips || (ustChips && recipe.ustensils.filter(ust => ustChips.includes(ust.toLowerCase())).length > 0))
    //     //(!ustChips || (ustChips && recipe.ustensils.some((ust) => ustChips.includes(ust.toLowerCase()))))
    //     //recipes.appliance.toLowerCase().includes(searchInput)
    // })
    
    const filteredRecipesBySearch = recipes.filter(recipe => {
        //console.log(recipe.appliance) 
        return (searchInput && (recipe.name.toLowerCase().includes(searchInput) ||
        recipe.description.toLowerCase().includes(searchInput) ||
        recipe.ingredients.some((ing) => ing.ingredient.toLowerCase().includes(searchInput))))
    }
    ).map(recipe => recipe.id);

    const filteredRecipesByIngredients = recipes.filter(recipe => {
        (!ingsChips || ingsChips.length <= 0 || (recipe.ingredients.some((ing) => ingsChips.some((ingsChip) => ingsChip.includes(ing.ingredient.toLowerCase())))))
    }).map(recipe => recipe.id);

    const filteredRecipesByAppliances = recipes.filter(recipe => {
        (!appChips || appChips.length <= 0 || (appChips.includes(recipe.appliance.toLowerCase())))
    }).map(recipe => recipe.id);

    console.log("ingChips", ingsChips)
    console.log("appChips", appChips)
    console.log("searchinput ", searchInput)
    console.log("filteredsearch", filteredRecipesBySearch)
    console.log("filtered ingredients", filteredRecipesByIngredients)
    console.log(" filtered appliances", filteredRecipesByAppliances)

    const filteredRecipes = recipes.filter(recipe => {
        return (!searchInput || filteredRecipesBySearch.includes(recipe.id)) &&
            (!ingsChips || ingsChips.length <= 0 || filteredRecipesByIngredients.includes(recipe.id)) &&
            (!appChips || appChips.length <= 0 || filteredRecipesByAppliances.includes(recipe.id));
    })
    
    return filteredRecipes;
};

searchBar.addEventListener('keyup', (e) => {
    const searchInput = e.target.value.toLowerCase()
    //console.log(searchInput)
    const filteredRecipes = filteredGlobalRecipes(searchInput, ingredientSelected, applianceSelected);
    //console.log(filteredRecipes)
    displayRecipes(filteredRecipes)
})

//const filteredArray = array1.filter(value => array2.includes(value));