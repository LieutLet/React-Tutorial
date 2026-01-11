import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  const handleButtonClick = () => {
    setAlertVisibility(true);
  };

  const handleCloseClick = () => {
    setAlertVisibility(false);
  };

  return (
    <div>
      {alertVisible && <Alert onClose={handleCloseClick}>My Alert</Alert>}
      <Button
        children="Click me!"
        color="secondary"
        onClick={handleButtonClick}
      />
    </div>
  );
}

export default App;
