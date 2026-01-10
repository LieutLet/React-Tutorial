import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "London", "Paris"];
  let headingName = "Cities";

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading={headingName}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
