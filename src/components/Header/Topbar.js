import React from 'react'
// import { userName } from "../../data/user"

function Topbar() {

    let a = 6

    return (
        <header className='bg-success'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="mb-0 text-center text-white">{a < 5 ? "Umair" : "Ahmad"}</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Topbar