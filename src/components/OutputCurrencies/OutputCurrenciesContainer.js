import React from "react";
import { OutputCurrencies } from "./OutputCurrencies";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedOutputExchangeRates } from "../../selectors/selectors";
import { openOutputCurrencySelector } from "../../actionCreators/actionCreators";

export const OutputCurrenciesContainer = ({ className }) => {
  const selectedOutputCurrencies = useSelector(getSelectedOutputExchangeRates);
  const dispatch = useDispatch();

  const onOpenCurrencyOutputSelector = () =>
    dispatch(openOutputCurrencySelector());
  return (
    <OutputCurrencies
      className={className}
      selectedOutputCurrencies={selectedOutputCurrencies}
      onOpenCurrencyOutputSelector={onOpenCurrencyOutputSelector}
    />
  );
};
