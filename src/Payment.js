import React from "react";
import Header from "./Header";
import './Payment.css';
import { useStateValue } from "./StateProvider";
import { Link, useNavigate } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';


export default function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const navigate = useNavigate();

    return (
        <>
            <Header />
            <div className="payment">
                <div className='payment_container'>


                    <Link to="/checkout">
                        <h1 className="payment_return">
                            장바구니 다시 설정하기 ({basket?.length} items )
                        </h1>
                    </Link>

                    <div className='payment_section'>
                        <div className='payment_title'>
                            <h3> 배달 받을 곳 </h3>
                        </div>
                        <div className='payment_address'>
                            <p>주소를 입력하세요</p>
                            &nbsp;&nbsp;&nbsp;
                            <input type='text' />
                        </div>

                    </div>


                    <div className='payment_section'>
                        <div className='payment_title'>
                            <h3> 선택한 제품 </h3>
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
                    </div>

                    <div className='payment_section'>

                        <div className='payment_title'>
                            <h3>결제 금액</h3>
                        </div>
                        <div className="payment_total">
                            <CurrencyFormat
                                renderText={(value) => (
                                    <>
                                        <p>

                                            총 &nbsp;&nbsp;<strong> {value} 원 </strong>

                                        </p>
                                    </>
                                )}

                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"₩"}
                            />
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}
