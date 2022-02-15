import React from "react";
import { 
    Container, 
    BoxPrice,
    ProductPrice,
    ProductPriceInstallment
} from "./styles"

import BoxImage from "./BoxImage";
import BoxInfos from "./BoxInfos";


export default function CartItem(props){
    const product = props.product;

    return (
        <Container>
            
            <BoxImage product={product}/>

            <BoxInfos product={product}/>

            <BoxPrice>
                <ProductPrice>{product.actual_price}</ProductPrice>
                <ProductPriceInstallment>{product.installments}</ProductPriceInstallment>
            </BoxPrice>
        </Container>
    )
}