import React, {useEffect} from "react"
import { Container, WrapperCategory, WrapperFooter, WrapperHeader, WrapperCatalogProducts } from './styles';
import Category from "../../components/Category";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CatalogProducts from "../../components/CatalogProducts";

export default function Home(){

    return (
        <>
            <Container>
                <WrapperHeader>
                    <Header/>
                </WrapperHeader>

                <WrapperCategory>
                    <Category/>
                </WrapperCategory>

                <WrapperCatalogProducts>
                    <CatalogProducts/>
                </WrapperCatalogProducts>

                <WrapperFooter>
                    <Footer/>
                </WrapperFooter>

            </Container>
        </>
    )
}