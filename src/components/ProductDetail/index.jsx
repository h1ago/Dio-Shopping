import React, {useState} from "react";
import {
    Container,
    ProductImage,
    WrapperDetails,
    ProductName,
    DetailPrices,
    ProductPrice,
    ProductInstallment,
    FieldChooseSize,
    FieldChooseSizeTitle,
    FieldChooseSizeButtonWrapper,
    FieldChooseSizeTitleButton,
    AddButton,
    LinkBackHome,
    LinkBackHomeTitle


} from "./styles"

import {useDispatch, useSelector} from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";


export default function ProductDetail(props){
    const product = props.product;
    const {cart} = useSelector( state => state.cart );
    const dispatch = useDispatch();
    const [selectedSize, setSelectedSize] = useState("");
    const handleClickButtonSize = (e) => {setSelectedSize(e)};

    return (
        <Container>
            <ProductImage src={require('../../assets/products/' + product.image)}/>
            <WrapperDetails>

                <ProductName>{product.name}</ProductName>

                <DetailPrices>
                    <ProductPrice>{product.actual_price}</ProductPrice>
                    <ProductInstallment>{product.installments}</ProductInstallment>
                </DetailPrices>

                <FieldChooseSize>

                    <FieldChooseSizeTitle>Escolha o tamanho:</FieldChooseSizeTitle>

                    <FieldChooseSizeButtonWrapper>

                        {
                            product.sizes.map( (elementSize, index) => (
                                elementSize.available && 
                                <FieldChooseSizeTitleButton
                                    key={index} 
                                    onClick={ () => handleClickButtonSize(elementSize.size)  } 
                                    active={selectedSize}
                                >
                                    {elementSize.size}
                                </FieldChooseSizeTitleButton>
                            ))
                        }

                    </FieldChooseSizeButtonWrapper>

                </FieldChooseSize>

                <AddButton 
                    onClick={
                        () => {
                            product.size = selectedSize;
                           
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
                                /* payload: {cart: cart} */
                            });
                        }
                    }
                
                >
                    ADICIONAR À SACOLA
                </AddButton>
                
                <LinkBackHome to="/">
                    <LinkBackHomeTitle><FontAwesomeIcon icon={faArrowLeft} /> Voltar para a lista de produtos</LinkBackHomeTitle>
                </LinkBackHome>

            </WrapperDetails>
            
        </Container>
    )
}