import React, { useState, useReducer } from 'react'

// const initialState = {}

// const reducer = (state, action) => {

//     switch (action.type) {
//         case "INCREMENT":
//             return state + 1
//         case "DECREMENT":
//             return state - 1
//         default:
//             return initialState
//     }

//     if (action.type === "INCREMENT") {
//         return state + 1
//     }
//     else if (action.type === "DECREMENT") {
//         return (state > 0 ? state - 1 : state)
//     }
//     else {
//         return initialState
//     }
// }

const initialState = 0

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1
        case "DECREMENT":
            return state - 1
        case "RESET":
            return initialState
        default:
            return state
    }
}

export default function UseReducer() {

    const [state, dispatch] = useReducer(reducer, initialState)

    // const [state, dispatch] = useReducer(reducer, initialState)


    // const [count, setCount] = useState(initalCount)

    // const handleIncrement = () => {
    //     setCount(s => s + 1)
    // }
    // const handleDecrement = () => {
    //     count > 0 && setCount(s => s - 1)
    // }

    return (
        <div className='text-center'>
            <h1>UseReducer</h1>
            {/* {state} */}
            {/* <button className='btn btn-success' onClick={() => { setCount(count + 1) }}>Increment</button> */}
            <button className='btn btn-success' onClick={() => { dispatch({ type: "INCREMENT" }) }}>Increment</button>
            <h2>{state}</h2>
            {/* <button className='btn btn-danger' onClick={() => { setCount(count - 1) }}>Decrement</button> */}
            <button className='btn btn-danger' onClick={() => { dispatch({ type: "DECREMENT" }) }}>Decrement</button>
            <hr />
            {/* <button onClick={() => { setCount(initalCount) }}>Reset</button> */}
            <button className='btn btn-warning' onClick={() => { dispatch({ type: "RESET" }) }}>Reset</button>
        </div>
    )
}
