import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

export default function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" src="https://picsum.photos/id/122/1000/400" alt="" />

                <div>
                    <h2 className="checkout_title">
                        장바구니
                    </h2>

                    목록
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal/>
            </div>

        </div>
    )
}