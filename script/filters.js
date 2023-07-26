//console.log("toto");
function filters(recipes) {
    const ingredientTagListWrapper = document.querySelector(".list-ingredients")
    const applianceTagListWrapper = document.querySelector(".list-appliance")
    const ustensilTagListWrapper = document.querySelector(".list-ustentils")
    
    const ingredientTagList = []
    const applianceTagList = []
    const ustensilTagList = []
    //console.log(ingredientTagList)
    //console.log("toto")
    ingredientTagListWrapper.innerHTML = ""
    
    recipes.forEach((recipe) => {
        
        const ingTag = [...document.querySelectorAll(".list-ingredients")].map( (ingTag => ingTag.innerText));
        //console.log(ingTag)
        recipe.ingredients.forEach(({ ingredient }) => {
            if (ingredientTagList.includes(ingredient) === false && ingTag.includes(ingredient) === false) {
                ingredientTagList.push(ingredient);
                const filterItem = document.createElement('li');
                filterItem.classList.add('ingredients-item');
                filterItem.innerText = ingredient;
                ingredientTagListWrapper.appendChild(filterItem);
            }
        })
        
        const appTag = [...document.querySelectorAll('.list-appliance')].map( (appTag) => appTag.innerText);
        //console.log(appTag)
        if (applianceTagList.includes(recipe.appliance) === false && appTag.includes(recipe.appliance) === false) {
            applianceTagList.push(recipe.appliance);
            console.log(applianceTagList)
            const filterItem = document.createElement('li');
            filterItem.classList.add('appliances-item');
            filterItem.innerText = recipe.appliance;
            applianceTagListWrapper.appendChild(filterItem);
        }
        
        // const ustensilTag = [...document.querySelectorAll('.list-ustensils')].map( (ustensilTag) => ustensilTag.innerText)
        // recipe.ustensils.forEach((ustensils) => {
        //     if (ustensilTagList.includes(ustensils) === false && ustensilTag.includes(ustensils) === false) {
        //         ustensilTagList.push(ustensils);
        //         const filterItem = document.createElement('li');
        //         filterItem.classList.add('ustensils-items');
        //         filterItem.innerText = ustensils;
        //         ustensilTagListWrapper.appendChild(filterItem);
        //     } 
        // });  
    });
}

filters(recipes);