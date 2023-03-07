import React from 'react'
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <Meta title={"Login"} />
            <BreadCrumb title={"Login"} />
            <div className="login-wrapper py-2 py-md-5 gray-bg">
                <div className="container-fluid">
                    <div className="row d-flex justify-content-center">
                        <div className="col-12 col-md-6 col-xl-5 p-4">
                            <div className="login-card bg-white p-5 br-shadow">
                                <h5 className='text-muted mb-4 text-center'>Login</h5>
                                <form action="#">
                                    <div class="form-floating mb-3">
                                        <input type="email" class="form-control" id="loginFloatingEmail" placeholder="name@example.com" />
                                        <label className='text-muted' for="loginFloatingEmail">Email address</label>
                                    </div>
                                    <div class="form-floating">
                                        <input type="password" class="form-control" id="loginFloatingPass" placeholder="Password" />
                                        <label className='text-muted' for="loginFloatingPass">Password</label>
                                    </div>
                                    <Link className='py-3'><span className="fs-sm text-dark">Forgot your password?</span></Link>
                                    <div className="login-form-buttons d-flex justify-content-center py-3">
                                        <button type="submit" className="btn loginButton py-3 py-md-3 px-5 px-md-5 rounded-pill mx-2">Login</button>
                                        <button type="submit" className="btn signupButton py-3 py-md-3 px-5 px-md-5 rounded-pill mx-2">Sign Up</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login