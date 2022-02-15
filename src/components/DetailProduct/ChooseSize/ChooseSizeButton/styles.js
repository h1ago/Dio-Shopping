import styled from "styled-components";

export const CircleButton = styled.button`
    width: 44px;
    height: 44px;
    border-radius: 50px;
    margin-right: 10px;
    font-size: 20px;
    background-color: ${(props) => (props.selected === props.children ? "#10567E" : "#f9f9f9") };
    color: ${(props) => props.selected === props.children  ? "#fff" : "#000" };
    border: 2px solid #10567E;
    cursor: pointer;
`;