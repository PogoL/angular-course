import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
    
    recipeSelected = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe('Cocktail', 'better test recipe',
            'https://previews.123rf.com/images/scyther5/scyther51703/scyther5170300058/73650702-cooking-food-kitchen-cutting-cook-hands-man-male-knife-preparation-fresh-preparing-hand-table-salad-.jpg'),
        new Recipe('A test recipe', 'simply test recipe',
            'https://previews.123rf.com/images/scyther5/scyther51703/scyther5170300058/73650702-cooking-food-kitchen-cutting-cook-hands-man-male-knife-preparation-fresh-preparing-hand-table-salad-.jpg')
    ];

    getRecipes(): Recipe[] {
        return this.recipes.slice();
    }
}