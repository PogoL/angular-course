import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output()
  numberIncremented = new EventEmitter<{newNumber: number}>();

  currentNumber = 0;
  incrementer: any;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.incrementer = setInterval(() => { 
      this.currentNumber++;
      this.numberIncremented.emit({newNumber: this.currentNumber}); 
    }, 1000);
  }

  onStopGame() {
    clearInterval(this.incrementer);
  }
}
