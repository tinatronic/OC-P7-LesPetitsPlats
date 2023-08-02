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
        
        const appTag = [...document.querySelectorAll('.list-appliance')].map( (appTag) => appTag.innerText);
        
        if (applianceTagList.includes(recipe.appliance) === false && appTag.includes(recipe.appliance) === false) {
            applianceTagList.push(recipe.appliance);
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

//filters(recipes);
const ingValue = document.querySelector('.ingredients-chips-wrapper');

// private _filter(option: string): string[] {
//     const filterValue = option.toLowerCase();

//     return tableauPrincipal.filter(option => option.propriétéSiyena.toLowerCase().includes(filterValue));
// }

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
                        displayChips(ingredient);
                        const ingredientIndex = ingredientTagList.indexOf(ingredient.toLowerCase());
                        ingredientTagList.splice(ingredientIndex, 1);
                        ingredientTagListWrapper.removeChild(filterItem);
                    })
                }
                
                //console.log(ingredientTagList)
            }
        })
    });
}

const ingInput = document.querySelector('.ingredients-chips-input');

ingInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const ingInputValue = e.target.value.toLowerCase();
        renderIngredients(recipes, ingInputValue);
        ingInput.value = '';
    }
})

function displayChips(ingredientChips) {
    const chip = document.querySelector('.ingredients-chips-wrapper');
    const chipLi = document.createElement('li');
    chipLi.setAttribute('id', ingredientChips);
    chipLi.innerHTML = `<span>${ingredientChips}</span><a href="javascript: remove('${ingredientChips}')">X</a>`;
    //chip.innerHTML = '';
    // ingredientTagList.map((item, index) => {
    chip.appendChild(chipLi);
    // });
}

function remove(ingredientChips) {
    const chip = document.querySelector('.ingredients-chips-wrapper');
    const chipChildren = document.getElementById(ingredientChips);
    chip.removeChild(chipChildren);
    // items = items.filter(item => ingredientTagList.indexOf(item) != i);
    renderIngredients(recipes);
}

renderIngredients(recipes);