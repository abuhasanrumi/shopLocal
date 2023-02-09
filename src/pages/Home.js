import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <section className="home-wrapper-1 py-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className="main-banner position-relative mb-3">
                                <img src="images/main-banner-1.jpg" className="img-fluid rounded-3 w-100" alt="main banner" />
                                <div className="main-banner-content position-absolute">
                                    <span className='main-banner-span fs-6'>SUPERCHARGED FOR PROS.</span>
                                    <h4 className='main-banner-title py-3 fs-1'>iPad S13+ Pro.</h4>
                                    <p className='main-banner-details'>From $999.00 or $41.62/mo.<br></br>for 24 mo. Footnote*</p>
                                    <Link><p className='darkButton'>Buy Now</p></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="d-flex flex-wrap justify-content-between align-items-center gap-10">
                                <div className="small-banner position-relative mb-2">
                                    <img src="images/catbanner-01.jpg" className="img-fluid rounded-3 w-100" alt="small banner" />
                                    <div className="small-banner-content position-absolute">
                                        <span className='small-banner-span fs-6'>BEST DEALS.</span>
                                        <h4 className='small-banner-title py-3 fs-4'>iPad S13+ Pro.</h4>
                                        <p className='small-banner-details'>From $999.00 or $41.62/mo.<br></br>for 24 mo. Footnote*</p>
                                    </div>
                                </div>
                                <div className="small-banner position-relative mb-2">
                                    <img src="images/catbanner-02.jpg" className="img-fluid rounded-3 w-100" alt="small banner" />
                                    <div className="small-banner-content position-absolute">
                                        <span className='small-banner-span fs-6'>BEST DEALS.</span>
                                        <h4 className='small-banner-title py-3 fs-4'>iPad S13+ Pro.</h4>
                                        <p className='small-banner-details'>From $999.00 or $41.62/mo.<br></br>for 24 mo. Footnote*</p>
                                    </div>
                                </div>
                                <div className="small-banner position-relative mb-2">
                                    <img src="images/catbanner-03.jpg" className="img-fluid rounded-3 w-100" alt="small banner" />
                                    <div className="small-banner-content position-absolute">
                                        <span className='small-banner-span fs-6'>BEST DEALS.</span>
                                        <h4 className='small-banner-title py-3 fs-4'>iPad S13+ Pro.</h4>
                                        <p className='small-banner-details'>From $999.00 or $41.62/mo.<br></br>for 24 mo. Footnote*</p>
                                    </div>
                                </div>
                                <div className="small-banner position-relative mb-2">
                                    <img src="images/catbanner-04.jpg" className="img-fluid rounded-3 w-100" alt="small banner" />
                                    <div className="small-banner-content position-absolute">
                                        <span className='small-banner-span fs-6'>BEST DEALS.</span>
                                        <h4 className='small-banner-title py-3 fs-4'>iPad S13+ Pro.</h4>
                                        <p className='small-banner-details'>From $999.00 or $41.62/mo.<br></br>for 24 mo. Footnote*</p>
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