import React from "react";
import {
    Container, 
    ProductImage, 
    ProductDiscount, 
    ProductName, 
    ProductPriceOld, 
    ProductPrice 
} from "./styles"

import { Link } from "react-router-dom";



export default function CatalogItem(props){
    const product = props.product;

    return (
        <Container>
            <Link
                to={`/produto/${product.id}`}
                state={{product: product}}
            > 
                <ProductImage src={require('../../../assets/products/' + product.image)}/>
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
        </Container>
    )
}