import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

const Contact = () => {
    return (
        <>
            <Meta title={"Contact"} />
            <BreadCrumb title={"Contact"} />
            <div className="contact-wrapper gray-bg py-4">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14688.290772161925!2d91.399604!3d23.021103!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375368498f61eee3%3A0xa43932e620180136!2sAbu%20Hasan%20Rumi!5e0!3m2!1sen!2sbd!4v1677926059034!5m2!1sen!2sbd" height="450" className='border-0 w-100' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="col-12">
                            <div className="contact-details-wrapper my-4 bg-white br-shadow">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="contact-form-section p-4">
                                            <h3 className="contact-title mb-4">Contact</h3>
                                            <form action="">
                                                <div className="form-floating mb-3">
                                                    <input type="text" className="form-control" id="floatingName" placeholder="Name" />
                                                    <label className='text-muted' htmlFor="floatingName">Name</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input type="email" className="form-control" id="floatingEmail" placeholder="Email *" />
                                                    <label className='text-muted' htmlFor="floatingEmail">Email *</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input type="tel" className="form-control" id="floatingPhone" placeholder="Phone Number" />
                                                    <label className='text-muted' htmlFor="floatingPhone">Phone Number</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ "height": "150px" }}></textarea>
                                                    <label className='text-muted' htmlFor="floatingTextarea2">Comments</label>
                                                </div>
                                                <button type="button" className="btn darkButton py-2 py-sm-2 px-3 px-sm-4 rounded-pill">Send</button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="contact-details-section p-4">
                                            <h3 className="contact-title">Get in touch with us</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact