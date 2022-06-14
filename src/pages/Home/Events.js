import React from 'react'
import ButtonForEvents from './ButtonForEvents'

export default function Events() {

    const shoot = () => {
        alert("Shoot function called.")
    }

    const alertMyName = () => {

        let askUserName = prompt("What is your name")

        alert("Salaam " + askUserName)
    }

    const styles = { color: "red", backgroundColor: "yellow" }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        {/* <h1 style={}>Events</h1> */}
                        <h1 style={styles}>Events</h1>
                        <div className="text-center">
                            <button className='btn btn-success' onClick={shoot}>Click Me</button>
                            <button className='btn btn-success' onClick={alertMyName}>Alert My Name</button>
                            <ButtonForEvents text="Text from props" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
