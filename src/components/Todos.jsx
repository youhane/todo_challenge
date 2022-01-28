import { FiTrash } from 'react-icons/fi'

export default function Todos({ showingComplete, text, complete }) {
    return <div className='flex items-center my-5'>
        <input type="checkbox" className='w-4 h-4 mr-3' />
        {complete ? <s className='mr-auto'>{text}</s> : <p className='mr-auto'>{text}</p>}
        {showingComplete && <button className='opacity-25 hover:opacity-75'><FiTrash className='text-lg' /></button>}
    </div>;
}
