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
                                        <li className='py-2'>Watch</li>
                                        <li className='py-2'>TV</li>
                                        <li className='py-2'>Camera</li>
                                        <li className='py-2'>Laptop</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="filter-card br-shadow mb-4 p-3 bg-white">
                                <h3 className="filter-title fs-6">Filter By</h3>
                                <div className="availability py-3">
                                    <p className="sub-title fw-bold">Availability</p>

                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="" />
                                        <label class="form-check-label text-muted fs-xsm" for="">
                                            In Stock (21)
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="" />
                                        <label class="form-check-label text-muted fs-xsm" for="">
                                            Out of Stock (2)
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-card br-shadow mb-4 p-3 bg-white">
                                <h3 className="filter-title fs-6">Product Tags</h3>
                            </div>
                            <div className="filter-card br-shadow mb-4 p-3 bg-white">
                                <h3 className="filter-title fs-6">Random Product</h3>
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