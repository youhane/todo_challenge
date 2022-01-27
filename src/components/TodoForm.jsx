import React from 'react';

export default function TodoForm() {
    return <form className='text-center'>
        <input
            type="text"
            placeholder='add details'
            className='border-2 rounded-xl pl-2 py-3 w-1/4'
        />
        <button
            type="submit"
            className='bg-blue-500 text-white rounded-xl mx-2 p-3 px-8'
        >
            Add
        </button>
    </form>
}
