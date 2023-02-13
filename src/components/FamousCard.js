import React from 'react'

const FamousCard = () => {
    return (
        <div className="col">
            <div className="famous-product-card position-relative">
                <img src="images/famous-banner-1" alt="" />
                <div className="famous-content position-absolute">
                    <p className="fs-xsm transform-uppercase">Big Screen</p>
                    <div className="fs-md">Smart Watch Series 7</div>
                    <p className="fs-sm">From $399 or $16.49/month for 24 month*</p>
                </div>
            </div>
        </div>
    )
}

export default FamousCard