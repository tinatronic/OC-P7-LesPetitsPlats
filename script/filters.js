//console.log("toto");
function filters(recipes) {
    const ingredientTagListWrapper = document.querySelector(".list-ingredients")
    const applianceTagListWrapper = document.querySelector(".list-appliance")
    const ustensilTagListWrapper = document.querySelector(".list-ustentils")
    
    const ingredientTagList = []
    const applianceTagList = []
    const ustensilTagList = []
    
    ingredientTagListWrapper.innerHTML = ""
    
    recipes.forEach((recipe) => {
        
        const ingTag = [...document.querySelectorAll(".list-ingredients")].map( (ingTag => ingTag.innerText));
        
        recipe.ingredients.forEach(({ ingredient }) => {
            if (ingredientTagList.includes(ingredient) === false && ingTag.includes(ingredient) === false) {
                ingredientTagList.push(ingredient);
                const filterItem = document.createElement('li');
                filterItem.classList.add('ingredients-item');
                filterItem.innerText = ingredient;
                ingredientTagListWrapper.appendChild(filterItem);
                //console.log(ingredientTagList)
            }
        })
        
        // const appTag = [...document.querySelectorAll('.list-appliance')].map( (appTag) => appTag.innerText);
        
        // if (applianceTagList.includes(recipe.appliance) === false && appTag.includes(recipe.appliance) === false) {
        //     applianceTagList.push(recipe.appliance);
        //     const filterItem = document.createElement('li');
        //     filterItem.classList.add('appliances-item');
        //     filterItem.innerText = recipe.appliance;
        //     applianceTagListWrapper.appendChild(filterItem);
        // }
        
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

const ingValue = document.querySelector('.ingredients-chips-wrapper');
const ingredientSelected = [];

function renderIngredients(recipes, searchIngredients) {
    const ingredientTagListWrapper = document.querySelector(".list-ingredients");
    const ingredientTagList = [];
    
    ingredientTagListWrapper.innerHTML = "";
    
    recipes.forEach((recipe) => {
        
        const ingTag = [...document.querySelectorAll(".list-ingredients")].map( (ingTag => ingTag.innerText));
        
        recipe.ingredients.forEach(({ ingredient }) => {
            if (ingredientTagList.includes(ingredient.toLowerCase()) === false && ingTag.includes(ingredient.toLowerCase()) === false) {
                if ((searchIngredients && ingredient.toLowerCase().includes(searchIngredients)) || (!searchIngredients)) {
                    ingredientTagList.push(ingredient.toLowerCase());
                    const filterItem = document.createElement('li');
                    filterItem.classList.add('ingredients-item');
                    filterItem.innerText = ingredient;
                    ingredientTagListWrapper.appendChild(filterItem);

                    filterItem.addEventListener('click', () => {
                        displayIngredientChip(ingredient);
                        const ingredientIndex = ingredientTagList.indexOf(ingredient.toLowerCase());
                        ingredientTagList.splice(ingredientIndex, 1);
                        ingredientTagListWrapper.removeChild(filterItem);
                    })
                }
            }
        })
    });
}

function displayIngredientChip(ingredientChips) {
    const chip = document.querySelector('.ingredients-chips-wrapper');
    const chipList = document.createElement('li');
    chipList.setAttribute('id', ingredientChips);
    chipList.innerHTML = `<span class="chip">${ingredientChips}</span><a href="javascript: removeIngredientChip('${ingredientChips}')">X</a>`;
    //chip.innerHTML = '';
    // ingredientTagList.map((item, index) => {
    chip.appendChild(chipList);
    // });
    ingredientSelected.push(ingredientChips.toLowerCase());
    const result = filteredGlobalRecipes(searchBar.value, ingredientSelected);
    displayRecipes(result);
    console.log(result)
}

function removeIngredientChip(ingredientChips) {
    const chip = document.querySelector('.ingredients-chips-wrapper');
    const chipChildren = document.getElementById(ingredientChips);
    chip.removeChild(chipChildren);
    // items = items.filter(item => ingredientTagList.indexOf(item) != i);
    renderIngredients(recipes);
    ingredientSelected.splice(ingredientSelected.indexOf(ingredientChips.toLowerCase()), 1);
}

// Render appliance list in dropdown menu
const appValue = document.querySelector('.appliance-chips-wrapper');

function renderAppliance(recipes, searchAppliance) {
    const applianceTagListWrapper = document.querySelector(".list-appliance");
    const applianceTagList = [];
    applianceTagListWrapper.innerHTML = "";
    
    recipes.forEach((recipe) => {
        
        const appTag = [...document.querySelectorAll('.list-appliance')].map( (appTag) => appTag.innerText);
        
        if (applianceTagList.includes(recipe.appliance) === false && appTag.includes(recipe.appliance) === false) {
            applianceTagList.push(recipe.appliance);
            const filterItem = document.createElement('li');
            filterItem.classList.add('appliances-item');
            filterItem.innerText = recipe.appliance;
            applianceTagListWrapper.appendChild(filterItem);

            filterItem.addEventListener('click', () => {
                displayChips(appliance);
                const applianceIndex = applianceTagList.indexOf(appliance.toLowerCase());
                applianceTagList.splice(applianceIndex, 1);
                applianceTagListWrapper.removeChild(filterItem);
            })
        }
    });
}

const ingInput = document.querySelector('.ingredients-chips-input');
const appInput = document.querySelector('.appliance-chips-input');

ingInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const ingInputValue = e.target.value.toLowerCase();
        renderIngredients(recipes, ingInputValue);
        ingInput.value = '';
    }
})

renderIngredients(recipes);
renderAppliance(recipes);