import React, { useState } from 'react';
import { FiTrash } from 'react-icons/fi'

export default function TodoList({ showingComplete }) {
    const [checked, setChecked] = useState(false);

    return <div className='flex items-center w-2/5 mx-auto my-4 font-bold justify-between'>
        <input type="checkbox" className='w-4 h-4 mr-3' onClick={() => setChecked(!checked)} />
        {
            !checked ? <p className='mr-auto'>Lorem ipsum et something</p> : <s className='mr-auto'>Lorem ipsum et something</s>
        }
        {
            showingComplete && <button className='opacity-25 hover:opacity-75'><FiTrash /></button>
        }
        {
            showingComplete && <button className='flex items-center'><FiTrash />delete all</button>
        }
    </div>
}
