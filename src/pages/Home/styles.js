import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 0.7fr 3fr;
    grid-template-rows: 15vh minmax(70vh, auto) 8vh;
    grid-gap: 1vh;
`;

export const WrapperHeader = styled.div`
    grid-column-start: 1;
    grid-column-end: 3;
    box-shadow: 0 1px 5px rgb(48 47 47 / 20%);
    
`;
export const WrapperCategory = styled.div`
    background-color: #f3f3f3;
    border: 1px solid #ccc;
    margin-top: 20px;
    margin-left: 20px;
    box-shadow: 0 1px 5px rgb(48 47 47 / 20%);
    grid-column-start: 1;
    grid-column-end: 2;
`;
export const WrapperCatalogProducts = styled.div`
    margin-top: 20px;
    grid-column-start: 2;
    grid-column-end: 3;
`;
export const WrapperFooter = styled.div`

    grid-column-start: 1;
    grid-column-end: 3;
`;