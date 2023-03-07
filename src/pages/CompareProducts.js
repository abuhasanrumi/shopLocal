import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import SingleCompare from '../components/SingleCompare'

const CompareProducts = () => {
    return (
        <>
            <Meta title={"Compare Products"} />
            <BreadCrumb title={"Compare Products"} />
            <div className="compare-product-wrapper gray-bg p-4">
                <div className="container-fluid">
                    <div className="row">
                        <SingleCompare />
                        <SingleCompare />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompareProducts