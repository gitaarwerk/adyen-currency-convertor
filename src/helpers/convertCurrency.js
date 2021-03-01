import currency from "currency.js";

export function convertCurrency(input, rate, symbol) {
  const converted = currency(input, {
    precision: 3,
    symbol,
  }).multiply(rate);

  return converted;
}
