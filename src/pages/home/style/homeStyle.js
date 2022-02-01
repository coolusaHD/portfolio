import styled from "styled-components";
import { keyframes } from "styled-components";

export const SiteContent = styled.div`
    display: flex;
    height:100%;
    flex-direction: column;
    justify-content: flex-start;
`;

export const Section = styled.div`

    background-color: ${props => props.bg};
    color: ${props => props.color};
    min-height: 200px;
    padding: 20px 10px;
`;

const scroll = keyframes`
  0%{
    opacity: 1;
  }
  100%{
    opacity: 0;
    transform: translateY(46px);
  }
`;

export const ScrollIndicator = styled.div`
    &:before{
        position: absolute;
        left: 50%;
        content: '';
        width: 8px;
        height: 8px;
        background: #fff;
        margin-left: -4px;
        top: 8px;
        border-radius: 4px;
        animation-duration: 1.5s;
        animation-iteration-count: infinite;
        animation-name: ${scroll};
    }
    width: 40px;
    height: 70px;
    margin-left: -20px;
    top: 50%;
    margin-top: -35px;
    box-shadow: 0px 0px 1px #fff;
    border-radius: 525px;
    position: fixed;
    left: 50%;
    top: 90%;
    opacity: ${props => props.opacity};
`;


    