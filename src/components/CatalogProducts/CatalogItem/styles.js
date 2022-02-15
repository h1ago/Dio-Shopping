import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 300px;
    text-align: center;

    a {
        text-decoration: none;
    }
`;

export const Link = styled.a`
    text-decoration: none;
`;

export const ProductImage = styled.img`
    width: 100%;
    height: 255px;
    object-fit: cover;
    border-radius: 15px;
    box-shadow: 0 4px 25px rgb(48 47 47 / 20%);
`;

export const ProductDiscount = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 45px;
    height: 23px;
    top: 10px;
    right: 13px;
    border-radius: 5px;
    background-color: #10567E;
    color: #fff;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;

`;

export const ProductName = styled.h2`
    color: #212429;
    font-weight: 500;
    margin: 0 0 5px;
    text-transform: uppercase;
`;

export const ProductPriceOld = styled.span`
    margin-right: 6px;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #8b8b8b;
    text-decoration-line: line-through;`;

export const ProductPrice = styled.span`
    color: #212429;
    font-weight: 600;
`;