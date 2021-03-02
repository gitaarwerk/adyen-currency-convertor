import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

export const NumPad = ({ className, onClearInput, onAddCharacter }) => {
  return (
    <StyledNumPadContainer className={className}>
      <NumPadContainer>
        <Button type="button" onClick={onAddCharacter("1")}>
          1
        </Button>
        <Button type="button" onClick={onAddCharacter("2")}>
          2
        </Button>
        <Button type="button" onClick={onAddCharacter("3")}>
          3
        </Button>
      </NumPadContainer>
      <NumPadContainer>
        <Button type="button" onClick={onAddCharacter("4")}>
          4
        </Button>
        <Button type="button" onClick={onAddCharacter("5")}>
          5
        </Button>
        <Button type="button" onClick={onAddCharacter("6")}>
          6
        </Button>
      </NumPadContainer>
      <NumPadContainer>
        <Button type="button" onClick={onAddCharacter("7")}>
          7
        </Button>
        <Button type="button" onClick={onAddCharacter("8")}>
          8
        </Button>
        <Button type="button" onClick={onAddCharacter("9")}>
          9
        </Button>
      </NumPadContainer>
      <NumPadContainer>
        <StyledButton type="button" onClick={onClearInput}>
          clear
        </StyledButton>
        <Button type="button" onClick={onAddCharacter("0")}>
          0
        </Button>
        <Button type="button" onClick={onAddCharacter(",")}>
          ,
        </Button>
      </NumPadContainer>
    </StyledNumPadContainer>
  );
};

const StyledNumPadContainer = styled.div`
  background: #00112c;
  color: #fff;
  padding: 3.2rem 10vw;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  text-align: center;
`;

const StyledButton = styled(Button)`
  border-color: transparent;
  font-size: 3rem;

  &:hover {
    border-color: transparent;
  }
`;

const NumPadContainer = styled.div`
  margin: 0 auto;
  display: inline-flex;
`;
