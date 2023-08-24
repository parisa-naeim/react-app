import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  return (
    <div>
      <ListGroup
        heading="cities"
        items={items}
        onSelectItem={(item) => console.log(item)}
      />
      <Button onClick={() => setAlertVisibility(true)} color="primary">
        click here
      </Button>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Alert here</Alert>
      )}
    </div>
  );
}

export default App;
