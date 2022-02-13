import { call, all, put, takeLatest } from 'redux-saga/effects';
import {productsApi, categoryApi} from '../../service/api';


function* getProducts(){

    try {
        let products = yield call(productsApi); 
        yield put( {type: 'GET_CATALOG_PRODUCTS_SUCESS', payload: products} );
    } catch (error) {
        yield put( {type: 'GET_CATALOG_PRODUCTS_ERROR', payload: error} );
        console.log(error);
    }

}

export default function* rootSaga(){
    return yield all([
        yield takeLatest( 'GET_CATALOG_PRODUCTS', getProducts ),
    ]);
};