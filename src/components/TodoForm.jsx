import React, { useState } from 'react';

export default function TodoForm({ addTodo }) {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({
            id: Math.floor(Math.random() * 1000),
            text: input,
            complete: false
        })
        setInput('')
    }

    return <form className='text-center my-3' onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder='add details'
            className='border-2 rounded-xl pl-2 py-3 w-1/3'
            onChange={(e) => setInput(e.target.value)}
            value={input}
        />
        <button
            type="submit"
            className='bg-blue-500 text-white rounded-xl mx-2 p-3 px-8 hover:bg-blue-400 ease-in-out duration-100'
        >
            Add
        </button>
    </form>
}
