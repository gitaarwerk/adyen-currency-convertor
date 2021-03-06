import React from "react";
import styled from "styled-components";
import { CurrencyCodeSelector } from "../CurrencyCodeSelector";
import { Header } from "../Header";
import { CurrencyInputField } from "../CurrencyInputField";
import { OutputCurrencies } from "../OutputCurrencies";
import { NumPad } from "../NumPad";

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
  selectedOutputCurrencyCodes,
  selectedCurrencyCode,
}) => (
  <div>
    <Section>
      <TopSection>
        <Header />
        <StyledCurrencyInputField />
      </TopSection>
      <MiddleSection>
        <OutputCurrencies />
      </MiddleSection>
      {isSelectedInputCurrencyPopUpOpen && (
        <CurrencyCodeSelector
          onCloseCurrencySelector={onCloseInputCurrencySelector}
          onSelectCurrency={onChangeInputCurrencyCode}
          type="radio"
          selectedCurrencyCodes={[selectedCurrencyCode]}
        />
      )}
      {isSelectedOutputCurrencyPopUpOpen && (
        <CurrencyCodeSelector
          onCloseCurrencySelector={onCloseOutputCurrencySelector}
          onSelectCurrency={onChangeOutputCurrencyCode}
          type="checkbox"
          selectedCurrencyCodes={selectedOutputCurrencyCodes}
        />
      )}
    </Section>
    <Section>
      <NumPad />
    </Section>
  </div>
);

const StyledCurrencyInputField = styled(CurrencyInputField)`
  max-width: 60%;
  min-width: 30rem;
  margin: 3.6rem auto 2.4rem;
`;

const TopSection = styled.div`
  padding: 3.2rem;
  background: #fff;
  box-shadow: 0px 2px 4px rgba(0, 17, 44, 0.3);
  position: relative;
  z-index: 1;
  
`;

const MiddleSection = styled.div`
  background: #f3f6f9;
  padding: 0;
  position: relative;
  z-index: 0;
`;

const Section = styled.div`
  height: 50vh;
  width: 100%;
  position: relative;
  background: #f3f6f9;
`;
