import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background-color: #000;
    flex-direction: column;
    padding: 20px;
    position: relative;
`;

export const Image = styled.img`
    height: 100px;
    margin: 10px;
`;

export const IFrame = styled.iframe`
    border: 3px solid #ffffff20;
    height: ${(props) => props.h};
    position: ${(props) => props.r};
    width: ${(props) => props.w};
    transition: 0.5s;
`;

export const Fullscreen = styled.button`
    position: ${(props) => {
        props.r;
    }};
    z-index: 2000;
    margin: 10px;
    margin-top: auto;
    margin-left: auto;
    color: #fff;
    border: 0px;
    background: #ffffff20;
    height: 50px;
    padding: 5px;
    border-radius: ${(props) => (props.brd ? "10px" : "0 0 5px 5px")};
    transition:0.5s
`;
