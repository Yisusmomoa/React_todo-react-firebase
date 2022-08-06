import { collection, onSnapshot, query, QuerySnapshot } from "firebase/firestore";
import  React, {useState, useEffect} from "react";
import {AiOutlinePlus} from 'react-icons/ai'
import Todo from "./components/todo/Todo";

import { db } from "./firebase";

const style={
  bg:`h-screen w-screen   p-4 bg-gradient-to-r from-[#2f80ED] to-[#1CB5E0]`,
  container:`bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading:`text-3xl font-bold text-center text-gray-800 p-2`,
  form:`flex justify-between`,
  input:`border p-2 w-full text-xl`,
  button:`border p-4 ml-2 bg-purple-500 text-slate-100`,
  count:`text-center p-2`
}

function App() {
  const [todos, setTodos]=useState([]);



  // Create Todo
  // Read Todo from firebase
  useEffect(()=>{
    const q=query(collection(db, 'todos'))
    const unsubscribe=onSnapshot(q, (querySnapshot)=>{
      let todosArr=[];
      querySnapshot.forEach((doc)=>{
        todosArr.push({...doc.data(), id:doc.id});
      });
      setTodos(todosArr);
    })
    return ()=> unsubscribe();
  }, [])
  // Update Todo in firebase
  // Delete todo in firebase

  // Minuto 41
  return (
    <div className={style.bg}>
      <div className={style.container}> 

        <h3 className={style.heading}>Todo app</h3>

        <form className={style.form}>
          <input className={style.input} type='text' placeholder='Add todo' />
          <button className={style.button}>{<AiOutlinePlus />}</button>
        </form>

        <ul>
          {
            todos.map((todo)=>(
              <Todo key={todo.id} todo={todo}></Todo>
            ))
          }
          
        </ul>
        <p className={style.count}>You have {todos.length} todos</p>
      </div>
    </div>
  );
}

export default App;
