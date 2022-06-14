import React, { useRef } from 'react'
import sound from "../../assets/audios/music.mp3"

export default function UseRef() {

    const audioPlayer = useRef(null)

    const handleOrder = () => {
        audioPlayer.current.play()
    }

    return (
        <div className='py-5'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className='text-center text-info'>UseRef Hook</h1>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col text-center">
                        <audio src={sound} ref={audioPlayer}></audio><br />
                        <button className='btn btn-info' onClick={handleOrder}>Order</button>
                        {/* <button className='btn btn-success' onClick={handleIncrement}>Increment</button>
                        <h3 className='my-3'>{count}</h3>
                        <button className='btn btn-danger' onClick={handleDecrement}>Decrement</button><br />
                        <button className='btn btn-warning mt-3' onClick={() => { setCount(0) }}>Reset</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
