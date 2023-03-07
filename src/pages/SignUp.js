import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

const SignUp = () => {
    return (
        <>
            <Meta title={"Create Account"} />
            <BreadCrumb title={"Create Account"} />
            <div className="signup-wrapper py-2 py-md-5 gray-bg">
                <div className="container-fluid">
                    <div className="row d-flex justify-content-center">
                        <div className="col-12 col-md-6 col-xl-5 p-4">
                            <div className="signup-card bg-white p-5 br-shadow">
                                <h5 className='text-muted mb-4 text-center'>Create Account</h5>
                                <form action="#">
                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="signupFloatingFName" placeholder="John" />
                                        <label className='text-muted' for="signupFloatingFName">First Name</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="signupFloatingLName" placeholder="John" />
                                        <label className='text-muted' for="signupFloatingLName">Last Name</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="email" class="form-control" id="signupFloatingEmail" placeholder="name@example.com" />
                                        <label className='text-muted' for="signupFloatingEmail">Email address</label>
                                    </div>
                                    <div class="form-floating">
                                        <input type="password" class="form-control" id="signupFloatingPass" placeholder="Password" />
                                        <label className='text-muted' for="signupFloatingPass">Password</label>
                                    </div>
                                    <div className="signup-form-buttons d-flex justify-content-center py-3 mt-4">
                                        <button type="submit" className="btn signupButton py-3 py-md-3 px-5 px-md-5 rounded-pill">signup</button>
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

export default SignUp