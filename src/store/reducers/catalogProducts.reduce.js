import mock from '../../service/mock.json'

const INITIAL_STATE = {
    products: []
}

export default function( state = INITIAL_STATE, action ){

    switch(action.type){
        case 'GET_CATALOG_PRODUCTS':
            return {
                ...state,
                products: mock
            }
        
        default:
            return state
    }

}