import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'


const OurStore = () => {
    return (
        <>
            <Meta title={"Our Store"} />
            <BreadCrumb title={"Our Store"} />
            <div className="store-wrapper home-wrapper-2 py-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-3">
                            <div className="filter-card br-shadow mb-4 p-4">
                                <h3 className="filter-title fs-5">Shop By Categories</h3>
                            </div>
                            <div className="filter-card br-shadow mb-4 p-4">
                                <h3 className="filter-title fs-5">Filter By</h3>
                            </div>
                            <div className="filter-card br-shadow mb-4 p-4">
                                <h3 className="filter-title fs-5">Product Tags</h3>
                            </div>
                            <div className="filter-card br-shadow mb-4 p-4">
                                <h3 className="filter-title fs-5">Random Product</h3>
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