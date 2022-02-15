import styled from "styled-components";

export const Container = styled.div`
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