import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  getLatestExchangeRates,
  getIsLoading,
  getMonetaryInputValue,
  getSelectedCurrencyCode,
  getIsSelectedInputCurrencyPopUpOpen,
  getIsSelectedOutputCurrencyPopUpOpen,
  getSelectedOutputExchangeRates,
} from "../../selectors/selectors";
import {
  onChangeMonetaryInput,
  changeSelectedInputCurrencyCode,
  changeSelectedOutputCurrencyCode,
  openInputCurrencySelector,
  closeInputCurrencySelector,
  openOutputCurrencySelector,
  closeOutputCurrencySelector,
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
  const isSelectedInputCurrencyPopUpOpen = useSelector(
    getIsSelectedInputCurrencyPopUpOpen
  );
  const isSelectedOutputCurrencyPopUpOpen = useSelector(
    getIsSelectedOutputCurrencyPopUpOpen
  );
  const inputValue = useSelector(getMonetaryInputValue);

  const selectedOutputExchangeRates = useSelector(
    getSelectedOutputExchangeRates
  );

  // action creators
  const dispatch = useDispatch();
  const onChangeInputCurrencyCode = (currencyCode) => {
    dispatch(changeSelectedInputCurrencyCode(currencyCode));
  };
  const onChangeOutputCurrencyCode = (currencyCodes) => {
    dispatch(changeSelectedOutputCurrencyCode(currencyCodes));
  };

  const onChangeInput = (event) => {
    dispatch(onChangeMonetaryInput(event.target.value));
  };

  const onOpenCurrencyInputSelector = () =>
    dispatch(openInputCurrencySelector());
  const onCloseCurrencyInputSelector = () =>
    dispatch(closeInputCurrencySelector());

  const onOpenCurrencyOutputSelector = () =>
    dispatch(openOutputCurrencySelector());
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
      onChangeMonetaryInput={onChangeInput}
      inputValue={inputValue}
      selectedCurrencyCode={selectedCurrencyCode}
      isSelectedInputCurrencyPopUpOpen={isSelectedInputCurrencyPopUpOpen}
      onChangeInputCurrencyCode={onChangeInputCurrencyCode}
      onOpenInputCurrencySelector={onOpenCurrencyInputSelector}
      onCloseInputCurrencySelector={onCloseCurrencyInputSelector}
      onOpenOutputCurrencySelector={onOpenCurrencyOutputSelector}
      onCloseOutputCurrencySelector={onCloseCurrencyOutputSelector}
      selectedOutputCurrencies={selectedOutputExchangeRates}
      isSelectedOutputCurrencyPopUpOpen={isSelectedOutputCurrencyPopUpOpen}
      onChangeOutputCurrencyCode={onChangeOutputCurrencyCode}
    />
  );
};

// isSelectedOutputCurrencyPopUpOpen={isSelectedOutputCurrencyPopUpOpen}

// isSelectedOutputCurrencyPopUpOpen,
// onChangeOutputCurrencyCode,
