import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import Blogpost from '../components/Blogpost';
import ProductCard from '../components/ProductUtilities/ProductCard';
import SpecialProducts from '../components/ProductUtilities/SpecialProducts';
import PopularProductCard from '../components/ProductUtilities/PopularProductCard';
import FamousCard from '../components/FamousCard';

const Home = () => {

    return (
        <>
            <section className="home-wrapper-1 py-3">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className="main-banner position-relative mb-4">
                                <img src="images/main-banner-1.jpg" className="img-fluid rounded-3 w-100" alt="main banner" />
                                <div className="main-banner-content position-absolute">
                                    <span className='main-banner-span fs-xsm'>SUPERCHARGED FOR PROS.</span>
                                    <h4 className='main-banner-title fs-xl py-md-3'>iPad S13+ Pro.</h4>
                                    <p className='main-banner-details fs-sm'>From $999.00 or $41.62/mo.<br></br>for 24 mo. Footnote*</p>
                                    <Link><button type="button" className="btn darkButton py-1 py-sm-2 px-3 px-sm-4 rounded-pill">Buy Now</button></Link>
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
                <div className="container-fluid">
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
                <div className="container-fluid">
                    <div className="categories bg-white px-4 py-3 br-shadow">
                        <div className="row">
                            <div className="col-sm-3 py-3 ps-3 single-card">
                                <div className="card">
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
                            <div className="col-sm-3 py-3 ps-3 single-card">
                                <div className="card">
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
                            <div className="col-sm-3 py-3 ps-3 single-card">
                                <div className="card">
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
                            <div className="col-sm-3 py-3 ps-3 single-card">
                                <div className="card">
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
                            <div className="col-sm-3 py-3 ps-3 single-card">
                                <div className="card">
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
                            <div className="col-sm-3 py-3 ps-3 single-card">
                                <div className="card">
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
                            <div className="col-sm-3 py-3 ps-3 single-card">
                                <div className="card">
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
                            <div className="col-sm-3 py-3 ps-3 single-card">
                                <div className="card">
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
                <div className="container-fluid">
                    <div className="marquee-wrapper bg-white br-shadow">
                        <div className="row">
                            <div className="col-12">
                                <div className="marquee-inner-wrapper card-wrapper">
                                    <Marquee className='d-flex' gradient={false} pauseOnHover={true} speed={15}>
                                        <div className="marquee-img mx-4 img-fluid">
                                            <img src="images/brand-01.png" alt="" />
                                        </div>
                                        <div className="marquee-img mx-4 img-fluid">
                                            <img src="images/brand-02.png" alt="" />
                                        </div>
                                        <div className="marquee-img mx-4 img-fluid">
                                            <img src="images/brand-03.png" alt="" />
                                        </div>
                                        <div className="marquee-img mx-4 img-fluid">
                                            <img src="images/brand-04.png" alt="" />
                                        </div>
                                        <div className="marquee-img mx-4 img-fluid">
                                            <img src="images/brand-05.png" alt="" />
                                        </div>
                                        <div className="marquee-img mx-4 img-fluid">
                                            <img src="images/brand-06.png" alt="" />
                                        </div>
                                        <div className="marquee-img mx-4 img-fluid">
                                            <img src="images/brand-07.png" alt="" />
                                        </div>
                                    </Marquee>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-wrapper-5 py-5 gray-bg">
                <div className="container-fluid">
                    <div className="product-wrapper">
                        <div className="header fs-lg fw-bold mb-4">Featured Collection</div>
                        <div className="row g-3">
                            {/* <div className="row row-cols-2"> */}
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-wrapper-6 py-3 gray-bg">
                <div className="container-fluid">
                    <div className="famous-wrapper">
                        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3">
                            <FamousCard color={"dark"} />
                            <FamousCard color={"white"} />
                            <FamousCard color={"white"} />
                            <FamousCard color={"white"} />
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-wrapper-6 py-5 gray-bg">
                <div className="container-fluid">
                    <div className="product-details-wrapper">
                        <div className="header fs-lg fw-bold mb-4">Special Products</div>
                        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
                            <SpecialProducts />
                            <SpecialProducts />
                            <SpecialProducts />
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-wrapper-7 py-5 gray-bg">
                <div className="container-fluid">
                    <div className="popular-product-wrapper">
                        <div className="header fs-lg fw-bold mb-4">Our Featured Products</div>
                    </div>
                    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 g-3">
                        <PopularProductCard />
                        <PopularProductCard />
                        <PopularProductCard />
                        <PopularProductCard />
                        <PopularProductCard />
                        <PopularProductCard />
                    </div>
                </div>
            </section>
            <section className="home-wrapper-8 py-5 gray-bg">
                <div className="container-fluid">
                    <div className="blog-wrapper">
                        <div className="header fs-lg fw-bold mb-4">Blog Section</div>
                        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
                            <Blogpost />
                            <Blogpost />
                            <Blogpost />
                            <Blogpost />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home