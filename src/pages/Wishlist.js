import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import WishlistProduct from '../components/WishlistProduct'

const Wishlist = () => {
    return (
        <>
            <Meta title={"Wishlist"} />
            <BreadCrumb title={"Wishlist"} />
            <div className="compare-product-wrapper gray-bg p-4">
                <div className="container-fluid">
                    <div className="row">
                        <WishlistProduct />
                        <WishlistProduct />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wishlist