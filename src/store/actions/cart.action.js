export function Get(){
    return {
        type:'GET_CART'
    }
}

export function Add(product){
    return {
        type:'ADD_TO_CART',
        payload: {product}
    }
}