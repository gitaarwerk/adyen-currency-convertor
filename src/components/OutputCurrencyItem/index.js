import React from "react";
import styled from "styled-components";
import { ExchangeRateIcon } from "../ExchangeRateIcon";

export const OutputCurrencyItem = ({
  className,
  currencyCode,
  currencyName,
  exchangeRate,
  calculatedValue,
}) => (
  <CurrencyItem className={className}>
    <CurrencyFlag src={`/assets/flags/${currencyCode}.svg`} />
    <CurrencyData>
      <CurrencyName>
        <small>{currencyName}</small>
      </CurrencyName>
      <Rate>
        <StyledExchangeRateIcon />
        <span>{exchangeRate || "no exvhange rate available"}</span>
      </Rate>
      <CurrencyCode>
        <strong>{currencyCode}</strong>
      </CurrencyCode>
      <CurrencyValue>{calculatedValue}</CurrencyValue>
    </CurrencyData>
  </CurrencyItem>
);

const CurrencyItem = styled.li`
  display: flex;
  flex-shrink: 0;
  margin: 0 4rem 0 0;
`;

const StyledExchangeRateIcon = styled(ExchangeRateIcon)`
  height: 2rem;
  fill: currentColor;
  margin-right: 0.4rem;
`;

const Rate = styled.small`
  color: #666;
  display: flex;
  align-items: center;
`;

const CurrencyFlag = styled.img`
  margin-right: 1rem;
  height: 2rem;
  margin-top: 5rem;
`;

const CurrencyData = styled.div``;

const CurrencyName = styled.div`
  color: #999;
`;

const CurrencyCode = styled.div`
  margin-top: 0.4rem;
`;

const CurrencyValue = styled.div`
  white-space: nowrap;
`;
