import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onNumberIncremented(eventData: {newNumber: number}) {
    if (eventData.newNumber % 2 == 0) {
      this.oddNumbers.push(eventData.newNumber);
    }
    else {
      this.evenNumbers.push(eventData.newNumber);
    }
  }

}
