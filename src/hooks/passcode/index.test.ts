import { act, renderHook } from "@testing-library/react-native";
import { usePasscode } from ".";

test("initialState", async () => {
  const { result } = await renderHook(usePasscode);
  expect(result.current.state).toMatch(/^[\d]{4}$/);
});

test("reset", async () => {
  const { result } = await renderHook(usePasscode);
  expect(result.current.state).toMatch(/^[\d]{4}$/);

  await act(result.current.reset);
  expect(result.current.state).toMatch(/^[\d]{4}$/);
});
