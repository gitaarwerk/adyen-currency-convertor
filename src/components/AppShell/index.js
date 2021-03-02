import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { App } from "../App";

import {
  getLatestExchangeRates,
  getIsLoading,
  getMonetaryInputValue,
  getIsSelectedInputCurrencyPopUpOpen,
  getIsSelectedOutputCurrencyPopUpOpen,
  getSelectedCurrencyCode,
} from "../../selectors/selectors";
import {
  changeSelectedInputCurrencyCode,
  changeSelectedOutputCurrencyCode,
  closeInputCurrencySelector,
  closeOutputCurrencySelector,
  fetchLatestExchangeRates,
  fetchLatestExchangeRatesSuccess,
  fetchLatestExchangeRatesFailed,
} from "../../actionCreators/actionCreators";

export const AppShell = () => {
  // selectors
  const latestExchangeRates = useSelector(getLatestExchangeRates);
  const isLoading = useSelector(getIsLoading);
  const selectedCurrencyCode = useSelector(getSelectedCurrencyCode);
  const isSelectedInputCurrencyPopUpOpen = useSelector(
    getIsSelectedInputCurrencyPopUpOpen
  );
  const isSelectedOutputCurrencyPopUpOpen = useSelector(
    getIsSelectedOutputCurrencyPopUpOpen
  );
  const inputValue = useSelector(getMonetaryInputValue);



  // action creators
  const dispatch = useDispatch();
  const onChangeInputCurrencyCode = (currencyCode) => {
    dispatch(changeSelectedInputCurrencyCode(currencyCode));
  };
  const onChangeOutputCurrencyCode = (currencyCodes) => {
    dispatch(changeSelectedOutputCurrencyCode(currencyCodes));
  };

  const onCloseCurrencyInputSelector = () =>
    dispatch(closeInputCurrencySelector());


  const onCloseCurrencyOutputSelector = () =>
    dispatch(closeOutputCurrencySelector());

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
      inputValue={inputValue}
      isSelectedInputCurrencyPopUpOpen={isSelectedInputCurrencyPopUpOpen}
      onChangeInputCurrencyCode={onChangeInputCurrencyCode}
      onCloseInputCurrencySelector={onCloseCurrencyInputSelector}
      onCloseOutputCurrencySelector={onCloseCurrencyOutputSelector}
      isSelectedOutputCurrencyPopUpOpen={isSelectedOutputCurrencyPopUpOpen}
      onChangeOutputCurrencyCode={onChangeOutputCurrencyCode}
    />
  );
};

// isSelectedOutputCurrencyPopUpOpen={isSelectedOutputCurrencyPopUpOpen}

// isSelectedOutputCurrencyPopUpOpen,
// onChangeOutputCurrencyCode,
