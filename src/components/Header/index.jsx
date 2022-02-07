import { Container, Logo, Nav, CartButton } from './styles'
import logo from '../../assets/logo.png'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

export default function Header(){
    return(
        <Container>

            <Logo>
                <img src={logo} />
            </Logo>

            <Nav>
                <ul>
                    <li><a href='#'>HOME</a></li>
                    <li><a href='#'>CONTATO</a></li>
                </ul>
            </Nav>

            <CartButton count={0}>
                <FontAwesomeIcon icon={faShoppingBag} />
            </CartButton>

        </Container>
    )
}