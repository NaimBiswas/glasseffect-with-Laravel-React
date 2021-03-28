import React, { Fragment, useState } from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import './Login.css'
import { useHistory } from 'react-router-dom'


const Login = () => {
    const [Name, setName] = useState()

    const [Email, setEmail] = useState()
    const [Password, setPassword] = useState()
    const [Message, setMessage] = useState(false)
    let history = useHistory();


    const SubmitForm = (e) => {
        e.preventDefault();
        const info = {
            'name': Name,
            'email': Email,
            'password': Password,

        }
        axios.post('http://127.0.0.1:8000/test', info)
            .then(res => {
                setMessage(true)
                setName('')
                setEmail('')
                setPassword('')
                history.push('/')
                alert("Login Success")
            }
            ).catch((error) => {
                console.log(error.message);
            })

    }


    return (
        <Fragment>
            {
                Message ?
                    <div className="alert alert-success" role="alert">
                        <strong>LogIn Success</strong>
                    </div> : ''
            }
            <div className="container-fluid from-conter"  >

                <div className="">
                    <div className="card ">


                        <form action="">

                            <div className="form-group px-4 pt-4">
                                <label htmlFor="userName" className="h5 pt-4">Enter Your User Name 👇</label>
                                <input value={Name} onChange={(e) => setName(e.target.value)} type="text" name="name" id="userName" className="form-control  FormINput" placeholder="" aria-describedby="helpId" />

                            </div>

                            <div className="form-group px-4 mt-2">
                                <label htmlFor="userEMail" className="h5">Enter Your User Email 👇</label>
                                <input value={Email} onChange={(e) => setEmail(e.target.value)} type="email" name="name" id="userEMail" className="form-control  FormINput" placeholder="" aria-describedby="helpId" />

                            </div>

                            <div className="form-group px-4 mt-2">
                                <label htmlFor="userPassword" className="h5">Enter Your User Password 👇</label>
                                <input value={Password} onChange={(e) => setPassword(e.target.value)} type="password" name="name" id="userPassword" className="form-control  FormINput" placeholder="" aria-describedby="helpId" />
                            </div>

                            <Button onClick={SubmitForm} variant="warning" className="mx-4 mt-2 mb-3 SubmitButton" type='submit'>Sign In</Button>

                        </form>

                    </div>

                </div>
            </div>

        </Fragment>
    )
}

export default Login
