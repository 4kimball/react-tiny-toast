import React from "react";
import { ToastProvider } from "./components/ToastProvider";
import { toast } from "./core/toast";
const App = () => {
  const handleClick = () => {
    toast("toast!!!", {
      type: "error",
      position: "top-right",
      duration: 5000,
    });
  };
  return (
    <>
      <ToastProvider />
      <h1>hello world</h1>
      <button onClick={handleClick}>click me</button>
    </>
  );
};

export default App;
