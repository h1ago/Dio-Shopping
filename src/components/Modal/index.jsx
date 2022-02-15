import React from "react"
import ReactDOM from "react-dom";
import Cart from '../Cart'
import { Container } from "./styles"

export default function Modal(props){
    
    const component = (
        <>
            {
                props.showCart
                ? <Cart closeModal={props.closeModal} />
                : <Container></Container>
            }
        </>
    );

    return ReactDOM.createPortal( 
        component,
        document.getElementById("modal-root")
    )
}