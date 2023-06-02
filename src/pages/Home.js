import { Col, Row } from 'antd'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import DefaultLayout from '../components/DefaultLayout'

function Home() {

    const navigate = useNavigate();
    return (
        <div>
            <DefaultLayout>
                <div>
                    <Row>
                        <Col lg={12} sm={24}>
                            <div className="card mb-3" style={{ maxWidth: "540px;" }}>
                                <div class="card-header"><h4>My Basket</h4></div>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src="https://thumbs.dreamstime.com/b/bowl-rice-19744132.jpg"
                                            className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className='d-flex justify-content-between'>
                                            <div className="card-body">
                                                <h5 className="card-title">Item_name</h5>
                                                <p className="card-text">$99.99 / (pc/lb) </p>
                                                <div className='add'>
                                                    <p className="card-text">
                                                        <span><button type="button" class="btn"><i class="fa-solid fa-minus"></i></button></span>
                                                        <span>2</span>
                                                        <span><button type="button" class="btn"><i class="fa-solid fa-plus"></i></button></span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='price'>
                                                <p><b>$99.99</b></p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <hr />
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src="https://thumbs.dreamstime.com/b/bowl-rice-19744132.jpg"
                                            className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className='d-flex justify-content-between'>
                                            <div className="card-body">
                                                <h5 className="card-title">Item_name</h5>
                                                <p className="card-text">$99.99 / (pc/lb) </p>
                                                <div className='add'>
                                                    <p className="card-text">
                                                        <span><button type="button" class="btn"><i class="fa-solid fa-minus"></i></button></span>
                                                        <span>2</span>
                                                        <span><button type="button" class="btn"><i class="fa-solid fa-plus"></i></button></span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='price'>
                                                <p><b>$99.99</b></p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <hr />
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src="https://thumbs.dreamstime.com/b/bowl-rice-19744132.jpg"
                                            className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className='d-flex justify-content-between'>
                                            <div className="card-body">
                                                <h5 className="card-title">Item_name</h5>
                                                <p className="card-text">$99.99 / (pc/lb) </p>
                                                <div className='add'>
                                                    <p className="card-text">
                                                        <span><button type="button" class="btn"><i class="fa-solid fa-minus"></i></button></span>
                                                        <span>2</span>
                                                        <span><button type="button" class="btn"><i class="fa-solid fa-plus"></i></button></span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='price'>
                                                <p><b>$99.99</b></p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <hr />
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src="https://thumbs.dreamstime.com/b/bowl-rice-19744132.jpg"
                                            className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className='d-flex justify-content-between'>
                                            <div className="card-body">
                                                <h5 className="card-title">Item_name</h5>
                                                <p className="card-text">$99.99 / (pc/lb) </p>
                                                <div className='add'>
                                                    <p className="card-text">
                                                        <span><button type="button" class="btn"><i class="fa-solid fa-minus"></i></button></span>
                                                        <span>2</span>
                                                        <span><button type="button" class="btn"><i class="fa-solid fa-plus"></i></button></span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='price'>
                                                <p><b>$99.99</b></p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <hr />
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src="https://thumbs.dreamstime.com/b/bowl-rice-19744132.jpg"
                                            className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className='d-flex justify-content-between'>
                                            <div className="card-body">
                                                <h5 className="card-title">Item_name</h5>
                                                <p className="card-text">$99.99 / (pc/lb) </p>
                                                <div className='add'>
                                                    <p className="card-text">
                                                        <span><button type="button" class="btn"><i class="fa-solid fa-minus"></i></button></span>
                                                        <span>2</span>
                                                        <span><button type="button" class="btn"><i class="fa-solid fa-plus"></i></button></span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='price'>
                                                <p><b>$99.99</b></p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={12} sm={24}>
                            <div className='orderinfo'>
                                <div className="card ms-5" style={{ width: "30rem" }}>
                                    <div className="card-header bg-transparent"><h4><b>Order Info</b></h4></div>
                                    <div className='d-flex justify-content-between'>
                                        <div className="card-body">
                                            <h6 className="card-title"><b>Total items</b></h6>
                                            <h6 className="card-title"><b>Subtotal</b></h6>
                                            <h6 className="card-title"><b>Sales tax </b><small>(2%)</small></h6>
                                            <h6 className="card-title"><b>Shipping / delivery cost</b></h6>
                                            <hr />
                                            <h6 className="card-title"><b>GRAND TOTAL</b></h6>
                                        </div>
                                        <div>
                                            <div className="card-body">
                                                <h6 className="card-title"><b>6</b></h6>
                                                <h6 className="card-title"><b>$399.96</b></h6>
                                                <h6 className="card-title"><b>$8.00</b></h6>
                                                <h6 className="card-title"><b>FREE</b></h6>
                                                <hr />
                                                <h6 className="card-title"><b>FREE</b></h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer bg-warning text-center"><h6><b>Proceed</b><i class="fa-solid fa-chevron-right"></i></h6></div>
                                </div>
                            </div>
                            <div className='userbought'>
                                <div class="card m-5" style={{ width: "30rem" }}>
                                    <div className="card-header bg-transparent"><h4><b>Users have also bought</b></h4></div>
                                    <div class="row row-cols-1 row-cols-md-2 g-4 m-1">
                                        <div class="col">
                                            <div class="card">
                                                <div class="card-body">
                                                    <h5 class="card-title text-muted"><b>Product Details</b></h5>
                                                    <p class="card-text"><b>$99.99</b></p>
                                                </div>
                                                <img src="https://5.imimg.com/data5/SELLER/Default/2020/10/FV/MY/NB/24426791/nivea-cream-125x125.jpg" class="card-img-top" alt="..." />
                                                <div class="d-grid gap-2 m-1">
                                                    <button class="btn btn-warning" type="button"><i class="fa-solid fa-basket-shopping"></i>Add to basket</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="card">
                                                <div class="card-body">
                                                    <h5 class="card-title text-muted"><b>Product Details</b></h5>
                                                    <p class="card-text"><b>$99.99</b></p>
                                                </div>
                                                <img src="https://5.imimg.com/data5/SELLER/Default/2020/10/FV/MY/NB/24426791/nivea-cream-125x125.jpg" class="card-img-top" alt="..." />
                                                <div class="d-grid gap-2 m-1">
                                                    <button class="btn btn-warning" type="button"><i class="fa-solid fa-basket-shopping"></i>Add to basket</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="card">
                                                <div class="card-body">
                                                    <h5 class="card-title text-muted"><b>Product Details</b></h5>
                                                    <p class="card-text"><b>$99.99</b></p>
                                                </div>
                                                <img src="https://5.imimg.com/data5/SELLER/Default/2020/10/FV/MY/NB/24426791/nivea-cream-125x125.jpg" class="card-img-top" alt="..." />
                                                <div class="d-grid gap-2 m-1">
                                                    <button class="btn btn-warning" type="button"><i class="fa-solid fa-basket-shopping"></i>Add to basket</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="card">
                                                <div class="card-body">
                                                    <h5 class="card-title text-muted"><b>Product Details</b></h5>
                                                    <p class="card-text"><b>$99.99</b></p>
                                                </div>
                                                <img src="https://5.imimg.com/data5/SELLER/Default/2020/10/FV/MY/NB/24426791/nivea-cream-125x125.jpg" class="card-img-top" alt="..." />
                                                <div class="d-grid gap-2 m-1">
                                                    <button class="btn btn-warning" type="button"><i class="fa-solid fa-basket-shopping"></i>Add to basket</button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </Col>

                    </Row>
                    <div className='chat'>
                        <Link to="/chat"><img src='https://cdn-icons-png.flaticon.com/512/134/134914.png' alt='...' /></Link>
                    </div>
                </div>
            </DefaultLayout>

        </div>
    )
}

export default Home
