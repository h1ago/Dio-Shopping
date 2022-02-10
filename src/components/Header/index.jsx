import React, {useState} from 'react';
import { Container, Logo, Nav, CartButton } from './styles';
import Modal from './Modal';
import logo from '../../assets/logo.png';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

export default function Header(){

    const productsCart = useSelector( state => state.cart.productsCart );

    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    console.log(productsCart);
    console.log(productsCart.length);

    return(
        <Container>

            <Logo>
                <img src={logo} />
            </Logo>

            <Nav>
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><a href='#'>CONTATO</a></li>
                </ul>
            </Nav>

            <CartButton onClick={openModal} count={productsCart.length}>
                <FontAwesomeIcon icon={faShoppingBag} />
            </CartButton>

            <Modal showCart={showModal} closeModal={closeModal}>

            </Modal>

        </Container>
    )
}