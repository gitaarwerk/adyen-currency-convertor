import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getLatestExchangeRates,
  getIsLoading,
  getMonetaryInputValue,
  getSelectedCurrencyCode,
  getIsSelectedCurrencyPopUpOpen,
} from "../../selectors/selectors";
import {
  helloWorld,
  onChangeMonetaryInput,
  changeSelectedCurrencyCode,
  openCurrencySelector,
  closeCurrencySelector,
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
    // If no exchange rates are available, call it
    if (!latestExchangeRates.length) {
      dispatch(helloWorld());
    }
  }, [dispatch, latestExchangeRates]);

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
    />
  );
};
