import React from "react";
import ReactDOM from "react-dom/client";
import ClockList from "./ClockList";
import Test from "./Test";
import Form from "./Form";
import Calculator from "./LiftingState";
import TempConverter from "./TempConverter";

const root = document.getElementById("root");
const testRoot = document.getElementById("test-root");
const quantities = [1, 2, 3, 4];

// ReactDOM.createRoot(root).render(<ClockList quantity={quantities} />);
// ReactDOM.createRoot(testRoot).render(<Test />);

// ReactDOM.createRoot(root).render(<Form />);
// ReactDOM.createRoot(root).render(<Calculator />);
ReactDOM.createRoot(root).render(<TempConverter />);
