import React from "react"
import {
    Container, 
    Card,
    Link,
    ProductImage, 
    ProductDiscount, 
    ProductName, 
    ProductPriceOld, 
    ProductPrice 
} from "./styles"

import image from '../../assets/products/brasil.jpg'


export default function Products(){

    return (
        <Container>

            <Card>
                <Link href="#">
                    <ProductImage src={image}/>
                    <ProductDiscount>- 50%</ProductDiscount>
                    <ProductName>Brasil 2022</ProductName>
                    <ProductPriceOld>R$ 149,90</ProductPriceOld>
                    <ProductPrice>R$ 99,90</ProductPrice>

                </Link>
            </Card>
        
        
            
            
        </Container>
    )
}