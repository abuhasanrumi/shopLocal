import React from 'react'
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import SingleCartProduct from '../components/SingleCartProduct';

const Cart = () => {
    return (
        <>
            <Meta title={"Cart - ShopLocal"} />
            <BreadCrumb title={"Cart - ShopLocal"} />
            <div className="cart-wrapper gray-bg py-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 ">
                            <div className="cart-header pb-3 text-muted gap-10 border-bottom">
                                <div className="row">
                                    <div className="col-3 col-lg-1">
                                        Image
                                    </div>
                                    <div className="col-9 col-lg-11">
                                        <div className="row">
                                            <div className="col-8 col-lg-6">
                                                Product
                                            </div>
                                            <div className="col-4 col-lg-2 d-flex justify-content-end align-items-center">
                                                Price
                                            </div>
                                            <div className="col-lg-2 d-none d-lg-flex justify-content-end">
                                                Quantity
                                            </div>
                                            <div className="col-lg-2 d-none d-lg-flex justify-content-end align-items-center">
                                                Total
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cart-data-wrapper text-muted">
                                <div className="cart-data pb-3">
                                    <SingleCartProduct />
                                    <SingleCartProduct />
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