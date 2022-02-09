import React from "react";
import { Link } from "react-router-dom";
import {
    Container, 
    Card,
    ProductImage, 
    ProductDiscount, 
    ProductName, 
    ProductPriceOld, 
    ProductPrice 
} from "./styles"

import mock from '../../service/mock.json';


export default function Products(){
    const listProducts = mock;

    return (
        <Container>

            {
                listProducts.map( (product, index) => (
                        <Card key={index}>
                            <Link
                                to={`/produto/${product.id}`}
                                state={{product: product}}
                            > 
                                <ProductImage src={require('../../assets/products/' + product.image)}/>
                                {
                                    product.discount_percentage !== "" &&   
                                    <ProductDiscount>- {product.discount_percentage}%</ProductDiscount>
                                }
                                <ProductName>{product.name}</ProductName>
                                
                                {
                                    product.discount_percentage !== "" 
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