import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService {
    
    recipeSelected = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe(
            'Cocktail', 
            'better test recipe',
            'https://previews.123rf.com/images/scyther5/scyther51703/scyther5170300058/73650702-cooking-food-kitchen-cutting-cook-hands-man-male-knife-preparation-fresh-preparing-hand-table-salad-.jpg',
            [
                new Ingredient('Milk', 2),
                new Ingredient('Strawberries', 10)
            ]),
        new Recipe(
            'Fish and fries',
            'It\'s just a fish and some fries',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Fish%2C_chips_and_mushy_peas.jpg/800px-Fish%2C_chips_and_mushy_peas.jpg',
            [
                new Ingredient('Fish', 1),
                new Ingredient('Fries', 20)
            ])
    ];

    getRecipes(): Recipe[] {
        return this.recipes.slice();
    }
}