import styled from "styled-components";

export const Button = styled.button`
  display: block;
  height: 6rem;
  width: 10rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  transition: all 0.2s 0s;
  border-radius: 8px;
  background: transparent;
  color: rgba(255, 255, 255, 0.8);
  font-size: 4rem;
  cursor: pointer;
  margin: 1rem 1.5rem;
  flex-shrink: 0;
  flex-grow: 0;
  outline: 0;

  &:hover {
    border: 2px solid rgba(255, 255, 255, 0.9);
    color: rgba(255, 255, 255, 1);
  }
`;
