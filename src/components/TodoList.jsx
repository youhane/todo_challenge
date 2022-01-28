import Todos from './Todos';
import { FiTrash } from 'react-icons/fi'

export default function TodoList({ showingComplete, showActiveOnly, setTodos, todos }) {
    const completeTodo = (id) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.complete = !todo.complete
            } return todo
        })
        setTodos(updatedTodos)
    }

    return <div className='w-2/5 mx-auto'>
        {showActiveOnly}
        {showingComplete ? todos.map((todo) => {
            return todo.complete === true && <Todos
                showingComplete={showingComplete}
                text={todo.text}
                complete={todo.complete}
                key={todo.id}
                id={todo.id}
                completeTodo={completeTodo}
            />
        }) : showActiveOnly ? todos.map((todo) => {
            return todo.complete === false && <Todos
                showingComplete={showingComplete}
                text={todo.text}
                complete={todo.complete}
                key={todo.id}
                id={todo.id}
                completeTodo={completeTodo}
            />
        }) : todos.map((todo) => {
            return <Todos
                showingComplete={showingComplete}
                text={todo.text}
                complete={todo.complete}
                key={todo.id}
                id={todo.id}
                completeTodo={completeTodo}
            />
        })}
        {
            showingComplete && <button className='flex items-center ml-auto bg-red-600 text-white font-medium rounded-md p-3 hover:bg-red-500'><FiTrash className='mr-1' stroke-width='2' />delete all</button>
        }
    </div>
}
