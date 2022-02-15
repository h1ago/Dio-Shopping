import React from "react";
import {useDispatch} from 'react-redux';
import {Button} from "./styles"

export default function AddButton(props){
    const dispatch = useDispatch();
    const product = props.product;
    product.size = props.selectedSize;

    return (
        <Button 
            onClick={
                        () => {
                            dispatch({
                                type: 'ADD_TO_CATALOG',
                                payload: {product: {
                                    id: product.id,
                                    name: product.name,
                                    image: product.image,
                                    size: product.size,
                                    actual_price: product.actual_price,
                                    installments: product.installments,
                                    quantity: 1
                                } }
                            });
                        }
            }
        >
            ADICIONAR À SACOLA
        </Button>
    )
}