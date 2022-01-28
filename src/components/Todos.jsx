import { FiTrash } from 'react-icons/fi'

export default function Todos({ showingComplete, id, text, complete, completeTodo, removeTodo }) {
    return <div className='flex items-center my-5'>
        <input type="checkbox" className='w-4 h-4 mr-3' onClick={() => completeTodo(id)} checked={complete} />
        {complete ? <s className='mr-auto'>{text}</s> : <p className='mr-auto'>{text}</p>}

        {showingComplete && <button className='opacity-25 hover:opacity-75 ease-in-out duration-100' onClick={(() => removeTodo(id))}><FiTrash className='text-lg' /></button>}
    </div>
}
