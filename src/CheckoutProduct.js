import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

export default function CheckoutProduct({ id, image, title, price, rating }) {
    const [{basket}, dispatch] = useStateValue();
    
    // 버튼으로 장바구니에서 지우기
    const removeFromBasket = () => {
        dispatch({
            type : 'REMOVE_FROM_BASKET',
            id: id
        })
    }
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
                <button onClick={removeFromBasket}> 장바구니에서 제거하기 </button>
            </div>
        </div>
    )
}