import React from "react"
import { Container, Title, TitleClub } from "./styles"

export default function Category(){
    return (
        <Container>
            <Title>CATEGORIAS</Title>

            <TitleClub>Clubes Brasileiros (2)</TitleClub>
            <TitleClub>Clubes Europeus (5)</TitleClub>
            <TitleClub>Seleções Internacionais (10)</TitleClub>
        </Container>
    )
}