import { act, renderHook } from "@testing-library/react-native";
import { PressedCodeProvider } from "~/contexts/pressed-code";
import { usePressedCodeAction, usePressedCodeState } from ".";

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <PressedCodeProvider>{children}</PressedCodeProvider>
);

test("initial state", () => {
  const { result } = renderHook(usePressedCodeState, { wrapper });
  expect(result.current).toBe("0000");
});

test("setCode", () => {
  const { result } = renderHook(
    () => {
      const state = usePressedCodeState();
      const { setCode } = usePressedCodeAction();
      return { state, setCode };
    },
    { wrapper }
  );

  expect(result.current.state).toBe("0000");

  act(() => result.current.setCode("0123"));
  expect(result.current.state).toBe("0123");
});

test("resetCode", () => {
  const { result } = renderHook(
    () => {
      const state = usePressedCodeState();
      const { setCode, resetCode } = usePressedCodeAction();
      return { state, setCode, resetCode };
    },
    { wrapper }
  );

  act(() => result.current.setCode("0123"));
  expect(result.current.state).toBe("0123");

  act(result.current.resetCode);
  expect(result.current.state).toBe("0000");
});
