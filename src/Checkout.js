import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import {useStateValue} from "./StateProvider";

export default function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" src="https://picsum.photos/id/122/1000/400" alt="" />

                <div>
                    <h2 className="checkout_title">
                        {user?.email}의 장바구니입니다.
                    </h2>
                    {/* 맵핑을 이용해 장바구니 내용 채우기 */}
                    {basket.map(item => (
                        <CheckoutProduct id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating}/>
                    ))}


                </div>
            </div>
            <div className="checkout_right">
                <Subtotal/>
            </div>

        </div>
    )
}