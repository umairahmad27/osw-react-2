import React, { useState } from 'react'

export default function Login() {

    const [state, setState] = useState({
        email: "",
        password: ""
    })

    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const handleLogin = () => {
        console.log(state)
        // console.log(email)
        // console.log(password)

        // let user = { name: "Ahmad", city: "Lahore", age: 20, region: "Punjab" }

        // let user1 = { name: "Zubair", city: "Faisalabad", age: 30, country: "Pakistan" }

        // let mergeUsers = { ...user, ...user1 }
        // let mergeUsers1 = { name: "Zubair", city: "Faisalabad", age: 30, country: "Pakistan" }

        // console.log(mergeUsers)
        // console.log(mergeUsers1)
    }

    return (
        <div className='py-5'>
            <div className="container">
                <div className="row mb-4">
                    <div className="col">
                        <h1 className="text-center">Login Page</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                        {/* <p>Email: {email}</p>
                        <p>Password: {password}</p> */}
                        <div className="card px-4 py-5">
                            <div className="row">
                                <div className="col-12 mb-3">
                                    <input type="email" className="form-control" placeholder="Email" name='email' onChange={handleChange} />
                                    {/* <input type="email" className="form-control" placeholder="Email" name='email' onChange={e => setState({ ...state, email: e.target.value })} /> */}
                                    {/* <input type="email" className="form-control" placeholder="Email" onChange={e => setEmail(e.target.value)} /> */}
                                </div>
                                <div className="col-12 mb-3">
                                    <input type="password" className="form-control" placeholder="Password" name='password' onChange={handleChange} />
                                </div>
                                <div className="col">
                                    <button className='btn btn-success w-100' onClick={handleLogin}>Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
