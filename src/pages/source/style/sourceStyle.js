import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;
    font-size: 1.1rem;
    font-weight: 300;
    line-height: 1.5;
    margin: 0;
    padding: 0;
    text-align: left;
`;

export const SourceItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    flex-grow: 1;
    flex-wrap: wrap;
    gap: 0.5rem;
    &:hover{
        cursor: pointer;
    }
`;

export const SourceImage = styled.img`
    width: 5rem;
    height: 5rem;    
`;

export const SourceImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 6rem;
    width: 6rem;
    background-color: #fafafa ;
    border-radius: 12px;
    padding: 5px;
`;

