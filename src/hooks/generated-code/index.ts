import { useCallback, useContext } from "react";
import { DispatchContext, StateContext } from "~/contexts/generated-code";
import type { State } from "~/reducers/generated-code";

export const useGeneratedCodeState = () => {
  return useContext(StateContext);
};

export const useGeneratedCodeAction = () => {
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
