import { useState } from "react";
import "./ProductForm.css";
function ProductForm() {
  // to handle ui using useState created object of more then values
  const [fullProductInput, setFullProductInput] = useState({
    title: "",
    date: "",
  });

  // const [title, setTitle] = useState("");
  // const [date, setDate] = useState("");

  // function titleChangeHandler(event) {
  //   setTitle(event.target.value);
  // }
  // function dateChangeHandler(event) {
  //   setDate(event.target.value);
  //   // console.log("working")
  // }
  return (
    <form className="productform">
      <div className="productname">
        <label>Title Name</label>
        <input type="text" onChange={titleChangeHandler}></input>
      </div>
      <div className="productdate">
        <label> Date</label>
        <input
          type="date"
          onChange={dateChangeHandler}
          min="2023-01-01"
          max="2024-01-01"
        ></input>
      </div>
      <div>
        <button className="productbutton" type="submit">
          Add Product
        </button>
      </div>
    </form>
  );
}
export default ProductForm;
