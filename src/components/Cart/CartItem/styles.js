import styled from "styled-components";

export const Container = styled.div`
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    border-bottom: 1px solid #c4c4c4;
    box-sizing: border-box;
`;

export const BoxPrice = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right;
    padding: 10px 15px;
`;

export const ProductPrice = styled.span`
    font-size: 16px;
    color: #212429;
    font-weight: 600;
`;

export const ProductPriceInstallment = styled.span`
    font-size: 16px;
    width: 90px;
    color: #8b8b8b;
`;