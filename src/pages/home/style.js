import styled from "styled-components";

export const StyledContainer = styled.div`
    padding-top: 36px;
    max-width: 1000px;
    width: 90%;
    margin: 0 auto;
    height: 100vh;

    .destaque{
        display: flex;
        justify-content: space-between;
        height: 45vh;
    }

    .destaque__esquerda{
        width: 45%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 24px;
    }
    
    .destaque__esquerda > h2{
        font-family: 'Inter';
        font-style: normal;
        font-weight: var(--font-weight-2);
        font-size: var(--font-size-1);
    }

    .destaque__esquerda > h2 > span{
        color: var(--primary-color-1);
    }
    
    .destaque__esquerda > p{
        font-family: 'Inter';
        font-style: normal;
        font-weight: var(--font-weight-4);
        font-size: var(--font-size-4);
    }

    .destaque__esquerda > a{
        font-family: 'Inter';
        font-style: normal;
        font-weight: var(--font-weight-2);
        font-size: var(--font-size-4);   
        text-decoration: none;  
        color: var(--color-grey-6); 
    }

    .destaque__direita{
        width: 45%;
    }
    
    .destaque__direita > img{
        width: 100%;
        height: 100%;
    }
`