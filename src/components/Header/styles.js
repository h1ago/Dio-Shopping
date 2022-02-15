import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;

export const Logo = styled.div`
    margin-left: 40px;
    flex-grow: 1;
    text-align: center;
    img {
        max-height: 60px;
    }
`;

export const Nav = styled.nav`
    margin-left: 40px;
    margin-top: 30px;
    flex-grow: 4;
    flex-shrink: 1;

    li{
        display: inline;
        margin-left: 20px;
        font-size: 16pt;
    }

    a{
        text-decoration: none;
        color: #10567E;
        font-weight: 300;
        line-height: 50px;
    }
`;

export const CartButton = styled.button`
    margin-right: 50px;
    margin-top: 30px;
    position: relative;
    cursor: pointer;
    border: none;
    background: transparent;
    font-size: 20pt;
    color: #4B5058;

        &:after {
        position: absolute;
        top: -10%;
        right: -10%;
        width: 1.125rem;
        border: 1px solid #10567E;
        border-radius: 50%;
        background: #10567E;
        color: #fff;
        font-size: 10pt;
        font-weight: 600;
        font-style: normal;
        content: "${props => props.count}";
    }
`;