import styled from "styled-components";

export const MeContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    @media screen and (max-width: 900px) and (min-width: 600px){
        background-color: red;
    }
    @media(max-width: 600px){
        min-height: 80vh;
        background-color: green;
    }
`

export const Span = styled.span`
    color: tomato;
`
export const H1 = styled.h1`
    color: ${({night}) => night ? "white": "black"};
    text-align: center;
    padding: 0 4rem 3rem 4rem;
    @media screen and (max-width: 900px) and (min-width: 600px){
        padding: 0 3rem 2rem 3rem;
        font-size: 1.8rem;
    }
    @media(max-width: 600px){
        padding: 0 2rem 2rem 2rem;
        font-size: 1.5rem;
    }
`
export const Img = styled.img`
    height: 60vh;
    @media screen and (max-width: 900px) and (min-width: 600px){
        height: 50vh;
    }
    @media(max-width: 600px){
        height: 40vh;
    }
`