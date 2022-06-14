import React, { useContext } from 'react'
import { CountContext } from '../../context/CountContext'
import { UserContext } from '../../context/UserContext'

export default function Hero() {

    const { userName, userAge } = useContext(UserContext)
    const { count, setCount } = useContext(CountContext)

    console.log(userName)
    console.log(count)

    return (
        <>
            <h1 className="text-center">Hero section of Home page</h1>
            <h2 className='text-center'>{userName}</h2>
            <h2 className='text-center'>{userAge}</h2>
            <h2 className="text-center">Count: {count}</h2>
            <button className='btn btn-success' onClick={() => { setCount(count + 1) }}>Increment</button>
            <button className='btn btn-danger' onClick={() => { setCount(count - 1) }}>Decrement</button>
        </>
    )
}
