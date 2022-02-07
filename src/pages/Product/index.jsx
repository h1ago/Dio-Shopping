import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Container, WrapperFooter, WrapperHeader, WrapperBody } from './styles';

import ProductDetail from '../../components/ProductDetail';



export default function Product(){
    return (
        <>
            <Container>
                <WrapperHeader>
                    <Header/>
                </WrapperHeader>

                <WrapperBody>
                    <ProductDetail />
                </WrapperBody>

                <WrapperFooter>
                    <Footer/>
                </WrapperFooter>

            </Container>
        </>
    )
}