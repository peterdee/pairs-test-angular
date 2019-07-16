import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class CalculateService {
  convertToNumbers(array: any[] = []) {
    // make sure that array has elements
    if (array.length === 0) {
      return array;
    }

    // return processed array
    return array.reduce((arr, item) => {
      if (!Number.isNaN(Number(item)) && Number.isFinite(Number(item))) {
        arr.push(Number(item));
      }
      return arr;
    }, []);
  }

  splitter(array: number[] = []) {
    // split original array into two arrays and sort resulting arrays
    return {
      positive: array.filter(item => item > 0).sort((a, b) => a - b).reverse(),
      negative: array.filter(item => item <= 0).sort((a, b) => a - b),
    };
  }

  getPairs(array: number[] = [], results: number[] = []) {
    // check if original array is empty
    if (array.length === 0) {
      return results;
    }

    // check if there's only one element in the array
    if (array.length === 1) {
      results.push(array[0]);
      return results;
    }

    // get pairs recursively
    const clone: number[] = array.slice();
    for (let i = 0; i < clone.length - 1; i += 2) {
      const mul: number = clone[i] * clone[i + 1];
      const sum: number = clone[i] + clone[i + 1];
      if (mul > sum) {
        results.push(mul);
        delete clone[i];
        delete clone[i + 1];
        const cleanse: number[] = clone.filter(item => item !== null);
        return this.getPairs(cleanse, results);
      } else {
        results.push(clone[i]);
        results.push(clone[i + 1]);
        delete clone[i];
        delete clone[i + 1];
        const cleanse: number[] = clone.filter(item => item !== null);
        return this.getPairs(cleanse, results);
      }
    }
  }
}
