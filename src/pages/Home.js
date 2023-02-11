import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";

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
                                    <h4 className='main-banner-title fs-xl py-md-3'>iPad S13+ Pro.</h4>
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
                                        <img src="images/catbanner-02.jpg" className="img-fluid rounded-3 w-100" alt="small banner" />
                                        <div className="small-banner-content position-absolute">
                                            <span className='small-banner-span fs-xsm'>BEST DEALS</span>
                                            <h4 className='small-banner-title py-sm-2 fs-md'>Laptops Max</h4>
                                            <p className='small-banner-details d-none d-sm-block d-md-none d-lg-block'>From $999.00 <br></br>or $41.62/mo.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3 col-lg-6 mb-4">
                                    <div className="small-banner position-relative">
                                        <img src="images/catbanner-03.jpg" className="img-fluid rounded-3 w-100" alt="small banner" />
                                        <div className="small-banner-content position-absolute">
                                            <span className='small-banner-span fs-xsm'>BEST DEALS</span>
                                            <h4 className='small-banner-title py-sm-2 fs-md'>Laptops Max</h4>
                                            <p className='small-banner-details d-none d-sm-block d-md-none d-lg-block'>From $999.00 <br></br>or $41.62/mo.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3 col-lg-6 mb-4">
                                    <div className="small-banner position-relative">
                                        <img src="images/catbanner-04.jpg" className="img-fluid rounded-3 w-100" alt="small banner" />
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
            <section className="home-wrapper-2 py-4 gray-bg">
                <div className="container-xxl">
                    <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-12">
                            <div className="services d-flex align-items-center justify-content-around justify-md-content-around py-3">
                                <div className="single-service">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <img src="images/service.png" alt="" className="service-img p-3" />
                                        <div className="service-details gap-15">
                                            <div className="service-title fs-md py-1">Free Shipping</div>
                                            <p className="service-des mb-0 fs-xsm">From all orders over $100</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-service">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <img src="images/service-02.png" alt="" className="service-img p-3" />
                                        <div className="service-details gap-15">
                                            <div className="service-title fs-md py-1">Free Shipping</div>
                                            <p className="service-des mb-0 fs-xsm">From all orders over $100</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-service d-none d-md-block">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <img src="images/service-03.png" alt="" className="service-img p-3" />
                                        <div className="service-details gap-15">
                                            <div className="service-title fs-md py-1">Free Shipping</div>
                                            <p className="service-des mb-0 fs-xsm">From all orders over $100</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-service d-none d-xl-block">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <img src="images/service-04.png" alt="" className="service-img p-3" />
                                        <div className="service-details gap-15">
                                            <div className="service-title fs-md py-1">Free Shipping</div>
                                            <p className="service-des mb-0 fs-xsm">From all orders over $100</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-service d-none d-xxl-block">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <img src="images/service-05.png" alt="" className="service-img p-3" />
                                        <div className="service-details gap-15">
                                            <div className="service-title fs-md py-1">Free Shipping</div>
                                            <p className="service-des mb-0 fs-xsm">From all orders over $100</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-wrapper-3 py-3 gray-bg">
                <div className="container-xxl">
                    <div className="categories bg-white px-4 py-3 br-shadow">
                        <div class="row">
                            <div class="col-sm-3 py-3 ps-3 single-card">
                                <div class="card">
                                    <div className="single-category d-flex justify-content-between align-items-center">
                                        <div className="category-details">
                                            <div className="category-title fs-sm py-1">Computers & Laptop</div>
                                            <p className="category-quantity mb-0 fs-xsm">8 items</p>
                                        </div>
                                        <div className="category-img">
                                            <img className='img-fluid' src="images/laptop.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-3 py-3 ps-3 single-card">
                                <div class="card">
                                    <div className="single-category d-flex justify-content-between align-items-center">
                                        <div className="category-details">
                                            <div className="category-title fs-sm py-1">Computers & Laptop</div>
                                            <p className="category-quantity mb-0 fs-xsm">8 items</p>
                                        </div>
                                        <div className="category-img">
                                            <img className='img-fluid' src="images/laptop.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-3 py-3 ps-3 single-card">
                                <div class="card">
                                    <div className="single-category d-flex justify-content-between align-items-center">
                                        <div className="category-details">
                                            <div className="category-title fs-sm py-1">Computers & Laptop</div>
                                            <p className="category-quantity mb-0 fs-xsm">8 items</p>
                                        </div>
                                        <div className="category-img">
                                            <img className='img-fluid' src="images/laptop.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-3 py-3 ps-3 single-card">
                                <div class="card">
                                    <div className="single-category d-flex justify-content-between align-items-center">
                                        <div className="category-details">
                                            <div className="category-title fs-sm py-1">Computers & Laptop</div>
                                            <p className="category-quantity mb-0 fs-xsm">8 items</p>
                                        </div>
                                        <div className="category-img">
                                            <img className='img-fluid' src="images/laptop.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-3 py-3 ps-3 single-card">
                                <div class="card">
                                    <div className="single-category d-flex justify-content-between align-items-center">
                                        <div className="category-details">
                                            <div className="category-title fs-sm py-1">Computers & Laptop</div>
                                            <p className="category-quantity mb-0 fs-xsm">8 items</p>
                                        </div>
                                        <div className="category-img">
                                            <img className='img-fluid' src="images/laptop.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-3 py-3 ps-3 single-card">
                                <div class="card">
                                    <div className="single-category d-flex justify-content-between align-items-center">
                                        <div className="category-details">
                                            <div className="category-title fs-sm py-1">Computers & Laptop</div>
                                            <p className="category-quantity mb-0 fs-xsm">8 items</p>
                                        </div>
                                        <div className="category-img">
                                            <img className='img-fluid' src="images/laptop.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-3 py-3 ps-3 single-card">
                                <div class="card">
                                    <div className="single-category d-flex justify-content-between align-items-center">
                                        <div className="category-details">
                                            <div className="category-title fs-sm py-1">Computers & Laptop</div>
                                            <p className="category-quantity mb-0 fs-xsm">8 items</p>
                                        </div>
                                        <div className="category-img">
                                            <img className='img-fluid' src="images/laptop.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-3 py-3 ps-3 single-card">
                                <div class="card">
                                    <div className="single-category d-flex justify-content-between align-items-center">
                                        <div className="category-details">
                                            <div className="category-title fs-sm py-1">Computers & Laptop</div>
                                            <p className="category-quantity mb-0 fs-xsm">8 items</p>
                                        </div>
                                        <div className="category-img">
                                            <img className='img-fluid' src="images/laptop.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-wrapper-4 py-3 gray-bg">
                <div className="container-xxl">
                    <div className="marquee-wrapper bg-white br-shadow">
                        <div className="row">
                            <div className="col-12">
                                <div className="marquee-inner-wrapper card-wrapper">
                                    <Marquee className='d-flex' gradient={false} pauseOnHover={true} speed={15}>
                                        <div className="marquee-img mx-4 w-25">
                                            <img src="images/brand-01.png" alt="" />
                                        </div>
                                        <div className="marquee-img mx-4 w-25">
                                            <img src="images/brand-01.png" alt="" />
                                        </div>
                                        <div className="marquee-img mx-4 w-25">
                                            <img src="images/brand-01.png" alt="" />
                                        </div>
                                        <div className="marquee-img mx-4 w-25">
                                            <img src="images/brand-01.png" alt="" />
                                        </div>
                                        <div className="marquee-img mx-4 w-25">
                                            <img src="images/brand-01.png" alt="" />
                                        </div>
                                        <div className="marquee-img mx-4 w-25">
                                            <img src="images/brand-01.png" alt="" />
                                        </div>
                                    </Marquee>
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