import { render } from "react-dom";
import React from "react";
import Amplify from "aws-amplify";
import config from "./aws-exports";
import App from "./App";

Amplify.configure(config);

render(<App />, document.getElementById("root"));
