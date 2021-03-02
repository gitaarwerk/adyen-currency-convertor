import React from "react";
import styled from "styled-components";

export const CurrencyInputField = ({
  onOpenInputCurrencySelector,
  selectedCurrencyCode,
  onChangeMonetaryInput,
  className,
  currentValue,
}) => (
  <InputContainer className={className}>
    <ButtonContainer>
      <Button type="button" onClick={onOpenInputCurrencySelector}>
        {selectedCurrencyCode}
      </Button>
    </ButtonContainer>
    <InputFieldContainer>
      <MonetaryInput
        type="text"
        pattern="[^0-9.,-]"
        onChange={onChangeMonetaryInput}
        placeholder={"47,95"}
        value={currentValue}
      />
    </InputFieldContainer>
  </InputContainer>
);

const Button = styled.button`
  font-size: 2.4rem;
  color: #0abf53;
  border: none;
  background: none;
  padding: 0.4rem;
`;

const InputContainer = styled.div`
  border: 2px solid #0abf53;
  border-radius: 8px;
  display: flex;
`;

const MonetaryInput = styled.input`
  font-size: 1.6rem;
  padding: 0;
  width: 100%;
  border: none;
  display: block;
  font-size: 2.4rem;
  padding: 0.4rem 1rem;
  
  &::placeholder {
    color: #BBB;
  }
`;

const ButtonContainer = styled.div`
  border-right: 2px solid #0abf53;
  padding: 1.6rem;
`;

const InputFieldContainer = styled.div`
  padding: 1.6rem;
  flex-grow: 1;
`;
