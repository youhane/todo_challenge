import React, { useState } from 'react';

export default function TodoList() {
    const [checked, setChecked] = useState(false);

    return <div className='flex items-center w-2/5 mx-auto my-4 font-bold'>
        <input type="checkbox" className='w-4 h-4 mr-3' onClick={() => setChecked(!checked)} />
        {
            !checked ? <p>Lorem ipsum et something</p> : <s>Lorem ipsum et something</s>
        }

    </div>
}
