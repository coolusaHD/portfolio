import styled from "styled-components";


export const MenuNavItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
    &:hover{
        cursor: pointer;
    }
`;

export const MenuNavItemBold = styled.div`
    font-weight: bold;
    font-size: 1.2em;
    text-decoration: none;
    &:hover{
        cursor: pointer;
    }
`;