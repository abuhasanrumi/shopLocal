import React from 'react'
import ReactStars from 'react-rating-stars-component'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'


const OurStore = () => {
    return (
        <>
            <Meta title={"Our Store"} />
            <BreadCrumb title={"Our Store"} />
            <div className="store-wrapper home-wrapper-2 py-4 gray-bg">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-3">
                            <div className="filter-card br-shadow mb-4 p-3 bg-white">
                                <h3 className="filter-title fs-6">Shop By Categories</h3>
                                <div className='pt-2'>
                                    <ul className='ps-0 fs-xsm text-muted mb-0'>
                                        <li className='py-1'>Watch</li>
                                        <li className='py-1'>TV</li>
                                        <li className='py-1'>Camera</li>
                                        <li className='py-1'>Laptop</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="filter-card br-shadow mb-4 p-3 pb-4 bg-white">
                                <h3 className="filter-title fs-6">Filter By</h3>
                                <div className="availability py-3">
                                    <p className="sub-title mb-2">Availability</p>

                                    <div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="" />
                                            <label className="form-check-label text-muted fs-xsm" htmlFor="">
                                                In Stock (21)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="" />
                                            <label className="form-check-label text-muted fs-xsm" htmlFor="">
                                                Out of Stock (3)
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="price pb-4">
                                    <p className="sub-title mb-2">Price</p>

                                    <div className='d-flex align-items-center gap-10'>
                                        <span>$</span>
                                        <div class="form-floating">
                                            <input type="number" className="form-control" id="floatingFrom" placeholder="$5" />
                                            <label htmlFor="floatingFrom">From</label>
                                        </div>
                                        <span>$</span>

                                        <div class="form-floating">
                                            <input type="number" className="form-control" id="floatingTo" placeholder="$50" />
                                            <label htmlFor="floatingTo">To</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="colors-wrapper pb-4">
                                    <p className="sub-title mb-2">Colors</p>

                                    <div>
                                        <ul className="colors ps-0 d-flex flex-wrap gap-10 mb-0">
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="size">
                                    <p className="sub-title mb-2">Size</p>

                                    <div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="" />
                                            <label className="form-check-label text-muted fs-xsm" htmlFor="">
                                                S (10)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="" />
                                            <label className="form-check-label text-muted fs-xsm" htmlFor="">
                                                M (13)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="" />
                                            <label className="form-check-label text-muted fs-xsm" htmlFor="">
                                                L (10)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="" />
                                            <label className="form-check-label text-muted fs-xsm" htmlFor="">
                                                XL (10)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="" />
                                            <label className="form-check-label text-muted fs-xsm" htmlFor="">
                                                XXL (10)
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-card br-shadow mb-4 p-3 bg-white">
                                <h3 className="filter-title fs-6 mb-3">Product Tag</h3>
                                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                                    <span className="badge bg-light fw-normal text-secondary rounded-3 px-3 py-2 fs-xsm">
                                        Headphone
                                    </span>
                                    <span className="badge bg-light fw-normal text-secondary rounded-3 px-3 py-2 fs-xsm">
                                        Laptop
                                    </span>
                                    <span className="badge bg-light fw-normal text-secondary rounded-3 px-3 py-2 fs-xsm">
                                        Mobile
                                    </span>
                                    <span className="badge bg-light fw-normal text-secondary rounded-3 px-3 py-2 fs-xsm">
                                        Oppo
                                    </span>
                                    <span className="badge bg-light fw-normal text-secondary rounded-3 px-3 py-2 fs-xsm">
                                        Vivo
                                    </span>
                                    <span className="badge bg-light fw-normal text-secondary rounded-3 px-3 py-2 fs-xsm">
                                        Speaker
                                    </span>
                                    <span className="badge bg-light fw-normal text-secondary rounded-3 px-3 py-2 fs-xsm">
                                        Tablet
                                    </span>
                                    <span className="badge bg-light fw-normal text-secondary rounded-3 px-3 py-2 fs-xsm">
                                        Wire
                                    </span>
                                </div>
                            </div>
                            <div className="filter-card br-shadow mb-4 p-3 bg-white">
                                <h3 className="filter-title fs-6">Random Products</h3>
                                <div className="random-products-wrapper">
                                    <div className="random-product py-3">
                                        <div className="row">
                                            <div className="col-4">
                                                <img src="images/watch.jpg" className='img-fluid' alt="" />
                                            </div>
                                            <div className="col-8">
                                                <h5 className="product-title fs-sm">Kids headphones bulk 10 pack multi colored for students</h5>
                                                <ReactStars
                                                    count={5}
                                                    size={15}
                                                    activeColor={"#ffc30b"}
                                                    edit={false}
                                                    value={3}
                                                />
                                                <p className="price fs-6 fw-normal pt-2 mb-0">$100.00</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="random-product py-3">
                                        <div className="row">
                                            <div className="col-4">
                                                <img src="images/watch.jpg" className='img-fluid' alt="" />
                                            </div>
                                            <div className="col-8">
                                                <h5 className="product-title fs-sm">Kids headphones bulk 10 pack multi colored for students</h5>
                                                <ReactStars
                                                    count={5}
                                                    size={15}
                                                    activeColor={"#ffc30b"}
                                                    edit={false}
                                                    value={3}
                                                />
                                                <p className="price fs-6 fw-normal pt-2 mb-0">$100.00</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="random-product py-3">
                                        <div className="row">
                                            <div className="col-4">
                                                <img src="images/watch.jpg" className='img-fluid' alt="" />
                                            </div>
                                            <div className="col-8">
                                                <h5 className="product-title fs-sm">Kids headphones bulk 10 pack multi colored for students</h5>
                                                <ReactStars
                                                    count={5}
                                                    size={15}
                                                    activeColor={"#ffc30b"}
                                                    edit={false}
                                                    value={3}
                                                />
                                                <p className="price fs-6 fw-normal pt-2 mb-0">$100.00</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-9"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurStore