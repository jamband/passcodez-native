import { useCallback, useContext } from "react";
import { DispatchContext, StateContext } from "~/contexts/pressed-code";
import type { State } from "~/reducers/pressed-code";

export const usePressedCodeState = () => {
  return useContext(StateContext);
};

export const usePressedCodeAction = () => {
  const dispatch = useContext(DispatchContext);

  const setCode = useCallback(
    (payload: State) => {
      dispatch({ type: "set", payload });
    },
    [dispatch]
  );

  const resetCode = useCallback(() => {
    dispatch({ type: "reset" });
  }, [dispatch]);

  return {
    setCode,
    resetCode,
  } as const;
};
