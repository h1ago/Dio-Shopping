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

import { useSelector, useDispatch } from 'react-redux';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import image from '../../../../assets/products/brasil.jpg'


export default function Cart(props){

    const {productsCart} = useSelector( state => state.cart );
    const dispatch = useDispatch();

    const amount = productsCart.reduce( (total, next) =>
            (total +=
            next.quantity *
            Number(next.actual_price.replace(/R\$ /g, "").replace(",", "."))),
            0
        ).toFixed(2);

    
    return (
        <Container>

            <Wrapper>

                <CartHeader>
                    <ButtonWrapper>
                        <ButtonBackArrow onClick={props.closeModal} ><FontAwesomeIcon icon={faArrowLeft} /></ButtonBackArrow>
                    </ButtonWrapper>
                
                    <Title>Sacola ({productsCart.length})</Title>
                </CartHeader>

                <CartBody>

                    {
                        productsCart.map( (product, index) => (
                            <CartShoppingItem key={index}>

                                <BoxImage>
                                
                                    <ProductImage src={require('../../../../assets/products/' + product.image)}/>
                                    <ButtonDelete
                                        onClick={
                                            () => {
                                                dispatch({
                                                    type:'REMOVE_PRODUCT',
                                                    payload: {product}
                                                })
                                            }
                                        }
                                    >
                                        Remover Item</ButtonDelete>

                                </BoxImage>

                                <BoxInfos>
                                    <ProductName>{product.name}</ProductName>
                                    <ProductSize>{product.size}</ProductSize>
                                    <ProductQuantity>
                                        <ButtonProductQuantity
                                            onClick={
                                                () => {
                                                    dispatch({
                                                        type:'REMOVE_QUANTITY',
                                                        payload: {product}
                                                    })
                                                }
                                            }
                                        ><FontAwesomeIcon icon={faMinusCircle} /></ButtonProductQuantity>
                                        <ProductQuantityNumber>{product.quantity}</ProductQuantityNumber>
                                        <ButtonProductQuantity
                                            onClick={
                                                () => {
                                                    dispatch({
                                                        type:'ADD_QUANTITY',
                                                        payload: {product}
                                                    })
                                                }
                                            }
                                        ><FontAwesomeIcon icon={faPlusCircle} /></ButtonProductQuantity>

                                    </ProductQuantity>
                                </BoxInfos>

                                <BoxPrice>
                                    <ProductPrice>{product.actual_price}</ProductPrice>
                                    <ProductPriceInstallment>{product.installments}</ProductPriceInstallment>
                                </BoxPrice>

                            </CartShoppingItem>
                        ) )
                    }
                    
                    
                </CartBody>               

                <CartFooter>
                    <Subtotal>Subtotal: R$ {amount}</Subtotal>
                </CartFooter>

            </Wrapper>

        </Container>
    )
}