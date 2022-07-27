import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import SearchPage from "../SearchPage";

afterEach(() => {
  cleanup();
});

test("should render SearchPage component", () => {
  render(<SearchPage />);
  const searchFormElement = screen.getByTestId('search-form-testid');
  expect(searchFormElement).toBeInTheDocument();
  const searchButtonElement = screen.getByTestId('search-button-testid');
  expect(searchButtonElement).toBeInTheDocument();
  const handleSubmit = jest.fn(() => {
    console.log('testing handleSubmit');
  });
  const testBlock = render(
    <button
            data-testid="btn"
            className='btn'
            onClick={handleSubmit}
        >
           Some text
        </button>
  );
  // searchFormElement.props().handleSubmit();
  const testButton = screen.getByTestId('btn')
  fireEvent.click(testButton);
  // expect(handleSubmit.mock.calls.length).toBe(1);
});
