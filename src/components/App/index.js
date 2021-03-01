import React from "react";

export const App = ({
  selectedCurrencyCode,
  isLoading,
  onChangeMonetaryInput,
  inputValue,
}) => (
  <div>
    {selectedCurrencyCode}:
    <input type="number" pattern="[,0-9]+" onChange={onChangeMonetaryInput} />
    This is what I typed: {inputValue}
  </div>
);
