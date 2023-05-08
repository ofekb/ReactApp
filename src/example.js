// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// export default function Box() {
//   const [names, setNames] = useState(["Nitay"]);

//   const addName = () => {
//     const newName = document.getElementById("newname").value;
//     setNames([...names, newName]);
//   };

//   const deleteName = () => {
//     const nameToDelete = document.getElementById("deleteName").value;
//     if (ifExist(nameToDelete)) {
//       const updatedNames = names.filter((person) => person !== nameToDelete);
//       setNames(updatedNames);
//       alert(`${nameToDelete} removed!`);
//     } else {
//       alert(`${nameToDelete} not found!`);
//     }
//   };

//   const ifExist = (nameToCheck) => {
//     for (let i = 0; i < names.length; i++) {
//       if (names[i] === nameToCheck) {
//         return true;
//       }
//     }
//     return false;
//   };

//   return (
//     <div className="container">
//       <h6>Name your friend:</h6>
//       <input id="newname" type="text" name="newName" />
//       <button type="button" className="btn btn-info m-1" onClick={addName}>
//         Add name
//       </button>
//       <br /> <br />
//       <h6>Name your friend you want to delete:</h6>
//       <input id="deleteName" type="text" name="deleteName" />
//       <button type="button" className="btn btn-danger m-1" onClick={deleteName}>
//         Delete name
//       </button>
//       <h4>Names: {names.join(", ")}</h4>
//           
//     </div>
//   );
// }



// ==============================================================================================================================

import React, { useState } from "react";
import { Button, Form, Input, Typography } from "antd";
import "./App.css";

const { Title } = Typography;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function App() {
  const formRef = React.useRef(null);
  const [inputValue, setInputValue] = useState([]);
  const [valueArray, setValueArray] = useState([]);

  const handleAddValue = () => {
    setValueArray([...valueArray, inputValue]);
    // setInputValue("");
  };

  const onFinish = (values) => {
    console.log(values);
    onReset();
  };
  const onReset = () => {
    formRef.current?.resetFields();
  };

  return (
    <>
      <Form
        {...layout}
        ref={formRef}
        name="control-ref"
        onFinish={onFinish}
        onSubmit={handleAddValue}
        style={{
          maxWidth: 600,
        }}
      >
        <Title level={3} style={{ marginLeft: 200, marginTop: 50 }}>
          Please enter a name
        </Title>

        <Form.Item
          name="name"
          style={{ marginLeft: 200 }}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            allowClear
            id="newValue"
            name="newValue"
            type="text"
            placeholder="Please enter a name"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" onClick={handleAddValue}>
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset} style={{ marginLeft: 7 }}>
            Reset
          </Button>
        </Form.Item>
      </Form>
      <div className="stack">
        {valueArray.map((value, index) => (
          <h3 key={index} style={{ marginLeft: 200 }}>
            {value}
          </h3>
        ))}
      </div>
    </>
  );
}
export default App;


// ==============================================================================================================================


// import React from "react";
// import "./App.css";

// function App() {
//   const [addProduct, setAddProduct] = React.useState([]);

//   function handleAddProduct(event) {
//     event.preventDefault();
//     const newProduct = event.target.item.value;
    // if (newProduct.length === 0) {
    //   alert("This is a required field");
    // } else {
    //   setAddProduct([newProduct, ...addProduct]);
    //   event.target.item.value = "";
    // }
//   }

//   function handleDeleteProduct(index) {
//     setAddProduct(addProduct.filter((_, i) => i !== index));
//   }

//   return (
//     <div className="all">
//       <h1>Products List</h1>
//       <form onSubmit={handleAddProduct}>
//         <input type="text" name="item" placeholder="Please add a new Product" />
//         <br />
//         <button className="addButton" type="submit">
//           Add Product
//         </button>
//       </form>
//       <div className="stack">
//         {addProduct
//           .slice(0)
//           .reverse()
//           .map((item, index) => (
//             <div key={index} className="stack-item">
//               <div>
//                 {item}
//                 <button
//                   className="deleteButton"
//                   onClick={() => handleDeleteProduct(index)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// }
// export default App;