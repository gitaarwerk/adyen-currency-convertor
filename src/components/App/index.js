import React from "react";
import { CurrencyCodeSelector } from "../CurrencyCodeSelector";

export const App = ({
  selectedCurrencyCode,
  isLoading,
  onChangeMonetaryInput,
  inputValue,
  isSelectedCurrencyPopUpOpen,
  onOpenCurrencySelector,
  onCloseCurrencySelector,
  onChangeCurrencyCode,
}) => (
  <div>
    {isSelectedCurrencyPopUpOpen && (
      <CurrencyCodeSelector
        onCloseCurrencySelector={onCloseCurrencySelector}
        onSelectCurrency={onChangeCurrencyCode}
        type="radio"
      >
        Selector open
      </CurrencyCodeSelector>
    )}
    <button onClick={onOpenCurrencySelector}>{selectedCurrencyCode}</button>:
    <input type="number" pattern="[,0-9]+" onChange={onChangeMonetaryInput} />
    This is what I typed: {inputValue}
  </div>
);
