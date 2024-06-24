import { useState } from "react";
import "./Item.css";
function Item(props) {
  let [title, setTitle] = useState(props.title);
  function clickHandler() {
    setTitle("popcon");
  }
  return (
    <div className="">
      <div className="itemName">{title}</div>
      <button className="itemButton" onClick={clickHandler}>
        Click Hear
      </button>
    </div>
  );
}
export default Item;
