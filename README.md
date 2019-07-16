## Pairs Test (Angular)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.1.

Node version for this project can be found in the [packege.json](package.json) file.

### Task

```text
You are given a list of integers, both positive and negative.
Each integer in the list must either be paired with another element in the
list or be a single element.
Once the elements have been paired, the integers in the pairs are multiplied
and the results are summed up - the sum will include the single elements.
Write a program to find the sequence of pairs and singles which
give the biggest possible sum, and calculate this max sum.

Examples:
1. For the list [0,1,2,3,4,5] the pairs (4,5) and (2,3) are formed
and 0 and 1 are single elements. The max. sum is 27: (20+6+0+1).
2. For the list [-1,0,1] the pairs (-1,0) is formed and 1 is a single element.
The max. sum is 1.
3. For the list [1,1] no pairs are formed only two single elements. The max. sum is 2. 

You choose how input/output is handled etc.
```

### Deploy

- `git clone https://github.com/peterdee/pairs-test-angular`
- `cd pairs-test-angular`
- `nvm use 11.14` (you can find the correct Node version in the [package.json](package.json) file)
- `npm i`

### Launch

`ng serve`

Development server will be available at http://localhost:4200

### Build

`ng build`

The build artifacts will be stored in the `dist/` directory.

Use the `--prod` flag for a production build.

### Testing

`ng test`
 
Tests are executed via [Karma](https://karma-runner.github.io).
