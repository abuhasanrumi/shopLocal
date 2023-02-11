import React from 'react'
import { Link } from 'react-router-dom'

const Blogpost = () => {
    return (
        <>
            <div className="col">
                <div class="card bg-white h-100">
                    <img src="images/blog-1.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <p className="blog-date text-gray fs-xsm">11 JUNE, 2022</p>
                        <h5 class="fs-5">A Beautiful Morning...</h5>
                        <p class="card-text fs-xsm text-gray">You're Only As Good As Your Last Collection, Which Is An Enormous Pressure. I Think There Is...</p>
                    </div>
                    <div class="card-footer bg-white mb-3">
                        <Link><button type="button" class="btn darkButton py-1 py-sm-2 px-3 px-sm-4 rounded-pill">Read More</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blogpost