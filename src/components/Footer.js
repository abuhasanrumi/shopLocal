import React from 'react'
import { Link } from 'react-router-dom'
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from 'react-icons/bs'

const Footer = () => {
    return (
        <>
            <footer className="py-5">
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-5">
                            <div className="footer-top-data d-flex gap-15 align-items-center">
                                <img src="images/newsletter.png" alt="newsletter" />
                                <h3 className='mb-0 text-white fw-light'>Sign Up For Newsletter</h3>
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="input-group">
                                <input type="text" className="form-control py-1 footer-sub" placeholder="Your email address" aria-label="Your email address" aria-describedby="basic-addon2" />
                                <span className="input-group-text p-2" id="basic-addon2">
                                    Subscribe
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-4">
                            <h4 className='text-white mb-4'>Contact Us</h4>
                            <div className='d-flex flex-column'>
                                <address className='text-white fs-6'>No. 1259 Freedom, New York, 11111 United States</address>
                                <Link className="text-white my-2" to="tel:+8801938472638">+8801938472638</Link>
                                <Link className="text-white my-2" to="mailto:contact@shoplocal.com">contact@shoplocal.com</Link>
                                <div className="social-icons d-flex align-items-center gap-15 mt-4">
                                    <Link to="" className='text-white social-icon-item d-flex align-items-center justify-content-center'>
                                        <BsGithub />
                                    </Link>
                                    <Link to="" className='text-white social-icon-item d-flex align-items-center justify-content-center'>
                                        <BsInstagram />
                                    </Link>
                                    <Link to="" className='text-white social-icon-item d-flex align-items-center justify-content-center'>
                                        <BsYoutube />
                                    </Link>
                                    <Link to="" className='text-white social-icon-item d-flex align-items-center justify-content-center'>
                                        <BsLinkedin />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className='text-white mb-4'>Information</h4>
                            <div>
                                <div className='footer-links d-flex flex-column'>
                                    <Link className='text-white py-2 mb-1' to="">Privacy Policy</Link>
                                    <Link className='text-white py-2 mb-1' to="">Refund Policy</Link>
                                    <Link className='text-white py-2 mb-1' to="">Shipping Policy</Link>
                                    <Link className='text-white py-2 mb-1' to="">Terms of Service</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className='text-white mb-4'>Account</h4>
                            <div>
                                <div className='footer-links d-flex flex-column'>
                                    <Link className='text-white py-2 mb-1' to="">About Us</Link>
                                    <Link className='text-white py-2 mb-1' to="">FAW</Link>
                                    <Link className='text-white py-2 mb-1' to="">Contact</Link>
                                    <Link className='text-white py-2 mb-1' to="">Size Chart</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <h4 className='text-white mb-4'>Quick Links</h4>
                            <div className='footer-links d-flex flex-column'>
                                <Link className='text-white py-2 mb-1' to="">Laptops</Link>
                                <Link className='text-white py-2 mb-1' to="">Headphones</Link>
                                <Link className='text-white py-2 mb-1' to="">Tablets</Link>
                                <Link className='text-white py-2 mb-1' to="">Smartphones</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <p className="text-center mb-0 text-white">&copy; {new Date().getFullYear()}; Powered by Abu Hasan Rumi</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer