import React, { useState, Fragment } from "react";
import styled from "styled-components";
import { getAvailableCurrencyCodes } from "../../selectors/selectors";
import { useSelector } from "react-redux";

export const CurrencyCodeSelector = ({
  onCloseCurrencySelector,
  onSelectCurrency,
  selectedCurrencyCodes,
  type,
}) => {
  const canOnlySelectOne = type === "radio";
  const [selectedCurrencies, setSelectedCurrencies] = useState(
    selectedCurrencyCodes || []
  );
  const toggleCurrencyMultiple = (value) => {
    const index = selectedCurrencies.indexOf(value);
    const array = [...selectedCurrencies];

    if (index === -1) {
      array.push(value);
    } else {
      array.splice(index, 1);
    }

    return array;
  };

  const selectCurrency = (event) => {
    const clickedValue = event.target.value;
    if (canOnlySelectOne) {
      // always set ths one to clicked
      setSelectedCurrencies([clickedValue]);
    } else {
      // toggle the value here instead
      setSelectedCurrencies(toggleCurrencyMultiple(clickedValue));
    }
  };

  const filteredCurrencyCodes = useSelector(getAvailableCurrencyCodes);

  const onClickSelectCurrencyButton = () => {
    canOnlySelectOne
      ? onSelectCurrency(selectedCurrencies[0])
      : onSelectCurrency(selectedCurrencies);
    // and close it!
    onCloseCurrencySelector();
  };

  return (
    <>
      <PopUpBG />
      <PopUpContainer>
        <Header2 onClick={onCloseCurrencySelector}>Select currency</Header2>
        <PopUpContent>
          <StyledCurrencyList>
            {filteredCurrencyCodes.map((currency) => (
              <StyledCurrencyItem key={currency.cc}>
                <label>
                  <StyledInput
                    onChange={selectCurrency}
                    type={canOnlySelectOne ? "radio" : "checkbox"}
                    value={currency.cc}
                    checked={selectedCurrencies.includes(currency.cc)}
                  />
                  ({currency.symbol}) {currency.name} ({currency.cc})
                </label>
              </StyledCurrencyItem>
            ))}
          </StyledCurrencyList>
        </PopUpContent>
        <Button type="button" onClick={onClickSelectCurrencyButton}>
          {selectedCurrencies.length > 1
            ? "Select currencies"
            : "Select currency"}
        </Button>
      </PopUpContainer>
    </>
  );
};

const StyledInput = styled.input`
  margin-right: 0.4rem;
  display: inline-block;
`;

const StyledCurrencyList = styled.ul`
  margin: 1rem 0;
  padding: 0;
  list-style: none;
`;

const StyledCurrencyItem = styled.li`
  margin: 0.8rem 0;
  padding: 0;
`;

const Header2 = styled.h2``;

const PopUpBG = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 3;
`;

const PopUpContainer = styled.div`
  width: calc(100vw - 6.4rem);
  height: calc(90vh - 6.4rem);
  padding: 3.2rem;
  margin: 3.2rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
  background: #fff;
  border-radius: 8px;
`;

const PopUpContent = styled.div`
  overflow: hidden;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  max-height: calc(100vh - 34rem);
  box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  margin-top: 1.6rem;
  position: absolute;
  right: 2.4rem;
  bottom: 2.4rem;
  background: #0abf53;
  color: white;
  border: 0;
  padding: 1.6rem;
  border-radius: 8px;
  font-size: 1.6rem;
  cursor: pointer;
  transition: all ease-in-out 0.2s 0.1s;

  &:hover {
    background: #078f3e;
    box-shadow: 0 0 0 0.2rem rgb(10 191 83 / 50%);
  }
`;
