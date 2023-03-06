import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

const CompareProducts = () => {
    return (
        <>
            <Meta title={"Compare Products"} />
            <BreadCrumb title={"Compare Products"} />
            <div className="compare-product-wrapper gray-bg p-4">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6 col-lg-3 bg-white">
                            <h2>Test</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompareProducts