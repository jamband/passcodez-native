import { act, renderHook } from "@testing-library/react-native";
import { usePressedCode } from ".";

test("initialState", async () => {
  const { result } = await renderHook(usePressedCode);
  expect(result.current.state).toBe("");
});

test("set", async () => {
  const { result } = await renderHook(usePressedCode);
  expect(result.current.state).toBe("");

  await act(() => result.current.set("1"));
  expect(result.current.state).toBe("1");

  await act(() => result.current.set("2"));
  expect(result.current.state).toBe("12");

  await act(() => result.current.set("3"));
  expect(result.current.state).toBe("123");
});

test("reset", async () => {
  const { result } = await renderHook(usePressedCode);
  expect(result.current.state).toBe("");

  await act(() => result.current.set("123"));
  expect(result.current.state).toBe("123");

  await act(result.current.reset);
  expect(result.current.state).toBe("");
});
