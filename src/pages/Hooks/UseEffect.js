import React, { useState, useEffect } from 'react'

export default function UseEffect() {

    const [status, setStatus] = useState("active")
    const [gender, setGender] = useState("male")

    const handleChange = e => {
        setGender(e.target.value)
    }

    useEffect(() => {
        console.log(gender)
    }, [status, gender])

    return (
        <div className='py-5'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className='text-center text-info'>UseEffect Hook</h1>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-12 col-md-6">
                        <select className='form-control' onChange={(e) => { setStatus(e.target.value) }}>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                            <option value="pending">Pending</option>
                            <option value="canceled">Canceled</option>
                        </select>
                    </div>
                    <div className="col-12 col-md-6 d-flex align-items-center">
                        <p className="mb-0 d-inline-block fw-bold me-3">Gender: </p>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="gender" id="male" value="male" checked={gender === "male"} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="male">Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="gender" id="female" value="female" checked={gender === "female"} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="female">Female</label>
                        </div>
                    </div>
                    {/* <button className='btn btn-success' onClick={handleIncrement}>Increment</button>
                        <h3 className='my-3'>{count}</h3>
                        <button className='btn btn-danger' onClick={handleDecrement}>Decrement</button><br />
                        <button className='btn btn-warning mt-3' onClick={() => { setCount(0) }}>Reset</button> */}
                </div>
            </div>
        </div>
    )
}
