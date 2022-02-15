import React from "react";
import { useSelector } from 'react-redux';
import { Container, Wrapper, CartBody } from "./styles";
import CartHeader from "./CartHeader";
import CartItem from "./CartItem";
import CartFooter from "./CartFooter";

export default function Cart(props){
    const {productsCart} = useSelector( state => state.cart );

    return (
        <Container>

            <Wrapper>

                <CartHeader closeModal={props.closeModal} cartLength={productsCart.length} />

                <CartBody>

                    {
                        productsCart.map( (product, index) => (
                            <CartItem key={index} product={product}/>
                        ) )
                    }
                    
                    
                </CartBody>               

                <CartFooter productsCart={productsCart} />

            </Wrapper>

        </Container>
    )
}