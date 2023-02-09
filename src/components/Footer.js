import React from 'react'

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
                                <input type="text" className="form-control py-1" placeholder="Your email address" aria-label="Your email address" aria-describedby="basic-addon2" />
                                <span className="input-group-text p-2" id="basic-addon2">
                                    Subscribe
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="py-3"></footer>
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