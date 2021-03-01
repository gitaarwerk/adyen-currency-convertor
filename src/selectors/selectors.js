import { currencyCodes } from "../repository/currencyCodes";
import { convertCurrency } from "../helpers/convertCurrency";

export const getLatestExchangeRates = (state) => state.latestExchangeRates;

export const getIsLoading = (state) => state.isLoading;

export const getMonetaryInputValue = (state) => state.monetaryInputValue;

export const getSelectedCurrencyCode = (state) => state.selectedCurrencyCode;

export const getIsSelectedInputCurrencyPopUpOpen = (state) =>
  state.isSelectedInputCurrencyPopUpOpen;

export const getIsSelectedOutputCurrencyPopUpOpen = (state) =>
    state.isSelectedOutputCurrencyPopUpOpen;

export const getSelectedOutputCurrencies = (state) =>
  state.selectedOutputCurrencies;

export const getAvailableCurrencyCodes = (state) => {
  const exchangeRates = getLatestExchangeRates(state);
  return currencyCodes.filter((currency) => !!exchangeRates[currency.cc]);
};

export const getSelectedOutputExchangeRates = (state) =>
  getSelectedOutputCurrencies(state).map((selectedCurrency) => {
    const currencyCodeRecord = currencyCodes.find(
      (currency) => currency.cc === selectedCurrency
    );

    const rate = getLatestExchangeRates(state)[selectedCurrency] || 0;

    return {
      name: currencyCodeRecord.name,
      symbol: currencyCodeRecord.symbol,
      currencyCode: selectedCurrency,
      rate: rate || 0,
      value: convertCurrency(
        getMonetaryInputValue(state),
        rate,
        currencyCodeRecord.symbol
      ).format(),
    };
  });
