import React from "react";
import {
    Container,
    ProductPrice,
    ProductInstallment,
} from "./styles"


export default function ProductDetail(props){
    const product = props.product;

    return (
        <Container>
            <ProductPrice>{product.actual_price}</ProductPrice>
            <ProductInstallment>{product.installments}</ProductInstallment>
        </Container>
    )
}