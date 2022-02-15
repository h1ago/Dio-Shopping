import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    margin: auto;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    height: auto;
`;

export const ProductImage = styled.img`
    max-width: 412px;
    background: none;
    box-shadow: 0 4px 60px rgb(0 0 0 / 20%);
    border-radius: 15px;
    object-fit: contain;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* width: 100%; */
    padding: 10px 15px;
`;

export const ProductName = styled.h3`
    font-size: 20px;
    color: #212429;
    font-weight: 600;
    margin-bottom: 10px;
    text-align: center;
    text-transform: uppercase;
`;

export const LinkBackHome = styled(Link)`
    display: flex;
    width: 100%;
    margin-block-start: auto;
    text-decoration: none;
`;
export const LinkBackHomeTitle = styled.p`
    color: #10567E;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;

    svg{
        margin-right: 20px;
    }
`;
