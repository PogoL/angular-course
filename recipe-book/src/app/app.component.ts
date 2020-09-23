import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isRecipeDisplayed: boolean = true;

  onHeaderClicked(eventData: string) {
    if (eventData == "Recipe") {
      this.isRecipeDisplayed = true;
    } else if (eventData == "ShoppingList") {
      this.isRecipeDisplayed = false;
    }
  }
}
