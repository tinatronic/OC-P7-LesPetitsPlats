const searchBar = document.getElementById("searchbar")

const filteredGlobalRecipes = (searchInput, ingsChips, appChips, ustChips) => {
    let filteredRecipesBySearch = []
    let filteredRecipesByIng = []
    let filteredRecipesByApp = []
    let filteredRecipesByUst = []
    
    let toFiltered = []
    
    
    if(searchInput && searchInput!= "") {
        filteredRecipesBySearch = recipes.filter(recipe => {
            console.log(recipe.name, recipe.name.toLowerCase().includes(searchInput))
            //console.log(recipe.name.toLowerCase().includes(searchInput))
            return (searchInput && (recipe.name.toLowerCase().includes(searchInput) ||
            recipe.description.toLowerCase().includes(searchInput) ||
            recipe.ingredients.some((ing) => ing.ingredient.toLowerCase() == searchInput.toLowerCase())))
        }).map((r) => r.id)
        toFiltered.push(filteredRecipesBySearch)
        //console.log("filteredRecipesBySearch", filteredRecipesBySearch)
    }
    
    if(ingsChips && ingsChips.length > 0 ) {
        console.log(ingsChips)
        filteredRecipesByIng = recipes.filter(recipe => ingsChips.every(ingChip => recipe.ingredients.find(ing => ing.ingredient.toLowerCase() == ingChip.toLowerCase())))
                .map((recipe) => recipe.id)
                console.log("filteredRecipesByIng", filteredRecipesByIng)
                toFiltered.push(filteredRecipesByIng)
    }
    
    if(appChips && appChips.length > 0 ) {
        filteredRecipesByApp = recipes.filter((recipe) => appChips.includes(recipe.appliance.toLowerCase())
        ).map((recipe) => recipe.id)
        //console.log("filteredRecipesByApp", filteredRecipesByApp)
        toFiltered.push(filteredRecipesByApp)
    }
    
    if(ustChips && ustChips.length > 0) {
        console.log(ustChips)
        filteredRecipesByUst = recipes.filter((recipe) => ustChips.every(ustChip =>
            recipe.ustensils.includes(ustChip.toLowerCase()))
            ).map((recipe) => recipe.id)
            console.log("filteredRecipesByUst", filteredRecipesByUst)
            toFiltered.push(filteredRecipesByUst)
    }
    
    const filteredRecipes = recipes.filter(recipe => {
        let toAdded = true;
        toFiltered.forEach((array) => { 
            if(!array.includes(recipe.id)) {
                toAdded = false
            }
        })
        return toAdded;
    })
    console.log(filteredRecipes);
    return filteredRecipes;
    
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
    // return filteredRecipes;
};

searchBar.addEventListener('keyup', (e) => {
    const searchInput = e.target.value.toLowerCase()
    //console.log(searchInput)
    const filteredRecipes = filteredGlobalRecipes(searchInput, ingredientSelected, applianceSelected);
    //console.log(filteredRecipes)
    displayRecipes(filteredRecipes)
})