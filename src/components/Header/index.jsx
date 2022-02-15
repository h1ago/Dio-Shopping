import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { Container, Logo, Nav, CartButton } from './styles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import Modal from '../Modal';

export default function Header(){

    const productsCart = useSelector( state => state.cart.productsCart );

    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return(
        <Container>

            <Logo>
                <img src={require('../../assets/logo.png')} alt="logo" />
            </Logo>

            <Nav>
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/contato">CONTATO</Link></li>
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