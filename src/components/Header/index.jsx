import React, {useState} from 'react';
import { Container, Logo, Nav, CartButton } from './styles';
import Modal from './Modal';
import logo from '../../assets/logo.png';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

export default function Header(){

    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

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

            <CartButton onClick={openModal} hancount={0}>
                <FontAwesomeIcon icon={faShoppingBag} />
            </CartButton>

            <Modal showCart={showModal} closeModal={closeModal}>

            </Modal>

        </Container>
    )
}