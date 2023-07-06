export const initialState = {
    basket: [],
};

export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);

// 액션 = ADD_TO_BASKET 이고 Product.js에서 쏴준 데이터를 받아서 action.item에 담김
const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
            
        default:
            return state;
    }
}

export default reducer;