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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";


export default function ProductDetail(props){
    const product = props.product;
    const [selectedSize, setSelectedSize] = useState("");
    const handleClickButton = (e) => {setSelectedSize(e)};

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
                                    onClick={ () => handleClickButton(elementSize.size)  } 
                                    active={selectedSize}
                                >
                                    {elementSize.size}
                                </FieldChooseSizeTitleButton>
                            ))
                        }

                    </FieldChooseSizeButtonWrapper>

                </FieldChooseSize>

                <AddButton>ADICIONAR À SACOLA</AddButton>
                <LinkBackHome to="/">
                    <LinkBackHomeTitle><FontAwesomeIcon icon={faArrowLeft} /> Voltar para a lista de produtos</LinkBackHomeTitle>
                </LinkBackHome>

            </WrapperDetails>
            
        </Container>
    )
}