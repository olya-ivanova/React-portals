import React from "react";
import { createPortal } from "react-dom";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#ffffff",
  padding: "4rem",
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  backgroundColor: "rgb(0,0,0,0.7)",
  zIndex: 1000,
};

const Modals = ({ children, open, close }) => {
  if (!open) return null;

  return createPortal(
    <>
      <div style={OVERLAY_STYLES}></div>
      <div style={MODAL_STYLES}>
        <button style={{ marginBottom: "1rem" }} onClick={close}>
          Close Modal
        </button>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modals;
