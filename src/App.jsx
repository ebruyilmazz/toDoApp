import TodoCreate from './components/TodoCreate'
import './App.css'
import TodoList from './components/TodoList'
import { useState } from 'react'

function App() {


  const [todos, setTodos] =useState([])

  const createTodo = (newTodo) =>{
    setTodos([...todos, newTodo])

    /*
    {id: 123123, content:'dkfdkjfkdjk'}
    eski dizim+ yeni eklediğim
    */
  }

  const removeTodo = (todoId) =>{
    
    setTodos([...todos.filter((todo)=> todo.id !== todoId)])
  }

  const updateTodo = (newTodo) =>{
    const updatedTodos = todos.map((todo) => {
      if(todo.id !== newTodo.id){
        return todo
      }
      return newTodo
    })
    setTodos([...updatedTodos])
  }

  console.log(todos)

  return (
    <div className='App'>
      <div style={{
        display:'flex', 
        flexDirection:'column', 
        alignItems:"center", 
        justifyContent:"center"
        }}>

        <TodoCreate onCreateTodo ={createTodo}/>

        <TodoList onRemoveTodo ={removeTodo} todos={todos} onUpdateTodo ={updateTodo}/>
      </div> 
    </div>
  )
}

export default App
