import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    height: 100px;
`;

export const ColoredText = styled.span`
    color: ${props => props.color};
`;

export const ProfilePicture = styled.img`
    width: 12rem;
    height: 12rem;
    border-radius: 50%;
`;

export const ProfilePictureContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 12rem;
    height: 12rem;
    &:after{
        content: '';
        display: block;
        position: absolute;
        transform: translate(120%, 150%);
        background-color: #378D54;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        z-index: 200;
    }
`;

export const Description = styled.div`
    text-align: right;
    font-weight: 300;
    font-size: 1.5rem;
    line-height: 1.5;
`;