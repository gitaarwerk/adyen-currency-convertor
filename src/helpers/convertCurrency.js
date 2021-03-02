import currency from "currency.js";

export function convertCurrency(input, rate, symbol) {
  const converted = currency(input, {
    precision: 2,
    symbol: `${symbol} `,
  }).multiply(rate);

  return converted;
}
