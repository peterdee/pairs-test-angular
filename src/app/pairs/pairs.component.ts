import { Component, OnInit } from '@angular/core';

import compare from '../../utils';

@Component({
  selector: 'app-pairs',
  templateUrl: './pairs.component.html',
  styleUrls: ['./pairs.component.css']
})
export class PairsComponent implements OnInit {

  valuesString: string = null;
  results: number = null;

  constructor() { }

  ngOnInit() {
  }

  calculate() {
    this.results = compare(this.valuesString.split(','));
    this.valuesString = null;
  }
}
