import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    
    ingredientAdded = new EventEmitter<Ingredient[]>();
    
    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 2),
        new Ingredient('Cucumber', 3)
    ];

    getIngredients(): Ingredient[] {
        return this.ingredients.slice();
    }

    addIngredient(item: Ingredient) {
        this.ingredients.push(item);
        this.ingredientAdded.emit(this.getIngredients());
    }
}