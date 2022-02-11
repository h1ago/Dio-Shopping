import React, {useEffect} from "react";
import {
    Container, 
    Card,
    ProductImage, 
    ProductDiscount, 
    ProductName, 
    ProductPriceOld, 
    ProductPrice 
} from "./styles"

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';



export default function CatalogProducts(){
    const dispatch = useDispatch();
    const catalog = useSelector( state => state.catalog );
    
    useEffect( () => {
        dispatch({type: 'GET_CATALOG_PRODUCTS'});
    }, [] );

    return (
        <Container>

            {
                catalog.products.map( (product, index) => (
                        <Card key={index}>
                            <Link
                                to={`/produto/${product.id}`}
                                state={{product: product}}
                            > 
                                <ProductImage src={require('../../assets/products/' + product.image)}/>
                                {
                                    product.discount_percentage !== null &&   
                                    <ProductDiscount>- {product.discount_percentage}%</ProductDiscount>
                                }
                                <ProductName>{product.name}</ProductName>
                                
                                {
                                    product.discount_percentage !== null 
                                    ?<>
                                        <ProductPriceOld>{product.regular_price}</ProductPriceOld>
                                        <ProductPrice>{product.actual_price}</ProductPrice>
                                    </>
                                    :<ProductPrice>{product.actual_price}</ProductPrice>
                                }

                            </Link>
                        </Card>
                ))
            }

        </Container>
    )
}