import React from 'react'
import { Link } from 'react-router-dom'

const Blogpost = () => {
    return (
        <>
            <div className="col">
                <div className="card bg-white h-100">
                    <img src="images/blog-1.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="blog-date text-gray fs-xsm">11 JUNE, 2022</p>
                        <h5 className="fs-5">A Beautiful Morning...</h5>
                        <p className="card-text fs-xsm text-gray">You're Only As Good As Your Last Collection, Which Is An Enormous Pressure. I Think There Is...</p>
                    </div>
                    <div className="card-footer bg-white mb-3">
                        <Link to="/blogs/:id"><button type="button" className="btn darkButton py-1 py-sm-2 px-3 px-sm-4 rounded-pill">Read More</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blogpost