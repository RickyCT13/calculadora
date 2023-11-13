import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  val1: number | undefined;
  val2: number | undefined;
  result: number | string | undefined;

  constructor() {}

  valuesAreSet() {
    return (this.val1 && this.val2);
  }
  add() {
    if (this.val1 && this.val2) {
      this.result = this.val1 + this.val2;
    }
  }
  subtract() {
    if (this.val1 && this.val2) {
      this.result = this.val1 - this.val2;
    }
  }
  multiply() {
    if (this.val1 && this.val2) {
      this.result = this.val1 * this.val2;
    }
  }
  divide() {
    if (this.val1 && this.val2) {
      if (this.val2 != 0) {
        this.result = this.val1 / this.val2;
      }
      else {
        this.result = "ERROR: No se puede dividir por 0";
      }
      
    }
  }
  power() {
    if (this.val1 && this.val2) {
      this.result = Math.pow(this.val1, this.val2);
    }
  }
}
