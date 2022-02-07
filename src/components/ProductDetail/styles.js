import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    margin: auto;
    width: 700px;
`;

export const ProductImage = styled.img`
    width: 50%;
    height: 40vh;
    background: #333;
    box-shadow: 0 4px 60px rgb(0 0 0 / 20%);
    border-radius: 15px;
`;

export const WrapperDetails = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 10px 15px;
`;

export const ProductName = styled.h3`
    font-size: 20px;
    color: #212429;
    font-weight: 600;
    margin-bottom: 10px;
    text-transform: uppercase;
`;
export const DetailPrices = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 30px;
`;

export const ProductPrice = styled.span`
    font-size: 16px;
    font-weight: 600;
    margin-right: 15px;
`;

export const ProductInstallment = styled.span`
    font-size: 15px;
    color: #8b8b8b;
`;

export const FieldChooseSize = styled.div`
    display: block;
    margin-bottom: 40px;
`;

export const FieldChooseSizeTitle = styled.span`
    color: #8b8b8b;
    font-size: 16px;
`;

export const FieldChooseSizeButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 13px;
`;

export const FieldChooseSizeTitleButton = styled.button`
    width: 44px;
    height: 44px;
    border-radius: 50px;
    margin-right: 10px;
    font-size: 20px;
    background-color: ${(props) => (props.active === props.children ? "#10567E" : "#f9f9f9") };
    color: ${(props) => props.active === props.children  ? "#fff" : "#000" };
    border: 2px solid #10567E;
    cursor: pointer;
`;

export const AddButton = styled.button`
    border-radius: 50px;
    width: 100%;
    height: 56px;
    text-transform: uppercase;
    font-size: 18px;
    cursor: pointer;
    border: none;
    background-color: #10567E;
    color: #fff;
`;