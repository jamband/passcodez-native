import { render, screen } from "@testing-library/react-native";
import { Title } from "./title";

test("", () => {
  render(<Title>foo</Title>);
  expect(screen.getByText("foo")).toBeTruthy();
});
