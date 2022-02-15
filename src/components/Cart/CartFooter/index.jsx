import React from "react";
import {Container, Subtotal} from "./styles"


export default function CartFooter(props){

    const amount = props.productsCart.reduce( (total, next) =>
            (total +=
            next.quantity *
            Number(next.actual_price.replace(/R\$ /g, "").replace(",", "."))),
            0
        ).toFixed(2);

    
    return (
        <Container>
            <Subtotal>Subtotal: R$ {amount}</Subtotal>
        </Container>
    )
}