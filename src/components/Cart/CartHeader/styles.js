import styled from "styled-components";

export const Container = styled.div`
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