import { Component, Input, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() currentRecipe: Recipe;

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }

  addToShoppingList() {
    this.currentRecipe.ingredients.forEach(el => {
      this.slService.addIngredient(el);
    });
  }
}
