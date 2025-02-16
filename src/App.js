import { createRoot } from "react-dom/client";
import React from 'react';
import {ToastContainer} from "react-toastify";


import Home from "./views/home";



const root = createRoot(document.getElementById("root"));
root.render(

    <>
     <Home />
     <ToastContainer position="top-right" autoClose={3000} />
    </>
);

function App() {
  return (
    <div>
      <Home />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;