import { Component } from '@angular/core';

import { CalculateService } from '../services/CalculateService';

@Component({
  selector: 'app-pairs',
  templateUrl: './pairs.component.html',
  styleUrls: ['./pairs.component.css']
})

export class PairsComponent {

  valuesString: string = null;
  result: number = null;

  constructor(private service: CalculateService) {}

  calculate() {
    // create an array of strings
    const stringsArray: any[] = this.valuesString.split(',');

    // convert everything to numbers
    const processed: number[] = this.service.convertToNumbers(stringsArray);

    // get arrays with positive and negative values
    const { positive = [], negative = [] }: { positive: number[], negative: number[] } = this.service.splitter(processed);

    // get pairs for both of the arrays
    const positivePairs = this.service.getPairs(positive);
    const negativePairs = this.service.getPairs(negative);

    // calculate final result
    this.result = [].concat(positivePairs, negativePairs).reduce((sum, item) => {
      sum += item;
      return sum;
    });
  }
}
