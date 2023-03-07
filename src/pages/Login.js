import React from 'react'
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';

const Login = () => {
    return (
        <>
            <Meta title={"Login"} />
            <BreadCrumb title={"Login"} />
            <div className="login-wrapper py-2 py-md-5 gray-bg">
                <div className="container-fluid">
                    <div className="row d-flex justify-content-center">
                        <div className="col-12 col-md-6 col-xl-5 p-4">
                            <div className="login-card bg-white p-5 br-shadow text-center">
                                <h4 className='text-muted'>Login</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login