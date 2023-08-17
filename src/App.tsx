import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  return (
    <div>
      <ListGroup
        heading="cities"
        items={items}
        onSelectItem={(item) => console.log(item)}
      />
      <Button onClick={() => console.log("hkbhjsdbkfjba")} color="primary">
        click here
      </Button>
    </div>
  );
}

export default App;
