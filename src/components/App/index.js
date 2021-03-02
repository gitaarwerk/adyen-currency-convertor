import React from "react";
import { CurrencyCodeSelector } from "../CurrencyCodeSelector";
import { Header } from "../Header";
import { CurrencyInputField } from "../CurrencyInputField";

export const App = ({
  isLoading,
  inputValue,
  isSelectedInputCurrencyPopUpOpen,
  onCloseInputCurrencySelector,
  onChangeInputCurrencyCode,
  isSelectedOutputCurrencyPopUpOpen,
  onOpenOutputCurrencySelector,
  onCloseOutputCurrencySelector,
  onChangeOutputCurrencyCode,
  selectedOutputCurrencies,
}) => (
  <div>
    <Header />
    <CurrencyInputField />
    {isSelectedInputCurrencyPopUpOpen && (
      <CurrencyCodeSelector
        onCloseCurrencySelector={onCloseInputCurrencySelector}
        onSelectCurrency={onChangeOutputCurrencyCode}
        type="radio"
      />
    )}
    {isSelectedOutputCurrencyPopUpOpen && (
      <CurrencyCodeSelector
        onCloseCurrencySelector={onCloseOutputCurrencySelector}
        onSelectCurrency={onChangeOutputCurrencyCode}
        type="checkbox"
      />
    )}
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
      <div>
        <button onClick={onOpenOutputCurrencySelector}>
          {selectedOutputCurrencies.length > 1
            ? "Add or remove currencies"
            : "Add currency"}
        </button>
      </div>
    </div>
  </div>
);
