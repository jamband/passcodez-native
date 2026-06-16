import { act, renderHook } from "@testing-library/react-native";
import { useStep } from ".";

test("initialState", async () => {
  const { result } = await renderHook(useStep);
  expect(result.current.state).toBe("first");
});

test("set", async () => {
  const { result } = await renderHook(useStep);
  expect(result.current.state).toBe("first");

  await act(() => result.current.set("try"));
  expect(result.current.state).toBe("try");

  await act(() => result.current.set("finish"));
  expect(result.current.state).toBe("finish");

  await act(() => result.current.set("first"));
  expect(result.current.state).toBe("first");
});
