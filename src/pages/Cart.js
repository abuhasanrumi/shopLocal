import React from 'react'
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import watchImg from "../images/watch.jpg"
import { BsTrash } from "react-icons/bs"

const Cart = () => {
    return (
        <>
            <Meta title={"Cart - ShopLocal"} />
            <BreadCrumb title={"Cart - ShopLocal"} />
            <div className="cart-wrapper gray-bg py-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 ">
                            <div className="cart-header py-3 text-muted gap-10 border-bottom">
                                <div className="row">
                                    <div className="col-8 col-lg-6 cart-col-1">Product</div>
                                    <div className="col-4 col-lg-2 cart-col-2">Price</div>
                                    <div className="col-lg-2 d-none d-lg-block cart-col-3">Quantity</div>
                                    <div className="col-lg-2 d-none d-lg-block cart-col-4">Total</div>
                                </div>
                            </div>
                            <div className="cart-data-wrapper text-muted">
                                <div className="cart-data py-3 border-bottom">
                                    <div className="row align-items-center">
                                        <div className="col-8 col-lg-6 cart-col-1">
                                            <div className="row">
                                                <div className="col-4">
                                                    <img src={watchImg} alt="" className="img-fluid" />
                                                </div>
                                                <div className="col-8 cart-data-product">
                                                    <p className='cart-data-product-title text-dark'>APPLE Watch Series 2 – 42 mm Stainless Steel Case</p>
                                                    <p className='cart-data-product-size'>Size: M</p>
                                                    <p className='cart-data-product-color'>Color: Red</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4 col-lg-2 cart-col-2">
                                            <h6 className='cart-data-product-price text-dark'>$100.00</h6>
                                        </div>
                                        <div className="col-lg-2 d-none d-lg-block cart-col-3">
                                            <div className="cart-data-quantity-wrapper d-flex gap-3 py-2 align-items-center">
                                                <input
                                                    type="number"
                                                    className='form-control'
                                                    min={1}
                                                    max={10}
                                                    style={{ width: "65px" }}
                                                    placeholder="1"
                                                />
                                                <div className="card-data-remove">
                                                    <BsTrash className='card-data-remove-btn' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 d-none d-lg-block cart-col-4">asdsad</div>
                                    </div>
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