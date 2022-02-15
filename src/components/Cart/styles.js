import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    position: absolute;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
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

export const CartBody = styled.div`
    width: 100%;
    height: 100%;
    background-color: #f9f9f9;
`;