import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    // styles: ['']
})
export class HeaderComponent {
    collapsed = true;

    @Output() headerClicked = new EventEmitter<string>();

    onRecipeClick() {
        this.headerClicked.emit("Recipe");
    }

    onShoppingListClick() {
        this.headerClicked.emit("ShoppingList");
    }
}