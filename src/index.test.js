import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Album from "./Album";
import { store } from "./AppStore/store";

jest.mock("react-dom", () => ({ render: jest.fn() }));

describe("Application root", () => {
  it("should render without crashing", () => {
    const div = document.createElement("div");
    div.id = "root";
    document.body.appendChild(div);
    require("./index.js");
    expect(ReactDOM.render).toHaveBeenCalledWith(
      <Provider store={store}>
        <Album />
      </Provider>,
      div
    );
  });
});
