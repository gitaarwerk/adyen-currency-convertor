import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getLatestExchangeRates, getIsLoading } from "../../selectors/selectors";
import { helloWorld } from "../../actionCreators/actionCreators";

export const AppShell = () => {
  const dispatch = useDispatch();
  const latestExchangeRates = useSelector(getLatestExchangeRates);
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    // If no exchange rates are available, call it
    if (!latestExchangeRates.length) {
      dispatch(helloWorld());
    }
  }, [dispatch, latestExchangeRates]);

  return (
    <div>
      {isLoading
        ? "Hello Adyen, I am still loading"
        : "Loaded..., now working on the rest..."}
    </div>
  );
};
