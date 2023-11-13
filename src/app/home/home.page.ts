import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  val1: number | undefined;
  val2: number | undefined;
  operation: string | undefined;
  result: number | string | undefined;

  constructor() {}

  /**
   * Suma dos valores
   * @method
   */
  add() {
    this.operation = 'Suma';
    if (this.val1 && (this.val2 || this.val2 === 0)) {
      this.result = this.val1 + this.val2;
    }
  }

  /**
   * Resta dos valores
   * @method
   */
  subtract() {
    this.operation = 'Resta';
    if (this.val1 && (this.val2 || this.val2 === 0)) {
      this.result = this.val1 - this.val2;
    }
  }

  /**
   * Calcula el producto de dos valores
   * @method
   */
  multiply() {
    this.operation = 'Producto';
    if (this.val1 && (this.val2 || this.val2 === 0)) {
      this.result = this.val1 * this.val2;
    }
  }

  /**
   * Divide un valor por otro
   * @method
   */
  divide() {
    this.operation = 'División';
    if (this.val1 && this.val2) {
      this.result = this.val1 / this.val2;
    }
    else {
      this.result = 'ERROR: No se puede dividir por 0';
    }
  }

  /**
   * Eleva una base a un exponente
   * @method
   */
  power() {
    this.operation = 'Potencia';
    if (this.val1 && (this.val2 || this.val2 === 0)) {
      this.result = Math.pow(this.val1, this.val2);
    }
  }
  
  /**
   * Reinicia los valores, el tipo de operación y el resultado.
   * @method
   */
  reset() {
    this.val1 = undefined;
    this.val2 = undefined;
    this.operation = undefined;
    this.result = undefined;
  }
}
