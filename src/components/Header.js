import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'

const Header = () => {
    return (
        <>
            <header className="header-top-strip py-2">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-6 d-none d-md-block">
                            <p className='text-white mb-0 fs-xsm'>Free Shipping Over $100 & Free Returns</p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p className='text-center text-md-end text-white mb-0 fs-xsm'>Hotline: <a className='text-white' href="tel:+8801537485726">+880 14234 24234</a></p>
                        </div>
                    </div>
                </div>
            </header>
            <header className="header-upper py-3">
                <div className="container-fluid">
                    <div className="row align-items-center ">
                        <div className="col-3">
                            <h3 className='mb-0'><Link to="/" className='text-white'>ShopLocal</Link></h3>
                        </div>
                        <div className="col-4">
                            <div className="search-wrapper d-none d-lg-block">
                                <div className="input-group ">
                                    <input type="text" className="form-control py-1 searchBar" placeholder="Search product here" aria-label="Search product here" aria-describedby="basic-addon2" />
                                    <span className="input-group-text p-3 searchBar-icon" id="basic-addon2"><BsSearch className='fs-6' /></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="header-upper-links d-flex align-items-center justify-content-end gap-3">
                                <div className="single-icon px-2">
                                    <Link to="compare-products" className='d-flex align-items-center text-white gap-10'>
                                        <img className="img-fluid" src="images/compare.svg" alt="" />
                                        <p className='d-none d-xl-block mb-0 header-upper-text'>Compare <br /> Products</p>
                                    </Link>
                                </div>
                                <div className="single-icon px-2">
                                    <Link to="wishlist" className='d-flex align-items-center text-white gap-10'>
                                        <img className="img-fluid" src="images/wishlist.svg" alt="wishlist" />
                                        <p className='d-none d-xl-block mb-0 header-upper-text'>Favourite <br /> Wishlist</p>
                                    </Link>
                                </div>
                                <div className="single-icon px-2">
                                    <Link to="login" className='d-flex align-items-center text-white gap-10'>
                                        <img className="img-fluid" src="images/user.svg" alt="user" />
                                        <p className='d-none d-xl-block mb-0 header-upper-text'>Login <br /> My Account</p>
                                    </Link>
                                </div>
                                <div className="single-icon px-2">
                                    <Link to="cart" className='d-flex align-items-center text-white gap-10'>
                                        <img className="img-fluid" src="images/cart.svg" alt="cart" />
                                        <div className='d-none d-xl-block d-flex flex-column gap-10 justify-content-center'>
                                            <span className="d-block badge bg-white text-dark fs-xsm fw-normal rounded-pill mb-1">0</span>
                                            <p className='mb-0 header-upper-text'>$500</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <header className="hidden-search py-4 d-lg-none">
                <div className="row sec-search-wrapper">
                    <div className="col-8 mx-auto d-xl-none">
                        <div className="input-group">
                            <input type="text" className="form-control py-1 searchBar" placeholder="Search product here" aria-label="Search product here" aria-describedby="basic-addon2" />
                            <span className="input-group-text p-3 searchBar-icon" id="basic-addon2"><BsSearch className='fs-6' /></span>
                        </div>
                    </div>
                </div>
            </header>
            <header className="header-bottom py-1 d-none d-lg-block">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="menu-bottom d-flex align-items-center gap-30">
                                <div>
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <img src="images/menu.svg" alt="" />
                                            <span className='me-5 d-inline-block'>Shop Categories</span>
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><Link className="dropdown-item text-white" to="#">Action</Link></li>
                                            <li><Link className="dropdown-item text-white" to="#">Another action</Link></li>
                                            <li><Link className="dropdown-item text-white" to="#">Something else here</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='menu-links'>
                                    <div className="d-flex align-items-center gap-5">
                                        <NavLink to="/">Home</NavLink>
                                        <NavLink to="/products">Our Products</NavLink>
                                        <NavLink to="/blogs">Blogs</NavLink>
                                        <NavLink to="/contact">Contact</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header