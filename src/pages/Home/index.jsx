import React from "react"
import Category from "../../components/Category"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Products from "../../components/Products"
import { Container, WrapperCategory, WrapperFooter, WrapperHeader, WrapperProducts } from './styles'



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

                <WrapperProducts>
                    <Products/>
                </WrapperProducts>

                <WrapperFooter>
                    <Footer/>
                </WrapperFooter>

            </Container>
        </>
    )
}