import React, { useState } from 'react'

export default function UseContext() {

    const [count, setCount] = useState(5)

    const handleIncrement = () => {
        setCount(count + 1)
    }
    const handleDecrement = () => {
        count > 0 && setCount(count - 1)
    }

    return (
        <div className='py-5'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className='text-center text-info'>UseContext Hook</h1>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col text-center">
                        <button className='btn btn-success' onClick={handleIncrement}>Increment</button>
                        <h3 className='my-3'>{count}</h3>
                        <button className='btn btn-danger' onClick={handleDecrement}>Decrement</button><br />
                        <button className='btn btn-warning mt-3' onClick={() => { setCount(0) }}>Reset</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
