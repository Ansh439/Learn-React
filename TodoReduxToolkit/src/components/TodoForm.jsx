import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/todoSlice';


function TodoForm() {
  const [input,setInput] = useState('');
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput('');
  }

  return (
    <form onSubmit={addTodoHandler} className="flex w-full items-cente m-auto space-x-2 md:w-1/3 mb-7">
      <input
        className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        type="text"
        placeholder="Write Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button
        type="submit"
        className="rounded-md bg-black px-3 py-2 text-sm w-32 font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"

      >
        Add-Todo
      </button>
    </form>
  )
}

export default TodoForm