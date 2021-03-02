import React from "react";
import { OutputCurrencies } from "./OutputCurrencies";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedOutputExchangeRates } from "../../selectors/selectors";
import {
  openOutputCurrencySelector,
  changeSelectedInputCurrencyCode,
} from "../../actionCreators/actionCreators";

export const OutputCurrenciesContainer = ({ className }) => {
  const selectedOutputCurrencies = useSelector(getSelectedOutputExchangeRates);
  const dispatch = useDispatch();

  const onOpenCurrencyOutputSelector = () =>
    dispatch(openOutputCurrencySelector());

  const changeInputCurrencyOnClick = (currencyCode) => () =>
    dispatch(changeSelectedInputCurrencyCode(currencyCode));

  return (
    <OutputCurrencies
      className={className}
      selectedOutputCurrencies={selectedOutputCurrencies}
      onOpenCurrencyOutputSelector={onOpenCurrencyOutputSelector}
      changeInputCurrencyOnClick={changeInputCurrencyOnClick}
    />
  );
};
