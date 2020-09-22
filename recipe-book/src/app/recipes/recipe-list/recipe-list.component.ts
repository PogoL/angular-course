import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'simply test recipe', 
    'https://previews.123rf.com/images/scyther5/scyther51703/scyther5170300058/73650702-cooking-food-kitchen-cutting-cook-hands-man-male-knife-preparation-fresh-preparing-hand-table-salad-.jpg'),
    new Recipe('A test recipe', 'simply test recipe', 
    'https://previews.123rf.com/images/scyther5/scyther51703/scyther5170300058/73650702-cooking-food-kitchen-cutting-cook-hands-man-male-knife-preparation-fresh-preparing-hand-table-salad-.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
