import { getProduct } from '../ducks/products';

// this is  actions
const ADD_TO_CART   = 'ADD/cart';
const REMOVE_TO_CART = 'REMOVE/cart';

//  this is reducer
const initialState = {
    items: [], 
    currency: 'INR'
};

export default function cart(state = initialState, action = {}) {
    switch (action.type) {
        case ADD_TO_CART:
            return handleCartAdd(state, action.payload);
        case REMOVE_TO_CART:
            return handleCartRemove(state, action.payload);
        default:
            return state;
    }
}

function handleCartAdd(state, payload) {
    return {
        ...state,
        items: [ ...state.items, payload.productId ]
    };
}

function handleCartRemove(state, payload) {
    return {
        ...state,
        items: state.items.filter(id => id !== payload.productId)
    };
}

// this is action creators
export function addToCart(productId) {
    return {
        type: ADD_TO_CART,
        payload: {
            productId
        }
    }
}

export function removeFromCart(productId) {
    return {
        type: REMOVE_TO_CART,
        payload: {
            productId
        }
    }
}

// this is selectors
export function isInCart(state, props) {
    return state.cart.items.indexOf(props.id) !== -1;
}

export function getItems(state, props) {
    return state.cart.items.map(id => getProduct(state, { id }));
}

export function getCurrency(state, props) {
    return state.cart.currency;
}

export function getTotal(state, props) {
    return state.cart.items.reduce((acc, id) => {
        const item = getProduct(state, { id });
        return acc + item.price;
    }, 0);
}
