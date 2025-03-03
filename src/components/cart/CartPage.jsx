import React, { useEffect, useState } from 'react';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import api from "../../api"

const CartPage = () => {

    const cart_code = localStorage.getItem("cart_code")
    const [cartitems, setCartItems] = useState([])

    useEffect(() => {
        api.get(`get_cart?cart_code=${cart_code}`)
            .then(res => {
                console.log("Cart API Response:", res.data); // Debug
                setCartItems(res.data.items);
            })
            .catch(err => {
                console.log("Error fetching cart:", err.message);
            });
    }, [cart_code]);

    return (
        <div className="container my-3 py-3" style={{ height: "80vh", overflow: "scroll" }}>
            <h5 className="mb-4">Shopping Cart</h5>
            <div className="row">
                <div className="col-md-8">
                    {cartitems.map(item => <CartItem key={item.id} item={item} />)}

                </div>
                <CartSummary />
            </div>
        </div>
    );
};

export default CartPage;
