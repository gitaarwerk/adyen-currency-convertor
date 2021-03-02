import React from "react";
import styled from "styled-components";
import { CurrencyCodeSelector } from "../CurrencyCodeSelector";
import { Header } from "../Header";
import { CurrencyInputField } from "../CurrencyInputField";
import { OutputCurrencies } from "../OutputCurrencies";

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
}) => (
  <div>
    <TopSection>
      <Header />
      <CurrencyInputField />
      {isSelectedInputCurrencyPopUpOpen && (
        <CurrencyCodeSelector
          onCloseCurrencySelector={onCloseInputCurrencySelector}
          onSelectCurrency={onChangeOutputCurrencyCode}
          type="radio"
        />
      )}
    </TopSection>
    <MiddleSection>
      <OutputCurrencies />
      {isSelectedOutputCurrencyPopUpOpen && (
        <CurrencyCodeSelector
          onCloseCurrencySelector={onCloseOutputCurrencySelector}
          onSelectCurrency={onChangeOutputCurrencyCode}
          type="checkbox"
        />
      )}
    </MiddleSection>
  </div>
);

const TopSection = styled.div`
  padding: 3.2rem;
  background: #fff;
  box-shadow: 0px 2px 4px rgba(0, 17, 44, 0.3);
  position: relative; 
  z-index: 1;
`;

const MiddleSection = styled.div`
  background: #f3f6f9;
  padding: 32px;
  position: relative;
  z-index: 0;
`;
