import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 0.7fr 3fr;
    grid-template-rows: auto auto auto;
    grid-gap: 1vh;
`;

export const WrapperHeader = styled.div`
    grid-column-start: 1;
    grid-column-end: 3;
    box-shadow: 0 1px 5px rgb(48 47 47 / 20%);
    
`;

export const WrapperBody = styled.div`
    margin-top: 20px;
    grid-column-start: 1;
    grid-column-end: 3;
`;
export const WrapperFooter = styled.div`
    margin-top: 50px;
    grid-column-start: 1;
    grid-column-end: 3;

`;