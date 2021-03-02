import React, { Fragment } from "react";
import styled from "styled-components";
import { AddButton } from "../AddButton";

export const OutputCurrencies = ({
  selectedOutputCurrencies,
  onOpenCurrencyOutputSelector,
}) => (
  <>
    <CurrencyListContainer>
      <CurrencyList>
        {selectedOutputCurrencies.length &&
          selectedOutputCurrencies.map((currency) => {
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
  padding: 0 1.2rem 2rem;
  width: 100vw;
  overflow: hidden;
  overflow-x: auto;
  height: 14rem;
`;

const CurrencyList = styled.ul`
  margin: 0;
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
  bottom: 1.6rem;
  cursor: pointer;

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
