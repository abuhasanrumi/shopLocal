import React from 'react'

const SingleCategory = () => {
    return (
        <div className="col-6 col-md-4 col-xl-3 py-3 ps-3 single-card">
            <div className="card">
                <div className="single-category d-flex justify-content-between align-items-center">
                    <div className="category-details">
                        <div className="category-title fs-sm py-1">Computers</div>
                        <p className="category-quantity mb-0 fs-xsm">8 items</p>
                    </div>
                    <div className="category-img">
                        <img className='img-fluid' src="images/laptop.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleCategory