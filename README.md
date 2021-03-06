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

`npm run dev`

Since the app uses `80` port, you can receive this error:

```text
An unhandled exception occurred: listen EACCES: permission denied 127.0.0.1:80
```

You can still launch the app with `sudo`:

`sudo npm run dev`

Development server will be available at http://localhost:80

### Build

`npm run build`

Use `sudo` if you are getting the `EACCESS` errors.

The build artifacts will be stored in the `dist/` directory.

Use the `--prod` flag for a production build.

### Static serving

`npm start`

Static files are served from the `/dist` directory with `Express`.

To serve the static, run the `build` command first.

### Heroku deployment

The app deployed to Heroku automatically (`deploy` branch).

Available at https://pairs-test.herokuapp.com

### Testing

`npm run test`

Use `sudo` if you are getting the `EACCESS` errors.
 
Tests are executed via [Karma](https://karma-runner.github.io).

### How to use

- Enter the values in the `Values` input field. 

Values should be separated with the comma symbol (`,`).

Values should be integers or symbols.

The app will check all of the values, and only the numbers will be used for the pair multiplication.

- Press the `CALCULATE` button or hit `ENTER` after you entered all of the values.

- Resulting value will be displayed under the `CALCULATE` button.

### Brief algorithm walk through

- Entered values are split into an array.

- All of the values in the array are checked, and only the numbers are left in the resulting array.

- Resulting array of numbers is split into two separate arrays of integers: one for the positive values, and one for the negative values (negative array includes zeroes).

- Both positive and negative arrays are then processed, pairs are getting determined recursively. Two new arrays are formed: one with the multiplications of the positive values, and another one with the multiplications of the negative values.

- Total sum is calculated.
