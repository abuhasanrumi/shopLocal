import React from 'react'
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
                            <div className="filter-card br-shadow mb-4 p-3 bg-white">
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
                                <div className="price py-3">
                                    <p className="sub-title mb-2">Price</p>

                                    <div>
                                        <div class="form-floating">
                                            <input type="number" className="form-control" id="floatingFrom" />
                                            <label htmlFor="floatingFrom">From</label>
                                        </div>
                                        <div class="form-floating">
                                            <input type="number" className="form-control" id="floatingFrom" />
                                            <label htmlFor="floatingFrom">From</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-card br-shadow mb-4 p-3 bg-white">
                                <h3 className="filter-title fs-6">Product Tag</h3>
                            </div>
                            <div className="filter-card br-shadow mb-4 p-3 bg-white">
                                <h3 className="filter-title fs-6">Random Products</h3>
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