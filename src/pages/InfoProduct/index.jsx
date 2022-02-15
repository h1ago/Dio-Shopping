import React from "react";
import { useLocation } from "react-router-dom";
import { Container, WrapperFooter, WrapperHeader, WrapperBody } from './styles';
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import DetailProduct from '../../components/DetailProduct';

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
                    <DetailProduct product={productSelected}/>
                </WrapperBody>

                <WrapperFooter>
                    <Footer/>
                </WrapperFooter>

            </Container>
        </>
    )
}
