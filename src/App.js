import "./App.css";
import Item from "./components/Item";
import ProductForm from "./newcomponent/ProductForm";
function App() {
  let item = "namesss";
  return (
    <div className="App">
      <ProductForm></ProductForm>
      {/* <Item items={item}></Item>{" "} */}
    </div>
  );
}

export default App;
