import React from 'react';
import './CheckoutProduct.css';

export default function CheckoutProduct({ id, image, title, price, rating }) {
    return (
        <div className="heckoutProduct">
            <img className='checkoutProduct_image' src={image} alt="" />

            <div className='checkoutProduct_info'>
                <p className='checkoutProduct_title'>
                    {title}
                </p>
                <p className='checkoutProduct_price'>
                    <small>₩</small>
                    <strong>{price}</strong>
                    <small>원</small>
                </p>
                <div className='checkoutProduct_rating'>
                    {
                        Array(rating)
                            .fill()
                            .map(() => (
                                <p>★</p>
                            ))
                    }
                </div>
                <button> 장바구니에서 제거하기 </button>
            </div>
        </div>
    )
}