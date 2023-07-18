const searchBar = document.getElementById("searchbar")

searchBar.addEventListener('keyup', (e) => {
    const searchInput = e.target.value.toLowerCase()
    console.log(searchInput)
    const filteredRecipes = recipes.filter(recipes => {
        return recipes.name.toLowerCase().includes(searchInput) ||
        recipes.description.toLowerCase().includes(searchInput) ||
        recipes.ingredients.some((ing) => ing.ingredient.toLowerCase().includes(searchInput))
        //recipes.appliance.toLowerCase().includes(searchInput)
    })
    console.log(filteredRecipes)
    displayRecipes(filteredRecipes)
})