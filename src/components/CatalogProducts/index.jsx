import React, {useEffect} from "react";
import { Container } from "./styles"

import { useSelector, useDispatch } from 'react-redux';
import Loading from "../Loading";
import Error from "../Error";
import CatalogItem from "./CatalogItem";



export default function CatalogProducts(){
    const dispatch = useDispatch();
    const catalog = useSelector( state => state.catalog );

    useEffect( () => {
        dispatch({type: 'GET_CATALOG_PRODUCTS'});
    }, [] );

    if(catalog.loading)
        return <Loading/>

    if(catalog.error)
        return <Error/>

    return (
        <Container>

            {
                catalog.products.map( (product, index) => (
                    product.hidden !== true &&
                        <CatalogItem key={index} product={product} />
                ))
            }

        </Container>
    )
}