import styled from "styled-components";


export const SiteContent = styled.div`
    display: flex;
    height:100%;
    flex-direction: column;
    justify-content: flex-start;
`;

export const Section = styled.div`

    background-color: ${props => props.bg};
    min-height: 200px;
    padding: 20px 10px;
`;