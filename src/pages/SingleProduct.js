import React, { useState } from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductUtilities/ProductCard'

const SingleProduct = () => {
    const [orderedThisProduct, setOrderedThisProduct] = useState(true)
    return (
        <>
            <Meta title={"Product Name - ShopLocal"} />
            <BreadCrumb title={"Product Name - ShopLocal"} />
            <div className="single-product-wrapper">
                <div className="container-fluid gray-bg">
                    <div className="main-product-wrapper pb-5">
                        <div className="row">
                            <div className="col-6"></div>
                            <div className="col-6"></div>
                        </div>
                    </div>
                    <div className="description-wrapper pb-5">
                        <div className="section-title fs-lg mb-4">Descriptions</div>
                        <div className="row g-3">
                            <div className="col-12">
                                <div className="privacy-policy-texts bg-white p-4 br-shadow">
                                    <span className='text-muted fs-xsm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eius asperiores est eveniet distinctio! Dignissimos corrupti, perspiciatis voluptatibus iste voluptas assumenda, quos amet doloremque in aperiam tempore odio earum facere soluta. At dolore deserunt, vero aperiam explicabo cupiditate temporibus quaerat ratione ipsam ad! Incidunt at voluptates quis reprehenderit, impedit nulla deserunt eaque cumque cum? Ad qui, inventore ut quo reprehenderit facilis odit corporis suscipit ratione sed sequi quos eligendi rerum, velit delectus at, consectetur vero asperiores eius mollitia ullam? Officiis cumque, quibusdam aspernatur illo sint ipsum praesentium et voluptas vitae labore rerum quo ipsam! Magni sapiente, natus fuga perferendis provident, excepturi et numquam delectus quia doloribus nihil autem aut corrupti. Blanditiis incidunt ipsa odit magni ex molestias magnam, animi quae fugiat, quisquam repellat atque officiis amet? Beatae nobis nostrum eligendi fugiat possimus minima modi mollitia alias quod pariatur? Aliquam molestias omnis ipsam nulla, repellat officia, veritatis nostrum unde assumenda animi tempora qui quam doloribus, mollitia officiis est! Fuga repudiandae iure explicabo, porro accusamus laboriosam id neque omnis tempora ratione consequatur commodi saepe aut ex. Modi illo a molestias commodi dolores corrupti cum. Facere placeat sunt deleniti esse culpa saepe doloribus dolorem aperiam ducimus eligendi eos, dolorum maxime vitae expedita! Saepe.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-suggestion-wrapper pb-5">
                        <div className="section-title fs-lg mb-4">Reviews</div>
                        <div className="row">
                            <div className="col-12">
                                <div className="review-section bg-white br-shadow p-4">
                                    <h5 className='mb-3 fw-normal'>Customer Reviews</h5>
                                    <div className="average-review d-flex justify-content-between align-items-end">
                                        <div className='d-flex align-items-center gap-2'>
                                            <ReactStars
                                                count={5}
                                                size={15}
                                                activeColor={"#ffc30b"}
                                                edit={false}
                                                value={5}
                                            />
                                            <span className="text-muted fs-xsm">Based on 1 review</span>
                                        </div>
                                        {orderedThisProduct && (
                                            <Link to="" className='text-muted'>Write a review</Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-suggestion-wrapper pb-5">
                        <div className="section-title fs-lg mb-4">You May Also Like</div>
                        <div className="row g-3">
                            {/* <div className="row row-cols-2"> */}
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SingleProduct