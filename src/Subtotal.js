import react from 'react';
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useNavigate } from'react-router-dom';

export default function Checkout() {
    // basket에 담은 정보 가져오기
    const [{basket}, dispatch] = useStateValue();
    const navigate = useNavigate();

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>

                            총액 ( {basket.length} 개 제품) : <strong> {value} 원 </strong>

                        </p>
                        <small className='subtotal_gift'>
                            <input type="checkbox" /> 체크박스 입니다.
                        </small>
                    </>
                )}

                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₩"}
            />

            <button onClick={e => navigate('/payment')}> 결제하기 </button>
        </div>
    )
}