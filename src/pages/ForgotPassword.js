import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom';


const ForgotPassword = () => {
    return (
        <>
            <Meta title={"Reset Password"} />
            <BreadCrumb title={"Reset Password"} />
            <div className="reset-wrapper py-2 py-md-5 gray-bg">
                <div className="container-fluid">
                    <div className="row d-flex justify-content-center">
                        <div className="col-12 col-md-6 col-xl-5 p-4">
                            <div className="reset-card bg-white p-5 br-shadow">
                                <h5 className='text-muted mb-4 text-center'>Reset Your Password</h5>
                                <div className='text-muted text-center mb-4 '>We will send you an email to reset your password</div>
                                <form action="#">
                                    <div class="form-floating mb-3">
                                        <input type="email" class="form-control" id="resetFloatingEmail" placeholder="name@example.com" />
                                        <label className='text-muted' for="resetFloatingEmail">Email address</label>
                                    </div>

                                    <span className="text-danger">
                                        No account found with that email.
                                    </span>

                                    <div className="reset-form-buttons d-flex justify-content-center py-3 gap-30">
                                        <button type="submit" className="btn resetButton py-3 py-md-3 px-5 px-md-5 rounded-pill">Reset</button>
                                        <button type="button" className="btn cancelButton py-3 py-md-3 px-5 px-md-5 rounded-pill">Cancel</button>
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

export default ForgotPassword