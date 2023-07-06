// 초기값 설정
export const initialState = {
    basket: [],
    user: null,
};

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);


const reducer = (state, action) => {
    switch (action.type) {
        // 액션 = ADD_TO_BASKET, Product.js에서 쏴준 데이터를 받아서 action.item에 담김
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        // 액션 = Remove_Fro0m_BASKET, action.id와 basket.id와 같은지 확인
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id,
            );

            //newBasket 선언, 기존 basket 스프레드    
            let newBasket = [...state.basket];
            

            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    "(id" +
                    action.id + ')이 장바구니에 존재하지 않습니다'
                )
            }

            return {
                ...state,
                basket: newBasket,
            }
        
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }

        default:
            return state;
    }
}

export default reducer;