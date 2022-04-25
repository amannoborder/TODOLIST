import React,{useState} from 'react';
import Heading from './components/Heading';

const TestTodo = () => {
    const [input,setInput]=useState();
    const [item,setItem]=useState([]);

    const itemEvent=(e)=>{
        setInput(e.target.value);
    }
    const addTodo=()=>{
        setItem((olditems)=>{
            return[...olditems,input];
        });
        setInput('');
    };
    const removeTodo=(id)=>{
        setItem((olditems)=>{
            return olditems.filter((arrElem,index)=>{
                return index !== id;
            })
        })
    }

  return (
    <>
    <Heading></Heading>
    <input type="text" placeholder='add todo' value={input} onChange={itemEvent} />
    <button type="submit"><i className="fas fa-plus add-btn" onClick={addTodo}></i></button>
    <ol>
        {item.map((itemval)=>{
            return <li>{itemval}</li>;
            
        })}
        
    </ol>
    </>
  )
}

export default TestTodo;