import React from "react";
import "./Checkout.css";

export default function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" src="https://picsum.photos/id/122/1500/100" alt="" />

                <div>
                    <h2 className="checkouT_title">
                        장바구니
                    </h2>

                    목록
                </div>
            </div>
            <div className="checkout_right">
                <h2>장바구니 총 금액</h2>
            </div>

        </div>
    )
}