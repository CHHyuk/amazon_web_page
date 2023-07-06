import react from 'react';
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format';

export default function Checkout() {
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>

                            총액 ( 0 items) : <strong> 0원 </strong>

                        </p>
                        <small className='subtotal-gift'>
                            <input type="checkbox" /> 체크박스 입니다.
                        </small>
                    </>
                )}

                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₩"}
            />

            <button> 결제하기 </button>
        </div>
    )
}