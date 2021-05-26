import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    blue1: "#EFF2FC",
    blue2: "#BAC3E5",
    blue3: "#5F6EA6",
    blue4: "#37447E",
    yellow1: "#FFC93C",
  },
  typography: {
    fontFamily: ["PT Sans"].join(","),
  },
  overrides: {
    MuiTypography: {
      h1: {
        fontSize: "48pt",
        color: "#091133",
      },
      h2: {
        fontSize: "36pt",
        color: "#091133",
      },
      body1: {
        fontSize: "16pt",
        color: "#222F65",
      },
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
