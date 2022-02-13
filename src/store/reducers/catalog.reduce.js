import mock from '../../service/mock.json'

const INITIAL_STATE = {
    products: [],
    loading: true,
    error: null
}

export default function( state = INITIAL_STATE, action ){

    switch(action.type){

        case 'GET_CATALOG_PRODUCTS':
            return {
                ...state,
                loading: true
            }

        case 'GET_CATALOG_PRODUCTS_SUCESS':
            return {
                ...state,
                products: action.payload,
                loading: false
            }
        
        case 'GET_CATALOG_PRODUCTS_ERROR':
            return {
                ...state,
                loading: false,
                error: true
            }

        case 'FILTER_CATALOG':{
            const productsFilter = state.products.map( product => {
                if(action.payload == "All")
                    product['hidden'] = false;
                else if(product.category.id === action.payload.id)
                    product['hidden'] = false;
                else
                    product['hidden'] = true;
                
                return product; 
            });

            return {
                ...state,
                products: productsFilter
            }
        }

        default:
            return state
    }

}