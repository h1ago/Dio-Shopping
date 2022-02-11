import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Container, WrapperFooter, WrapperHeader, WrapperBody } from './styles';


export default function Contact(){
    

    return (
        <>
            <Container>
                <WrapperHeader>
                    <Header/>
                </WrapperHeader>

                <WrapperBody>
                  
                </WrapperBody>

                <WrapperFooter>
                    <Footer/>
                </WrapperFooter>

            </Container>
        </>
    )
}
