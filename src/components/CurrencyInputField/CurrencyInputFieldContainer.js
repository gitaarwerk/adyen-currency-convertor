import React from "react";
import {
  getSelectedCurrencyCode,
  getMonetaryInputValue,
} from "../../selectors/selectors";

import {
  onChangeMonetaryInput,
  openInputCurrencySelector,
} from "../../actionCreators/actionCreators";

import { CurrencyInputField } from "./CurrencyInputField";
import { useDispatch, useSelector } from "react-redux";

export const CurrencyInputFieldContainer = ({ className }) => {
  const selectedCurrencyCode = useSelector(getSelectedCurrencyCode);
  const currentValue = useSelector(getMonetaryInputValue);
  const dispatch = useDispatch();

  const onChangeInput = (event) => {
    dispatch(onChangeMonetaryInput(event.target.value));
  };
  const onOpenCurrencyInputSelector = () =>
    dispatch(openInputCurrencySelector());

  return (
    <CurrencyInputField
      className={className}
      onOpenInputCurrencySelector={onOpenCurrencyInputSelector}
      selectedCurrencyCode={selectedCurrencyCode}
      onChangeMonetaryInput={onChangeInput}
      currentValue={currentValue}
    />
  );
};
