import React from 'react'
import Fruits from './Fruits';

export default function Carousel() {

    const fruits = ['apple'];

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Carousel Page</h1>
                        <Fruits fruits={fruits} vegetables="Not available" />
                    </div>
                </div>
            </div>
        </>
    )
}
