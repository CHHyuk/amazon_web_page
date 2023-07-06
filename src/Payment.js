import React from "react";
import Header from "./Header";
import './Payment.css';
import { useStateValue } from "./StateProvider";
import { Link, useNavigate } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";


export default function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const navigate = useNavigate();

    return (
        <>
            <Header />
            <div className="payment">
                <div className="payment_container">
                    <Link to={'/checkout'}>
                        <h1 className="payment_return"> 장바구니로 돌아가기 </h1>
                    </Link>
                    <h1>({basket?.length} 개의 상품이 존재합니다.) </h1>
                    <div className="payment_section">
                        <div className="payment_title">
                            <h3> 배달 받을 곳 </h3>
                        </div>
                        <div className="payment_address">
                            <strong>주소를 입력하세요</strong> <input type="text" />
                        </div>
                    </div>

                </div>

                <div className="payment_section">
                    <div className="payment_title">
                        <h3> 상품 목록 </h3>
                    </div>
                    <div className='payment_items'>
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                
                <div className="payment_section">
                    <div className="payment_title">
                        <h3> 결제 </h3>
                    </div>
                    <div className="payment_details">

                    </div>
                </div>
                </div>
            </div>
        </>
    )
}