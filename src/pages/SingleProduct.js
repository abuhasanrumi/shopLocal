import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductUtilities/ProductCard'

const SingleProduct = () => {
    return (
        <>
            <Meta title={"Product Name - ShopLocal"} />
            <BreadCrumb title={"Product Name - ShopLocal"} />
            <div className="main-product-wrapper">
                <div className="container-fluid gray-bg py-5">
                    <div className="main-product">
                        <div className="row">

                        </div>
                    </div>
                    <div className="product-suggestion-wrapper">
                        <div className="header fs-lg fw-bold mb-4">You May Also Like</div>
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
            </div>

        </>
    )
}

export default SingleProduct