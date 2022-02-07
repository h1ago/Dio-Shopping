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
    AddButton


} from "./styles"

import image from '../../assets/products/brasil.jpg'

export default function ProductDetail(){

    const [selectedSize, setSelectedSize] = useState("");

    const handleClickButton = (e) => {setSelectedSize(e)};

    return (
        <Container>

            <ProductImage src={image} />
            <WrapperDetails>

                <ProductName>CAMISA SUEDE SPAN</ProductName>

                <DetailPrices>
                    <ProductPrice>R$ 189,90</ProductPrice>
                    <ProductInstallment>3x R$ 63,30</ProductInstallment>
                </DetailPrices>

                <FieldChooseSize>

                    <FieldChooseSizeTitle>Escolha o tamanho:</FieldChooseSizeTitle>

                    <FieldChooseSizeButtonWrapper>
                        <FieldChooseSizeTitleButton onClick={ () => handleClickButton("P")  } active={selectedSize} >P</FieldChooseSizeTitleButton>
                        <FieldChooseSizeTitleButton onClick={ () => handleClickButton("M")  } active={selectedSize} >M</FieldChooseSizeTitleButton>
                    </FieldChooseSizeButtonWrapper>

                </FieldChooseSize>

                <AddButton>ADICIONAR À SACOLA</AddButton>

            </WrapperDetails>

        </Container>
    )
}