import React from "react"
import { Container, Title, TitleClub } from "./styles"
import mock from '../../service/mock.json';

export default function Category(){
    const listProducts = mock;
    const listCategory = listProducts.filter(product => product.name_category);

    return (
        <Container>
            <Title>CATEGORIAS</Title>

            {   
                listCategory.map((category, index) => {
                    return (<TitleClub key={index} >{category.name_category}</TitleClub>)
                })
            }
        </Container>
    )
}