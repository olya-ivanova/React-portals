import { useState } from "react";
import Modals from "./modals/Modals";

function App() {
  const [open, setOpen] = useState();

  const handleClose = () => {
    setOpen(false);
  };

  const MODAL_CONTAINER_STYLE = {
    position: "relative",
    zIndex: 1,
    margin: "1rem",
  };

  const CONTENT_STYLE = {
    position: "relative",
    zIndex: 2,
    backgroundColor: "blue",
    width: "20rem",
    fontSize: "1rem",
    color: "#ffffff",
    margin: "1rem",
  };

  return (
    <div>
      <div style={CONTENT_STYLE}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </div>
      <div style={MODAL_CONTAINER_STYLE}>
        <button onClick={() => setOpen(true)}>Open Modal</button>
        <Modals open={open} close={handleClose}>
          <div>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
          </div>
        </Modals>
      </div>
    </div>
  );
}

export default App;
