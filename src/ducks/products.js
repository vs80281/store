// this is reducer
export default function products(state = []) {
    return state; 
}

// this is selectors
export function getProducts(state, props) {
    return state.products;
}

export function getProduct(state, props) {
    return state.products.find(item => item.id === props.id);
}
