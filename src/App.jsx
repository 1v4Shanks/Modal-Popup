import React from "react";
import { useState } from "react";
import Modal from "./Modal";
import "./App.css";

export default function App() {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handlePopup() {
    setShowModalPopup(!showModalPopup);
  }
  return (~
    <div className="container">
      <h1>Popup Modal</h1>
      <button className="btn1" onClick={handlePopup}>
        Get the eBook
      </button>
      {showModalPopup && <Modal close={handlePopup} />}
    </div>
  );
}
