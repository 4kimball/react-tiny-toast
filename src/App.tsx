import React from "react";
import { ToastContainer, Toast } from "./components";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Toast type={"success"} content={"toast!!!"} position={"top-center"} />
      <h1>hello world</h1>
    </>
  );
};

export default App;
