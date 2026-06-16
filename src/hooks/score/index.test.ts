import { act, renderHook } from "@testing-library/react-native";
import { useScore } from ".";

test("initialState", async () => {
  const { result } = await renderHook(useScore);
  expect(result.current.state).toBe(0);
});

test("increase", async () => {
  const { result } = await renderHook(useScore);
  expect(result.current.state).toBe(0);

  await act(result.current.increase);
  expect(result.current.state).toBe(1);

  await act(result.current.increase);
  expect(result.current.state).toBe(2);
});

test("reset", async () => {
  const { result } = await renderHook(useScore);
  expect(result.current.state).toBe(0);

  await act(result.current.increase);
  await act(result.current.increase);
  expect(result.current.state).toBe(2);

  await act(result.current.reset);
  expect(result.current.state).toBe(0);
});
