import React, {useState} from "react";
import {
    Container,
    ProductImage,
    Wrapper,
    ProductName,
    LinkBackHome,
    LinkBackHomeTitle
} from "./styles"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import ChooseSize from "./ChooseSize";
import Prices from "./Prices";
import AddButton from "./AddButton";


export default function ProductDetail(props){
    const [selectedSize, setSelectedSize] = useState("");
    const product = props.product;

    return (
        <Container>

            <ProductImage src={require('../../assets/products/' + product.image)}/>

            <Wrapper>

                <ProductName>{product.name}</ProductName>

                <Prices product={product}/>

                <ChooseSize product={product} handleClick={setSelectedSize}/>

                <AddButton product={product} selectedSize={selectedSize} />
                
                <LinkBackHome to="/">
                    <LinkBackHomeTitle><FontAwesomeIcon icon={faArrowLeft} /> Voltar para a lista de produtos</LinkBackHomeTitle>
                </LinkBackHome>

            </Wrapper>
            
        </Container>
    )
}