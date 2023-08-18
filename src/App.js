import React,{useState} from "react";
import './App.css';
import TodoList from "./components/TodoList";
import TodoInput from './components/TodoInput';
function App() {
  const [listTodo , setListTodo] = useState([]);
  let addList =(inputText)=>{
    if(inputText !== ""){
    setListTodo([...listTodo , inputText]);
  }
}

const deleteListItem =(key) =>{
  let newListTodo = [...listTodo];
  newListTodo.splice(key , 1);
  setListTodo([...newListTodo])
}
  return (
    <div className="main-container">
       <div className="center-container">
        <TodoInput addList={addList}/>
        <h1 className="app-heading">TODOs :</h1>
        <hr />
        {listTodo && listTodo.map && listTodo.map((listItem,i)=>{
          return (
            <TodoList index={i} key={i} item={listItem} 
            deleteItem={deleteListItem}/>
          )
        })}
        {/* {listTodo && listTodo.map && listTodo.map((listItem ,i)=>{
          return (
            <TodoList key={i} item={listItem}/>
          )
        })} */}
       </div>
    </div>
  );
}

export default App;
