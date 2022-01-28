import React, { useState } from 'react';

export default function Header({ setshowingComplete }) {
    const [showActive, setShowActive] = useState(false);
    const [showCompleted, setShowCompleted] = useState(false);

    const showAll = () => {
        setShowActive(false)
        setShowCompleted(false)
        setshowingComplete(false)
    }

    const showActiveOnly = () => {
        setShowActive(true)
        setShowCompleted(false)
        setshowingComplete(false)
    }

    const showCompleteOnly = () => {
        setShowActive(false)
        setShowCompleted(true)
        setshowingComplete(true)
    }

    return <div className='border-b w-2/5 mx-auto text-center flex justify-around'>
        <div>
            <button className='font-bold' onClick={showAll}>All</button>
            {!showActive && !showCompleted && <div className='bg-blue-500 h-1 w-20 rounded-t-xl mt-2'>&nbsp;</div>}
        </div>
        <div>
            <button className='font-bold' onClick={showActiveOnly}>Active</button>
            {showActive && <div className='bg-blue-500 h-1 w-24 rounded-t-xl mt-2'>&nbsp;</div>}
        </div>
        <div>
            <button className='font-bold' onClick={showCompleteOnly}>Completed</button>
            {showCompleted && <div className='bg-blue-500 h-1 w-32 rounded-t-xl mt-2'>&nbsp;</div>}
        </div>
    </div >
}
