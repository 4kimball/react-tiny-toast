import React from "react";
import { ToastContainer, Toast } from "./components";

const App = () => {
  return (
    <>
      <ToastContainer position={"top-right"}>
        <Toast type={"warn"} content={"toast!!!"} position={"top-center"} />
      </ToastContainer>

      <h1>hello world</h1>
    </>
  );
};

export default App;
