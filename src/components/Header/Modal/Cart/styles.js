import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    position: absolute;
    justify-content: flex-end;
    width: 100%;
    height: 100vh;
    background-color: rgba(16, 86, 126, 0.4);
    overflow-y: auto;
    z-index: 1;
    transition: opacity 0.2s ease;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 750px;
    height: 100vh;

`; 

export const CartHeader = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100px;
    background-color: #fff;
`;

export const ButtonWrapper = styled.div`
    flex: 1 1;
`;

export const ButtonBackArrow = styled.button`
    color: #212429;
    margin-left: 15px;
    font-size: 26px;
    border: none;
    background-color: transparent;
    cursor: pointer;
`;

export const Title = styled.h1`
    color: #212429;
    font-size: 26px;
    font-weight: 600;
    flex: auto;
`;

export const CartBody = styled.div`
    width: 100%;
    height: 100%;
    background-color: #f9f9f9;
`;

export const CartShoppingItem = styled.div`
    padding: 15px 0;
    display: flex;
    flex-direction: row;
/*     justify-content: space-between; */
    align-items: flex-start;
    width: 100%;
    border-bottom: 1px solid #c4c4c4;
    box-sizing: border-box;
`;

export const BoxImage = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    height: 200px;
    padding: 10px 15px;
`;

export const ProductImage = styled.img`
    height: 95%;
    border-radius: 15px;
    box-shadow: 0 4px 60px rgb(48 47 47 / 20%);
`;

export const ButtonDelete = styled.button`
    width: 100%;
    margin: 5px 0;
    border: none;
    color: #10567E;
    background-color: transparent;
    text-align: center;
    font-weight: 600;
    cursor: pointer;
`;

export const BoxInfos = styled.div`
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
    color: #8b8b8b;
`;


export const CartFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    background-color: #10567E;

`;

export const Subtotal = styled.span`
    font-size: 20px;
    font-weight: 600;
    color: #fff;
`;