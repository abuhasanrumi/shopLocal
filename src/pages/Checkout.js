import React from 'react'
import { BsArrowLeft } from "react-icons/bs"
import { Link } from 'react-router-dom'

const Checkout = () => {
    return (
        <>
            <div className="checkout-wrapper py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-7">
                            <div className="checkout-left-data pe-5">
                                <h3 className="checkout-title fw-light">Checkout</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb fs-xsm">
                                        <li className="breadcrumb-item">Cart</li>
                                        <li className="breadcrumb-item active" aria-current="page">Information</li>
                                        <li className="breadcrumb-item" aria-current="page">Shipping</li>
                                        <li className="breadcrumb-item" aria-current="page">Payment</li>
                                    </ol>
                                </nav>
                                <div className="border-bottom py-4">
                                    <h5 className="fw-light">Contact Information</h5>
                                    <div className="checkout-account-details fs-sm fw-light text-muted">
                                        Abu Hasan Rumi (shutter.rumi1@gmail.com)
                                    </div>
                                </div>

                                <div className="checkout-form mt-5">
                                    <h5 className="fw-light mb-3">Shipping Information</h5>
                                    <form action="" className='d-flex gap-15 flex-wrap justify-content-between'>
                                        <div className='form-floating w-100'>
                                            <select id="selectCountry" className="form-select fs-sm fw-light" aria-label="Default select example">
                                                <option selected>Open this select menu</option>
                                            </select>
                                            <label htmlFor="selectCountry">Saved Addresses</label>
                                        </div>
                                        <div className='form-floating w-100'>
                                            <select id="selectCountry" className="form-select fw-light" aria-label="Default select example">
                                                <option selected>Open this select menu</option>
                                            </select>
                                            <label htmlFor="selectCountry">Country/Region</label>
                                        </div>
                                        <div class="form-floating flex-grow-1">
                                            <input type="text" class="form-control fs-sm text-muted" id="floatingInput" placeholder="Last Name" />
                                            <label for="floatingInput fw-light fs-sm text-muted">First Name</label>
                                        </div>
                                        <div class="form-floating flex-grow-1">
                                            <input type="text" class="form-control fs-sm text-muted" id="floatingInput" placeholder="Last Name" />
                                            <label for="floatingInput fw-light fs-sm text-muted">Last Name</label>
                                        </div>
                                        <div class="form-floating w-100">
                                            <input type="text" class="form-control fs-sm text-muted" id="floatingInput" placeholder="address" />
                                            <label for="floatingInput fw-light fs-sm text-muted">Address</label>
                                        </div>
                                        <div class="form-floating w-100">
                                            <input type="text" class="form-control fs-sm text-muted" id="floatingInput" placeholder="apartment" />
                                            <label for="floatingInput fw-light fs-sm text-muted">Apartment</label>
                                        </div>
                                        <div class="form-floating flex-grow-1">
                                            <input type="text" class="form-control fs-sm text-muted" id="floatingInput" placeholder="apartment" />
                                            <label for="floatingInput fw-light fs-sm text-muted">City</label>
                                        </div>
                                        <div className='form-floating flex-grow-1'>
                                            <select id="selectCountry" className="form-select fw-light" aria-label="Default select example">
                                                <option selected>California</option>
                                            </select>
                                            <label htmlFor="selectCountry">State</label>
                                        </div>
                                        <div class="form-floating flex-grow-1">
                                            <input type="text" class="form-control fs-sm text-muted" id="floatingInput" placeholder="apartment" />
                                            <label for="floatingInput fw-light fs-sm text-muted">Zip Code</label>
                                        </div>
                                        <div className="w-100 py-3">
                                            <div className="checkout-btns d-flex gap-15 justify-content-between align-items-center">
                                                <Link className='text-muted'><BsArrowLeft className='me-2 ps-0' />Return to Cart</Link>
                                                <button className='btn btn-danger px-5 py-3'>Continue to Shipping</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-5"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout