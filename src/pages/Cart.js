import React from 'react'
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import watchImg from "../images/watch.jpg"

const Cart = () => {
    return (
        <>
            <Meta title={"Cart - ShopLocal"} />
            <BreadCrumb title={"Cart - ShopLocal"} />
            <div className="cart-wrapper gray-bg py-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 ">
                            <div className="cart-header py-3 d-flex justify-content-between border-bottom align-items-center text-muted gap-10">
                                <span className="cart-col-1">Product</span>
                                <span className="cart-col-2">Price</span>
                                <span className="cart-col-3">Quantity</span>
                                <span className="cart-col-4">Total</span>
                            </div>
                            <div className="cart-data-wrapper text-muted">
                                <div className="cart-data py-3 d-flex justify-content-between align-items-center border-bottom">
                                    <span className="cart-col-1 d-flex align-items-center">
                                        <img src={watchImg} alt="" className="img-fluid" />
                                        <div className="cart-data-product">
                                            <p className='cart-data-product-title text-dark'>APPLE Watch Series 2 – 42 mm Stainless Steel Case</p>
                                            <p className='cart-data-product-size'>Size: M</p>
                                            <p className='cart-data-product-color'>Color: Red</p>
                                        </div>
                                    </span>
                                    <span className="cart-col-2">
                                        <h6 className='cart-data-product-price text-dark'>$100.00</h6>
                                    </span>
                                    <span className="cart-col-3">asdsd</span>
                                    <span className="cart-col-4">asdsad</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart