import React from "react";
import { CurrencyCodeSelector } from "../CurrencyCodeSelector";
import { Header } from "../Header";

export const App = ({
  selectedCurrencyCode,
  isLoading,
  onChangeMonetaryInput,
  inputValue,
  isSelectedInputCurrencyPopUpOpen,
  onOpenInputCurrencySelector,
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
    <button onClick={onOpenInputCurrencySelector}>
      {selectedCurrencyCode}
    </button>
    :
    <input
      type="number"
      pattern="[^0-9.,-]"
      onChange={onChangeMonetaryInput}
      placeholder="47,95"
    />
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
