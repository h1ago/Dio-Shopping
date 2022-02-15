import React from "react";
import { useDispatch } from 'react-redux';
import { Container, ProductImage, ButtonDelete } from "./styles"

export default function BoxImage(props){
    const dispatch = useDispatch();
    const product = props.product;

    return (
        <Container>
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
                Remover Item
            </ButtonDelete>
        </Container>
    )
}