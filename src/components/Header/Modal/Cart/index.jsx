import React from "react"
import { 
    Container, 
    Wrapper,
    CartHeader,
    ButtonWrapper,
    CartBody,
    CartShoppingItem,
    BoxImage,
    ProductImage,
    ButtonDelete,
    BoxInfos,
    ProductName,
    ProductSize,
    ProductQuantity,
    ProductQuantityNumber,
    ButtonProductQuantity,
    BoxPrice,
    ProductPrice,
    ProductPriceInstallment,

    CartFooter,
    Title,
    ButtonBackArrow,
    Subtotal
} from "./styles"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import image from '../../../../assets/products/brasil.jpg'

export default function Cart(props){
    
    return (
        <Container>

            <Wrapper>

                <CartHeader>
                    <ButtonWrapper>
                        <ButtonBackArrow onClick={props.closeModal} ><FontAwesomeIcon icon={faArrowLeft} /></ButtonBackArrow>
                    </ButtonWrapper>
                
                    <Title>Sacola (1)</Title>
                </CartHeader>

                <CartBody>

                    <CartShoppingItem>

                        <BoxImage>
                        
                            <ProductImage src={image}/>
                            <ButtonDelete>Remover Item</ButtonDelete>

                        </BoxImage>

                        <BoxInfos>
                            <ProductName>ÓCULOS DE SOL AVIADOR VINTAGE</ProductName>
                            <ProductSize>M</ProductSize>
                            <ProductQuantity>
                                <ButtonProductQuantity><FontAwesomeIcon icon={faMinusCircle} /></ButtonProductQuantity>
                                <ProductQuantityNumber>2</ProductQuantityNumber>
                                <ButtonProductQuantity><FontAwesomeIcon icon={faPlusCircle} /></ButtonProductQuantity>

                            </ProductQuantity>
                        </BoxInfos>

                        <BoxPrice>
                            <ProductPrice>R$ 49,90</ProductPrice>
                            <ProductPriceInstallment>1x R$ 49,90</ProductPriceInstallment>
                        </BoxPrice>

                    </CartShoppingItem>
                    
                    
                </CartBody>               

                <CartFooter>
                    <Subtotal>Subtotal: R$ 99,90</Subtotal>
                </CartFooter>

            </Wrapper>

        </Container>
    )
}