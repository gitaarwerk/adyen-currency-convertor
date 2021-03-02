import React, { Fragment } from "react";
import styled from "styled-components";
import { AddButton } from "../AddButton";
import { OutputCurrencyItem } from "../OutputCurrencyItem";
export const OutputCurrencies = ({
  selectedOutputCurrencies,
  onOpenCurrencyOutputSelector,
  changeInputCurrencyOnClick,
}) => (
  <>
    <CurrencyListContainer>
      <CurrencyList>
        {!!selectedOutputCurrencies.length ? (
          selectedOutputCurrencies.map((currency) => {
            return (
              <OutputCurrencyItem
                key={currency.currencyCode}
                currencyCode={currency.currencyCode}
                currencyName={currency.name}
                calculatedValue={currency.value}
                exchangeRate={currency.rate}
                onClick={changeInputCurrencyOnClick(currency.currencyCode)}
              />
            );
          })
        ) : (
          <strong>
            No currencies selector for conversion, please select some.
          </strong>
        )}
      </CurrencyList>
    </CurrencyListContainer>
    <AddRemoveCurrencyButton onClick={onOpenCurrencyOutputSelector}>
      {selectedOutputCurrencies.length > 1
        ? "Add or remove currencies"
        : "Add currency"}
      <StyledAddButton />
    </AddRemoveCurrencyButton>
  </>
);

const CurrencyListContainer = styled.div`
  margin: 0;
  padding: 4rem;
  width: 100vw;
  overflow: hidden;
  overflow-x: auto;
  height: 14rem;
`;

const CurrencyList = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
`;

const AddRemoveCurrencyButton = styled.button`
  background: none;
  color: #0066ff;
  border: none;
  display: flex;
  padding: 0.4rem;
  position: absolute;
  right: 1.6rem;
  cursor: pointer;
  margin-top: 2rem;

  &:hover {
    text-decoration: underline;
  }

  &:active {
    outline: 0;
    border: 0;
  }
`;

const StyledAddButton = styled(AddButton)`
  margin-left: 0.4rem;
`;
// onOpenOutputCurrencySelector
