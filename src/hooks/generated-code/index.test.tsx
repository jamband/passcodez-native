import { act, renderHook } from "@testing-library/react-native";
import { GeneratedCodeProvider } from "~/contexts/generated-code";
import { useGeneratedCodeAction, useGeneratedCodeState } from ".";

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <GeneratedCodeProvider>{children}</GeneratedCodeProvider>
);

test("initial state", () => {
  const { result } = renderHook(useGeneratedCodeState, { wrapper });
  expect(result.current).toMatch(/^[\d]{4}$/);
});

test("setCode", () => {
  const { result } = renderHook(
    () => {
      const state = useGeneratedCodeState();
      const { setCode } = useGeneratedCodeAction();
      return { state, setCode };
    },
    { wrapper }
  );

  expect(result.current.state).toMatch(/^[\d]{4}$/);

  act(() => result.current.setCode("test"));
  expect(result.current.state).toBe("test");
});

test("resetCode", () => {
  const { result } = renderHook(
    () => {
      const state = useGeneratedCodeState();
      const { setCode, resetCode } = useGeneratedCodeAction();
      return { state, setCode, resetCode };
    },
    { wrapper }
  );

  act(() => result.current.setCode("test"));
  expect(result.current.state).toBe("test");

  act(result.current.resetCode);
  expect(result.current.state).toMatch(/^[\d]{4}$/);
});
