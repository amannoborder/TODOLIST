import React, { useState } from "react";
import Heading from "./components/Heading"

const TestTodo = () => {
    const [inputdata, setInputData] = useState("");
    const [items, setItems] = useState([]);
    const [editItem, setEditItem] = useState("");
    const [update, setUpdate] = useState();

    const addItem = () => {
        if (!inputdata) {
            alert("plz fill the data");
        } else if (inputdata && update) {
            setItems(
                items.map((curElem) => {
                    if (curElem.id === editItem) {
                        return { ...curElem, name: inputdata };
                    }
                    return curElem;
                })
            );

        } else {
            const myNewInputData = {
                id: new Date().getTime().toString(),
                name: inputdata,
            };
            setItems([...items, myNewInputData]);
            setInputData("");
        }
    };
    const removeTodo = (index) => {
        const updatedItems = items.filter((curElem) => {
            return curElem.id !== index;
        });
        setItems(updatedItems);
    };
    const edit = (index) => {
        const editedItem = items.find((curElem) => {
            return curElem.id === index;
        });
        setInputData(editedItem.name);
        setEditItem(index);
        setUpdate(true);
    };

    const removeAll = () => {
        setItems([]);
    }



    const selected = () => {

    };
    return (
        <>
            <div className="main-div">
                <Heading></Heading>
                <div >
                    <input
                        type="text"
                        placeholder=" Add Item"
                        value={inputdata}
                        onChange={(e) => setInputData(e.target.value)}
                    />
                    <button type="submit"><i className="fas fa-plus" onClick={addItem}></i></button>
                    <div className="mytodo">
                        {items.map((curElem) => {
                            return (
                                <div key={curElem.id}>
                                    <h3>{curElem.name}</h3>
                                    <input type="checkbox" onClick={selected} />
                                    <i className="far fa-edit" onClick={() => edit(curElem.id)}></i>
                                    <i className="far fa-trash-alt" onClick={() => removeTodo(curElem.id)}></i>

                                </div>
                            )
                        })}
                        <button onClick={removeAll}>Remove all</button>

                    </div>
                </div>
            </div>

        </>
    );
};

export default TestTodo;

