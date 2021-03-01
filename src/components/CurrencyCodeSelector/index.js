import React, { useState } from "react";
import { getAvailableCurrencyCodes } from "../../selectors/selectors";
import { useSelector } from "react-redux";

export const CurrencyCodeSelector = ({
  onCloseCurrencySelector,
  onSelectCurrency,
  selectedCurrencyCodes,
  type,
}) => {
  const canOnlySelectOne = type === "radio";
  console.log(type, canOnlySelectOne)

  const [selectedCurrencies, setSelectedCurrencies] = useState(
    selectedCurrencyCodes || []
  );

  const selectCurrency = (event) => {
    if (canOnlySelectOne) {
      setSelectedCurrencies([event.target.value]);
    } else {
      setSelectedCurrencies([...selectedCurrencies, event.target.value]);
    }
  };

  const filteredCurrencyCodes = useSelector(getAvailableCurrencyCodes);

  const onClickSelectCurrencyButton = () => {
    canOnlySelectOne
      ? onSelectCurrency(selectedCurrencies[0])
      : onSelectCurrency(selectedCurrencies);
  };

  return (
    <section>
      <h2 onClick={onCloseCurrencySelector}>Currencies</h2>
      <ul>
        {filteredCurrencyCodes.map((currency) => (
          <li key={currency.cc}>
            <label>
              <input
                onChange={selectCurrency}
                type={canOnlySelectOne ? "radio" : "checkbox"}
                value={currency.cc}
                checked={selectedCurrencies.includes(currency.cc)}
              />
              ({currency.symbol}) {currency.name} ({currency.cc})
            </label>
          </li>
        ))}
      </ul>
      <button type="button" onClick={onClickSelectCurrencyButton}>
        {selectedCurrencies.length > 1
          ? "select currencies"
          : "select currency"}
      </button>
    </section>
  );
};