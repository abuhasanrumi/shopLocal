import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <section className="home-wrapper-1 py-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-banner p-1 position-relative">
                                <img src="images/main-banner-1.jpg" className="img-fluid rounded-3" alt="main banner" />
                                <div className="main-banner-content position-absolute">
                                    <span className='main-banner-span'>SUPERCHARGED FOR PROS.</span>
                                    <h4 className='main-banner-title py-3'>iPad S13+ Pro.</h4>
                                    <p className='main-banner-details'>From $999.00 or $41.62/mo.<br></br>for 24 mo. Footnote*</p>
                                    <Link><p className='darkButton'>Buy Now</p></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-6"></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home