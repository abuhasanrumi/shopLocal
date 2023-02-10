import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <section className="home-wrapper-1 py-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className="main-banner position-relative mb-4">
                                <img src="images/main-banner-1.jpg" className="img-fluid rounded-3 w-100" alt="main banner" />
                                <div className="main-banner-content position-absolute">
                                    <span className='main-banner-span fs-sm'>SUPERCHARGED FOR PROS.</span>
                                    <h4 className='main-banner-title py-3 fs-lg'>iPad S13+ Pro.</h4>
                                    <p className='main-banner-details fs-sm'>From $999.00 or $41.62/mo.<br></br>for 24 mo. Footnote*</p>
                                    <Link><p className='darkButton'>Buy Now</p></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="small-banner-wrapper row">
                                <div className="col-6 col-md-3 col-lg-6 mb-4">
                                    <div className="small-banner position-relative">
                                        <img src="images/catbanner-01.jpg" className="img-fluid rounded-3 w-100" alt="small banner" />
                                        <div className="small-banner-content position-absolute">
                                            <span className='small-banner-span fs-sm'>BEST DEALS</span>
                                            <h4 className='small-banner-title py-2 fs-md'>iPad S13+ Pro.</h4>
                                            <p className='small-banner-details fs-sm'>From $999.00 <br></br>or $41.62/mo.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3 col-lg-6 mb-4">
                                    <div className="small-banner position-relative">
                                        <img src="images/catbanner-02.jpg" className="img-fluid rounded-3 w-100" alt="small banner" />
                                        <div className="small-banner-content position-absolute">
                                            <span className='small-banner-span fs-sm'>BEST DEALS</span>
                                            <h4 className='small-banner-title py-2 fs-md'>iPad S13+ Pro.</h4>
                                            <p className='small-banner-details fs-sm'>From $999.00 <br></br>or $41.62/mo.</p>
                                        </div>
                                    </div>
                                </div><div className="col-6 col-md-3 col-lg-6 mb-4">
                                    <div className="small-banner position-relative">
                                        <img src="images/catbanner-03.jpg" className="img-fluid rounded-3 w-100" alt="small banner" />
                                        <div className="small-banner-content position-absolute">
                                            <span className='small-banner-span fs-sm'>BEST DEALS</span>
                                            <h4 className='small-banner-title py-2 fs-md'>iPad S13+ Pro.</h4>
                                            <p className='small-banner-details fs-sm'>From $999.00 <br></br>or $41.62/mo.</p>
                                        </div>
                                    </div>
                                </div><div className="col-6 col-md-3 col-lg-6 mb-4">
                                    <div className="small-banner position-relative">
                                        <img src="images/catbanner-04.jpg" className="img-fluid rounded-3 w-100" alt="small banner" />
                                        <div className="small-banner-content position-absolute">
                                            <span className='small-banner-span fs-sm'>BEST DEALS</span>
                                            <h4 className='small-banner-title py-2 fs-md'>iPad S13+ Pro.</h4>
                                            <p className='small-banner-details fs-sm'>From $999.00 <br></br>or $41.62/mo.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home