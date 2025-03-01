import React, { useEffect, useState } from 'react';
import ProductPagePlaceHolder from './ProductPagePlaceHolder';
import RelatedProducts from './RelatedProducts';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../api';
import api from '../../api'

const ProductPage = () => {

    const { slug } = useParams()
    const [product, setProduct] = useState({})
    const [similarProducts, setSimilarProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const cart_code=localStorage.getItem("cart_code")


    const newItem = {cart_code:cart_code,product_id:product.id}
    
    function add_item() {
        api.post("add_item", newItem).then(res => {
            console.log(res.data)
        })
            .catch(err => {
            console.log(err.message)
        })
    }

    useEffect(() => {
        setLoading(true);
        api.get(`/product_detail/${slug}`)
            .then(res => {
                console.log("API Response:", res.data);  // Debugging
                setProduct(res.data);
                setSimilarProducts(res.data.similar_products);
                setLoading(false);
            })
            .catch(err => {
                console.log("Error:", err.message);
                setLoading(false);
            });
    }, [slug]);
    if (loading) {
        return <ProductPagePlaceHolder />
    }


    return (
        <div>
            <section className="py-3">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="row gx-4 gx-lg-5 align-items-center">
                        <div className="col-md-6">
                            <img
                                className="card-img-top mb-5 mb-md-0"
                                src={`${BASE_URL}${product.image}`}
                                alt="Product"
                            />
                        </div>
                        <div className="col-md-6">
                            <div className="small mb-1">SKU: BST-498</div>
                            <h1 className="display-5 fw-bolder">{product.name}</h1>
                            <div className="fs-5 mb-5">
                                <span>{`₹${product.price}`}</span>
                            </div>
                            <p className="lead">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Praesentium at dolorem quidem modi. Nam sequi consequatur
                                obcaecati excepturi alias magni, accusamus eius blanditiis
                                delectus ipsum minima ea iste laborum vero?
                            </p>
                            <div className="d-flex">
                                <button
                                    className="btn btn-outline-dark flex-shrink-0"
                                    type="button" onClick={add_item}
                                >
                                    <i className="bi-cart-fill me-1"></i>
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <RelatedProducts products={similarProducts} />
        </div>
    );
};

export default ProductPage;
