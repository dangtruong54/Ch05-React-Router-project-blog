import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        return (
            <section className="page-section">
                <div className="container">
                    <div className="product-item">
                        <div className="product-item-title d-flex">
                            <div className="bg-faded p-5 d-flex ml-auto rounded">
                                <h2 className="section-heading mb-0">
                                    <span className="section-heading-upper">Blended to Perfection</span>
                                    <span className="section-heading-lower">Coffees &amp; Teas</span>
                                </h2>
                            </div>
                        </div>
                        <img className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src="img/products-01.jpg" alt="" />
                        <div className="product-item-description d-flex mr-auto">
                            <div className="bg-faded p-5 rounded">
                                <p className="mb-0">We take pride in our work, and it shows. Every time you order a beverage from us, we guarantee that it will be an experience worth having. Whether it's our world famous Venezuelan Cappuccino, a refreshing iced herbal tea, or something as simple as a cup of speciality sourced black coffee, you will be coming back for more.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ProductItem;
