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
  selectedOutputCurrencies,
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
    <input type="number" pattern="[^0-9.,-]" onChange={onChangeMonetaryInput} placeholder="47,95" />
    This is what I typed: {inputValue}
    <div>
      <h3>Chosen currencies to convert in:</h3>
      <ul style={{ display: "flex" }}>
        {selectedOutputCurrencies.map((currency) => {
          return (
            <li key={currency.cc} style={{ margin: 20 }}>
              <div>[flag]</div>
              <div>
                <div>
                  <small>{currency.name}</small>
                </div>
                <div>
                  <strong>{currency.cc}</strong>
                </div>
                <div>rate: {currency.rate || "no rate available"}</div>
                <div>{currency.value}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  </div>
);
