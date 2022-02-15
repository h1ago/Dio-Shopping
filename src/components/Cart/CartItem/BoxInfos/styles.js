import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    padding: 10px 15px;
`;

export const ProductName = styled.h3`
    color: #212429;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 5px;
    text-transform: uppercase;

`;

export const ProductSize = styled.h3`
    margin-bottom: 20px;
    font-size: 14px;
    color: #8b8b8b;

`;

export const ProductQuantity = styled.div`
    display: flex;
`;

export const ButtonProductQuantity = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    border-radius: 50%;
    padding: 0;

    svg{
        width: 20px !important;
        height: 20px;
        color: #10567E;
    }
`;

export const ProductQuantityNumber = styled.span`
    color: #212429;
    font-size: 16px;
    margin: 0 10px;
`;
