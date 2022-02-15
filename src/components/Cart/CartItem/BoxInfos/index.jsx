import React from "react";
import { useDispatch } from 'react-redux';
import { 
    Container, 
    ProductName,
    ProductSize,
    ProductQuantity,
    ProductQuantityNumber,
    ButtonProductQuantity
} from "./styles"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";


export default function BoxInfos(props){
    const dispatch = useDispatch();
    const product = props.product;

    return (
        <Container>
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
        </Container>
    )
}