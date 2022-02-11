import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 15vh minmax(70vh, auto) 8vh;
    grid-gap: 1vh;
`;

export const WrapperHeader = styled.div`
    box-shadow: 0 1px 5px rgb(48 47 47 / 20%);
    
`;

export const WrapperBody = styled.div`
    margin-top: 20px;
    padding: 40px;
    
`;
export const WrapperFooter = styled.div`

`;