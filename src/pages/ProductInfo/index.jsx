import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Container, WrapperFooter, WrapperHeader, WrapperBody } from './styles';

import ProductDetail from '../../components/ProductDetail';

import { useLocation } from "react-router-dom";

export default function ProductInfo(){
    const location = useLocation();
    const productSelected = location.state.product;

    return (
        <>
            <Container>
                <WrapperHeader>
                    <Header/>
                </WrapperHeader>

                <WrapperBody>
                    <ProductDetail product={productSelected}/>
                </WrapperBody>

                <WrapperFooter>
                    <Footer/>
                </WrapperFooter>

            </Container>
        </>
    )
}
