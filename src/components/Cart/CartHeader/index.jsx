import React from "react";
import { 
    Container, 
    ButtonWrapper,
    Title,
    ButtonBackArrow
} from "./styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";


export default function CartHeader(props){

    return (
        <Container>
            <ButtonWrapper>
                <ButtonBackArrow onClick={props.closeModal} ><FontAwesomeIcon icon={faArrowLeft} /></ButtonBackArrow>
            </ButtonWrapper>
                
            <Title>Sacola ({props.cartLength})</Title>
        </Container>
    )
}