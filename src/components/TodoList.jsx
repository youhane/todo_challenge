import Todos from './Todos';
import { FiTrash } from 'react-icons/fi'

export default function TodoList({ showingComplete, todos }) {
    return <div className='w-2/5 mx-auto'>
        {todos.map((todo) => {
            return <Todos showingComplete={showingComplete} text={todo.text} complete={todo.complete} key={todo.id} />
        })}
        {
            showingComplete && <button className='flex items-center ml-auto bg-red-600 text-white font-medium rounded-md p-3 hover:bg-red-500'><FiTrash className='mr-1' stroke-width='2' />delete all</button>
        }
    </div>
}
