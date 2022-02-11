import mock from '../../service/mock.json'

const INITIAL_STATE = {
    products: [],
    categories: []
}

export default function( state = INITIAL_STATE, action ){

    switch(action.type){
        case 'GET_CATALOG_PRODUCTS_SUCESS':
            return {
                ...state,
                products: action.payload
            }

        case 'GET_CATEGORY_SUCESS':
            return {
                ...state,
                categories: action.payload
            }
        
        case 'FILTER_CATALOG':{console.log(action.payload);
            const newProducts = state.products.filter( product => product.category.id === action.payload.id);
            
            return {
                ...state,
                products: newProducts
            }
        }
            


        default:
            return state
    }

}