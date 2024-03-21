import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { remTodo } from '../features/todo/todoSlice'

function TodoDiv() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
  return (
    <ul className='list-none'>
        {
            todos.map((todo) => (
                <li className=' bg-slate-400 w-2/3 m-auto ' key={todo.id}>
                <div className={`flex border border-black/10 rounded-lg px-7 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black mb-1 w-full justify-between `} >
                    <div>{todo.text}</div>
                    <button
                        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"

                        onClick={() =>  dispatch(remTodo(todo.id))}
                    >
                        Del
                    </button>
                </div>
                </li>
            ))
        }
    </ul>
  )
}

export default TodoDiv