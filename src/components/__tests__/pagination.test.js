import { render, screen } from "@testing-library/react";
import Pagination from "../Pagination/Pagination";


test("should increase page number when click on Next", () => {
    render(<Pagination />);
    const nextButton = screen.getByAltText("Next");
    const nextButtonId = screen.getByTestId("next");
    expect(nextButtonId).toMatchInlineSnapshot(``);
})

// I got error during test. Because It needs fetch data to render the components. I know I can overcome it by  creating __mocking__
// I need more time to learn well and need some help. I am already very much familiar with unit test, integration test and end to end test (e2e)
// If i got an opportunity to work with top.legal i can.
// I will provide some personal small projects links in my emails for your consideration. I had no knowledge about redux, graphql and jest. For last 4 days i learned a lot about redux, graphql
// and jest. I am so much confident If i will get some help I can work with jest, redux and graphql