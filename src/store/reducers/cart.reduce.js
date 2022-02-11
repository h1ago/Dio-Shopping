const INITIAL_STATE = {
    productsCart: []
}

export default function(state = INITIAL_STATE, action){

    switch (action.type) {
        case 'GET_CATALOG':
            return {
                ...state,
                cart: [action.payload]
            }

        case 'ADD_TO_CATALOG':
            
            const newProduct = action.payload.product;
            const existProduct = state.productsCart.find( product => product.id === newProduct.id && product.size === newProduct.size);

            if(!existProduct) {
                return {
                    ...state,
                    productsCart: [...state.productsCart, newProduct]
                }
            } 
            
        case 'ADD_QUANTITY': {
            const product = action.payload.product;
            const updateProductsCart = state.productsCart.map( productCart => {
                    if(productCart.id === product.id && productCart.size === product.size){
                        productCart.quantity = productCart.quantity + 1;
                    }
                    return productCart
                }  
            );

            return {
                ...state,
                    productsCart: [...updateProductsCart]
            }
        }

        case 'REMOVE_QUANTITY':{
            const product = action.payload.product;
            const updateProductsCart = state.productsCart.map( productCart => {
                    if(productCart.id === product.id && productCart.size === product.size){
                        if(productCart.quantity > 1)
                            productCart.quantity = productCart.quantity - 1;
                    }
                    return productCart
                }  
            );

            return {
                ...state,
                    productsCart: [...updateProductsCart]
            }
        }

        case 'REMOVE_PRODUCT':
            const product = action.payload.product;
            const updateProductsCart = state.productsCart.filter( productCart => (productCart.id !== product.id || productCart.size !== product.size)
            );

            console.log(updateProductsCart);
            return {
                ...state,
                productsCart: [...updateProductsCart]
            }
        
        break;

        
        default:
            return state;
    }

} 