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
    chipList.setAttribute('class', 'chip-item');
    chipList.innerHTML = `<span class="chip">${ingredientChips}</span><a href="javascript: removeIngredientChip('${ingredientChips}')"><i class="fas fa-xmark"></i></a>`;
    chip.appendChild(chipList);
    ingredientSelected.push(ingredientChips.toLowerCase());
    const result = filteredGlobalRecipes(searchBar.value, ingredientSelected, applianceSelected);
    displayRecipes(result);
}

function removeIngredientChip(ingredientChips) {
    const chip = document.querySelector('.ingredients-chips-wrapper');
    const chipChildren = document.getElementById(ingredientChips);
    chip.removeChild(chipChildren);
    renderIngredients(recipes);
    ingredientSelected.splice(ingredientSelected.indexOf(ingredientChips.toLowerCase()), 1);
}

// Render appliance list in dropdown menu
const appValue = document.querySelector('.appliance-chips-wrapper');
const applianceSelected = [];

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
                displayApplianceChip(recipe.appliance);
                const applianceIndex = applianceTagList.indexOf(recipe.appliance.toLowerCase());
                applianceTagList.splice(applianceIndex, 1);
                applianceTagListWrapper.removeChild(filterItem);
            })
        }
    });
}

function displayApplianceChip(applianceChips) {
    const chip = document.querySelector('.appliance-chips-wrapper');
    const chipList = document.createElement('li');
    chipList.setAttribute('id', applianceChips);
    chipList.setAttribute('class', 'chip-item');
    chipList.innerHTML = `<span class="chip">${applianceChips}</span><a href="javascript: removeIngredientChip('${applianceChips}')"><i class="fas fa-xmark"></i></a>`;
    chip.appendChild(chipList);

    applianceSelected.push(applianceChips.toLowerCase());
    const result = filteredGlobalRecipes(searchBar.value, ingredientSelected, applianceSelected);
    displayRecipes(result);
    console.log(result)
}

function removeApplianceChip(applianceChips) {
    const chip = document.querySelector('.appliance-chips-wrapper');
    const chipChildren = document.getElementById(applianceChips);
    chip.removeChild(chipChildren);
    renderIngredients(recipes);
    ingredientSelected.splice(ingredientSelected.indexOf(applianceChips.toLowerCase()), 1);
}


// Ustensils
const ustValue = document.querySelector('.ustensils-chip-wrapper');
const ustensilSelected = [];

function renderUstensils(recipes) {
    const chip = document.querySelector('.ustensils-chips-wrapper');
    const chipList = document.createElement('li');

    const ustensilTag = [...document.querySelectorAll('.list-ustensils')].map( (ustensilTag) => ustensilTag.innerText)
        recipe.ustensils.forEach((ustensils) => {
            if (ustensilTagList.includes(ustensils) === false && ustensilTag.includes(ustensils) === false) {
                ustensilTagList.push(ustensils);
                const filterItem = document.createElement('li');
                filterItem.classList.add('ustensils-items');
                filterItem.innerText = ustensils;
                ustensilTagListWrapper.appendChild(filterItem);
            }
        });  
}

const ingInput = document.querySelector('.ingredients-chips-input');
const appInput = document.querySelector('.appliance-chips-input');
const ustInput = document.querySelector('.ustensils-chips-input');

ingInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const ingInputValue = e.target.value.toLowerCase();
        renderIngredients(recipes, ingInputValue);
        ingInput.value = '';
    }
})

renderIngredients(recipes);
renderAppliance(recipes);