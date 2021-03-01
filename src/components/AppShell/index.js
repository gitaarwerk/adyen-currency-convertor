import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getLatestExchangeRates,
  getIsLoading,
  getMonetaryInputValue,
  getSelectedCurrencyCode,
} from "../../selectors/selectors";
import {
  helloWorld,
  onChangeMonetaryInput,
  changeSelectedCurrencyCode,
} from "../../actionCreators/actionCreators";
import { App } from "../App";

export const AppShell = () => {
  const dispatch = useDispatch();
  const latestExchangeRates = useSelector(getLatestExchangeRates);
  const isLoading = useSelector(getIsLoading);
  const selectedCurrencyCode = useSelector(getSelectedCurrencyCode);
  const onChangeCurrencyCode = () => {
    dispatch(changeSelectedCurrencyCode());
  };
  const onChangeInput = (event) => {
    dispatch(onChangeMonetaryInput(event.target.value));
  };
  const inputValue = useSelector(getMonetaryInputValue);

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
    />
  );
};
