import React from "react";
import { NumPad } from "./NumPad";
import {
  clearInput,
  addCharacterAtEnd,
} from "../../actionCreators/actionCreators";

import { useDispatch } from "react-redux";

export const NumPadContainer = ({ className }) => {
  const dispatch = useDispatch();

  const onAddCharacter = (value) => () => {
    dispatch(addCharacterAtEnd(value));
  };

  const onClearInput = () => dispatch(clearInput());

  return (
    <NumPad
      className={className}
      onClearInput={onClearInput}
      onAddCharacter={onAddCharacter}
    />
  );
};
