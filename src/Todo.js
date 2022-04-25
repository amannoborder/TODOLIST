import React, { useState } from 'react';
import Heading from "./components/Heading";
import "./Todo.css"

const Todo = () => {
  const [inputdata, setInputData] = useState("");
  const [item, setItem] = useState([]);




  const addTodo = () => {
    var temp = inputdata;
    temp.push(inputdata);
    console.log(setInputData);

  };

  const removeTodo = (id) => {
    const temp = [...item]
    temp.splice(id, 1);
    return setItem(temp)
  };

  return (
    <>
      <div className='main-div'>
        <Heading></Heading>
        <div>
          <input
            type="text"
            placeholder="Enter todo"
            value={inputdata}
            onChange={(e) => setInputData(e.target.value)}
          />
          <button type="submit"><i className="fas fa-plus add-btn" onClick={addTodo}></i></button>
          <div style={{ color: "white" }}>
            {
              item.map((elem, index) => {
                return (
                  <div className="eachitem" style={{ backgroundColor: 'black', color: "white" }} key={index}>
                    <h3>{elem}</h3>
                    <i className="far fa-trash-alt add-btn" onClick={() => removeTodo(index)}></i>
                  </div>
                )

              })
            }


            </div>
        </div>
      </div>
    </>
  )
}

export default Todo;
