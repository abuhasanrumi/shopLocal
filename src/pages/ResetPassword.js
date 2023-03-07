import React from 'react'
import { Link } from 'react-router-dom'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

const ResetPassword = () => {
    return (
        <>
            <Meta title={"Reset Password"} />
            <BreadCrumb title={"Reset Password"} />
            <div className="reset-wrapper py-2 py-md-5 gray-bg">
                <div className="container-fluid">
                    <div className="row d-flex justify-content-center">
                        <div className="col-12 col-md-6 col-xl-5 p-4">
                            <div className="reset-card bg-white p-5 br-shadow">
                                <h5 className='text-muted mb-4 text-center'>Confirm Changing Password</h5>
                                <form action="#">
                                    <div class="form-floating mb-3">
                                        <input type="password" class="form-control" id="resetFloatingPass1" placeholder="Password" />
                                        <label className='text-muted' for="resetFloatingPass1">New Password</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="password" class="form-control" id="resetFloatingPass2" placeholder="Password" />
                                        <label className='text-muted' for="resetFloatingPass2">Confirm Password</label>
                                    </div>

                                    <div className="text-danger py-3">
                                        Passwords are not same.
                                    </div>

                                    <div className="reset-form-buttons d-flex justify-content-center py-3 gap-30">
                                        <button type="submit" className="btn resetButton py-3 py-md-3 px-5 px-md-5 rounded-pill">Submit</button>
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

export default ResetPassword