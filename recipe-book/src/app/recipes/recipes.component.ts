import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  
  @Input() clickedRecipeItem: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

  displayRecipe(clickedRecipe: Recipe) {
    this.clickedRecipeItem = clickedRecipe;
  }
}
