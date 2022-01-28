import Todos from './Todos';
import { FiTrash } from 'react-icons/fi'

const DUMMY_DATA = [
    {
        text: "Eat Lunch",
        complete: false
    },
    {
        text: "Eat breakfast",
        complete: true
    },
    {
        text: "Eat dinner",
        complete: false
    },
    {
        text: "Eat Again",
        complete: true
    },
]

export default function TodoList({ showingComplete }) {
    return <div className='w-2/5 mx-auto'>
        {DUMMY_DATA.map((todo) => {
            return <Todos showingComplete={showingComplete} text={todo.text} complete={todo.complete} />
        })}
        {
            showingComplete && <button className='flex items-center ml-auto bg-red-600 text-white font-medium rounded-md p-3 hover:bg-red-500'><FiTrash className='mr-1' stroke-width='2' />delete all</button>
        }
    </div>
}
