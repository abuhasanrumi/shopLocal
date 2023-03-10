import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom'

const PopularProductCard = () => {
    return (
        <div className="col">
            <Link className="product-card bg-white br-shadow position-relative">
                <div className="product-img d-flex align-items-center position-relative">
                    <img className='img-fluid rounded' src="images/watch.jpg" alt="" />
                    <img className='img-fluid rounded' src="images/watch-2.jpg" alt="" />
                    <div className="wishlist-icon position-absolute">
                        <Link>
                            <img src="images/wish.svg" alt="" />
                        </Link>
                    </div>
                </div>
                <div className="product-details text-dark px-3 pb-2">
                    <p className="brand fs-xsm">Havels</p>
                    <h5 className="product-title fs-sm">Kids headphones bulk 10 pack multi colored for student</h5>
                    <ReactStars
                        count={5}
                        size={15}
                        activeColor={"#ffc30b"}
                        edit={false}
                        value={3}
                    />
                    <p className="price fs-5 pt-3">$100.00</p>
                </div>
                <div className="action-bar position-absolute ">
                    <div className="d-flex flex-column gap-10">
                        <Link>
                            <img src="images/prodcompare.svg" alt="" />
                        </Link>
                        <Link>
                            <img src="images/view.svg" alt="" />
                        </Link>
                        <Link>
                            <img src="images/add-cart.svg" alt="" />
                        </Link>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default PopularProductCard