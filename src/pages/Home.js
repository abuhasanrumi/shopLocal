import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <section className="home-wrapper-1 py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className="main-banner position-relative mb-4">
                                <img src="images/main-banner-1.jpg" className="img-fluid rounded-3 w-100" alt="main banner" />
                                <div className="main-banner-content position-absolute">
                                    <span className='main-banner-span fs-xsm'>SUPERCHARGED FOR PROS.</span>
                                    <h4 className='main-banner-title fs-lg py-md-3'>iPad S13+ Pro.</h4>
                                    <p className='main-banner-details fs-sm'>From $999.00 or $41.62/mo.<br></br>for 24 mo. Footnote*</p>
                                    <Link><button type="button" class="btn darkButton py-1 py-sm-2 px-3 px-sm-4 rounded-pill">Buy Now</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="small-banner-wrapper row">
                                <div className="col-6 col-md-3 col-lg-6 mb-4">
                                    <div className="small-banner position-relative">
                                        <img src="images/catbanner-01.jpg" className="img-fluid rounded-3 w-100" alt="small banner" />
                                        <div className="small-banner-content position-absolute">
                                            <span className='small-banner-span fs-xsm'>BEST DEALS</span>
                                            <h4 className='small-banner-title py-sm-2 fs-md'>Laptops Max</h4>
                                            <p className='small-banner-details d-none d-sm-block d-md-none d-lg-block'>From $999.00 <br></br>or $41.62/mo.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3 col-lg-6 mb-4">
                                    <div className="small-banner position-relative">
                                        <img src="images/catbanner-01.jpg" className="img-fluid rounded-3 w-100" alt="small banner" />
                                        <div className="small-banner-content position-absolute">
                                            <span className='small-banner-span fs-xsm'>BEST DEALS</span>
                                            <h4 className='small-banner-title py-sm-2 fs-md'>Laptops Max</h4>
                                            <p className='small-banner-details d-none d-sm-block d-md-none d-lg-block'>From $999.00 <br></br>or $41.62/mo.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3 col-lg-6 mb-4">
                                    <div className="small-banner position-relative">
                                        <img src="images/catbanner-01.jpg" className="img-fluid rounded-3 w-100" alt="small banner" />
                                        <div className="small-banner-content position-absolute">
                                            <span className='small-banner-span fs-xsm'>BEST DEALS</span>
                                            <h4 className='small-banner-title py-sm-2 fs-md'>Laptops Max</h4>
                                            <p className='small-banner-details d-none d-sm-block d-md-none d-lg-block'>From $999.00 <br></br>or $41.62/mo.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3 col-lg-6 mb-4">
                                    <div className="small-banner position-relative">
                                        <img src="images/catbanner-01.jpg" className="img-fluid rounded-3 w-100" alt="small banner" />
                                        <div className="small-banner-content position-absolute">
                                            <span className='small-banner-span fs-xsm'>BEST DEALS</span>
                                            <h4 className='small-banner-title py-sm-2 fs-md'>Laptops Max</h4>
                                            <p className='small-banner-details d-none d-sm-block d-md-none d-lg-block'>From $999.00 <br></br>or $41.62/mo.</p>
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