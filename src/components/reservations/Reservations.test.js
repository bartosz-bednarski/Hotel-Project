import "@testing-library/jest-dom";
import Reservations from "./Reservations";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store/index";
import Schema from "./Schema";
jest.mock("next/router", () => require("next-router-mock"));
describe("Reservations page", () => {
  test("calendar button onclick opens calendar", async () => {
    render(
      <Provider store={store}>
        <Reservations onReservations={jest.fn()} />
      </Provider>
    );
    const button = screen.getByRole("button-open-calendar");
    fireEvent.click(button);
    const result = await screen.findByRole("button-calendar");
    expect(result).toBeInTheDocument();
  });
  //   test("display room description when room button from schema is clicked.", async () => {
  //     render(
  //       <Provider store={store}>
  //         <Reservations onReservations={jest.fn()}>
  //           <Schema />
  //         </Reservations>
  //       </Provider>
  //     );
  //     const button = screen.getByRole("button-room-14");

  //     fireEvent.click(button);

  //     const result = await screen.findByText("Sapphire");

  //     expect(result).toBeInTheDocument();
  //   });
});
