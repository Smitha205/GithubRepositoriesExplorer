import { render, screen, cleanup } from "@testing-library/react";
import UserRepoDetails from "../UserRepoDetails";

afterEach(() => {
  cleanup();
});

test("should render UserRepoDetails component", () => {
  render(<UserRepoDetails repoUserInfo={"Test string"} />);
  const userRepoElement = screen.getByTestId("user-repo-accordion");
  expect(userRepoElement).toBeInTheDocument();
});
