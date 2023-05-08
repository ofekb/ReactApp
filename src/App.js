import React, { useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import "./App.css";

function App() {
  const [addProduct, setAddProduct] = useState([]);

  function handleAddProduct(event) {
    event.preventDefault();
    const newProduct = event.target.item.value;
    if (newProduct) {
      setAddProduct([newProduct, ...addProduct]); // Places the values inside the useState variable.
      event.target.item.value = ""; // Allows you to add a different value each time.
    } else {
      alert("This is a required field");
    }
  }

  function handleDeleteProduct(index) {
    setAddProduct(addProduct.filter((_, i) => i !== index));
    console.log(index + 1);
    console.log(addProduct);
  }

  return (
    <>
      <h1 className="title">Products List</h1>
      <form onSubmit={handleAddProduct} className="form">
        <input
          className="input"
          type="text"
          name="item"
          placeholder="Please add a new Product"
        />
        <br />
        <button className="addButton" type="submit">
          <span type="text" className="text">
            Add Product
          </span>
        </button>
      </form>
      <div className="stack">
        {addProduct
          // .slice(0)
          .map((item, index) => (
            <div key={index} className="stack-item">
              <button
                className="deleteButton"
                onClick={() => handleDeleteProduct(index)}
              >
                <DeleteOutlined />
              </button>
              {item}
            </div>
          ))}
      </div>
    </>
  );
}
export default App;
