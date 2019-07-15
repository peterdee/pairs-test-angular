function splitter(array) {
  return {
    positive: array.filter(item => item > 0).sort((a, b) => a - b).reverse(),
    negative: array.filter(item => item <= 0).sort((a, b) => a - b),
  };
}

function getPairs(array, results = []) {
  if (array.length === 0) {
    return results;
  }
  if (array.length === 1) {
    results.push(array[0]);
    return results;
  }
  const clone = array.slice();
  for (let i = 0; i < clone.length - 1; i += 2) {
    const mul = clone[i] * clone[i + 1];
    const sum = clone[i] + clone[i + 1];
    if (mul > sum) {
      results.push(mul);
      delete clone[i];
      delete clone[i + 1];
      const cleanse = clone.filter(item => item !== null);
      return getPairs(cleanse, results);
    } else {
      results.push(clone[i]);
      results.push(clone[i + 1]);
      delete clone[i];
      delete clone[i + 1];
      const cleanse = clone.filter(item => item !== null);
      return getPairs(cleanse, results);
    }
  }
}

function convertToNumbers(array) {
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

export default function compare(array) {
  const processed = convertToNumbers(array);
  const { positive, negative } = splitter(processed);
  const pPairs = getPairs(positive);
  const nPairs = getPairs(negative);
  return [].concat(pPairs, nPairs).reduce((sum, item) => {
    sum += item;
    return sum;
  });
}
