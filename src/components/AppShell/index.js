import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { currencyCodes } from "../../repository/currencyCodes";

import {
  getLatestExchangeRates,
  getIsLoading,
  getMonetaryInputValue,
  getSelectedCurrencyCode,
  getIsSelectedCurrencyPopUpOpen,
  getSelectedOutputCurrencies,
  getSelectedOutputExchangeRates,
} from "../../selectors/selectors";
import {
  onChangeMonetaryInput,
  changeSelectedCurrencyCode,
  openCurrencySelector,
  closeCurrencySelector,
  fetchLatestExchangeRates,
  fetchLatestExchangeRatesSuccess,
  fetchLatestExchangeRatesFailed,
} from "../../actionCreators/actionCreators";
import { App } from "../App";

export const AppShell = () => {
  // selectors
  const latestExchangeRates = useSelector(getLatestExchangeRates);
  const isLoading = useSelector(getIsLoading);
  const selectedCurrencyCode = useSelector(getSelectedCurrencyCode);
  const isSelectedCurrencyPopUpOpen = useSelector(
    getIsSelectedCurrencyPopUpOpen
  );
  const inputValue = useSelector(getMonetaryInputValue);

  const selectedOutputExchangeRates = useSelector(
    getSelectedOutputExchangeRates
  );

  // action creators
  const dispatch = useDispatch();
  const onChangeCurrencyCode = (currencyCode) => {
    dispatch(changeSelectedCurrencyCode(currencyCode));
  };
  const onChangeInput = (event) => {
    dispatch(onChangeMonetaryInput(event.target.value));
  };

  const onOpenCurrencySelector = () => dispatch(openCurrencySelector());
  const onCloseCurrencySelector = () => dispatch(closeCurrencySelector());

  // Side effects
  useEffect(() => {
    // If no exchange rates are available and nothing is loading..., fetch rates
    if (latestExchangeRates.length === 0 && isLoading === false) {
      try {
        dispatch(fetchLatestExchangeRates());
        fetch(
          `https://api.exchangeratesapi.io/latest?base=${selectedCurrencyCode}`
        )
          .then((results) => results.json())
          .then((data) => {
            console.log("latst data", data.rates);
            dispatch(fetchLatestExchangeRatesSuccess(data.rates));
          });
      } catch (error) {
        dispatch(fetchLatestExchangeRatesFailed());
        console.error(error);
      }
    }
  }, [dispatch, latestExchangeRates, isLoading, selectedCurrencyCode]);

  return (
    <App
      isLoading={isLoading}
      onChangeMonetaryInput={onChangeInput}
      inputValue={inputValue}
      selectedCurrencyCode={selectedCurrencyCode}
      onChangeCurrencyCode={onChangeCurrencyCode}
      isSelectedCurrencyPopUpOpen={isSelectedCurrencyPopUpOpen}
      onOpenCurrencySelector={onOpenCurrencySelector}
      onCloseCurrencySelector={onCloseCurrencySelector}
      selectedOutputCurrencies={selectedOutputExchangeRates}
    />
  );
};
