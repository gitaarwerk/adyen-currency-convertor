import currency from "currency.js";

// make sure values are handled properly
function prepareInputValue(input) {
  console.log(currency(input));

  return input;
}

export function convertCurrency(input, rate, symbol) {
  console.log(input, rate);
  const converted = currency(input, {
      precision: 3,
      symbol
  }).multiply(rate);

  console.log(converted);

  return converted;
}
