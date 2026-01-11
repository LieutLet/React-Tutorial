//import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button
        children="Click me!"
        color="secondary"
        onClick={() => console.log("Clicked!")}
      />
    </div>
  );
}

export default App;
