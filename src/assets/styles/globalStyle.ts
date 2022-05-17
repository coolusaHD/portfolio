import styled from 'styled-components';
import { keyframes } from 'styled-components';

export const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`;

export const AboutMeDescription = styled.p`
  font-size: 1.1rem;
  font-weight: 300;
  line-height: 1.5;
  margin: 0;
  padding: 0;
  text-align: left;
`;

export const SiteContent = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
`;

interface ScrollIndicatorProps {
  readonly bg: string;
  readonly color: string;
  readonly ref: any;
}

export const Section = styled.div<ScrollIndicatorProps>`
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  min-height: 200px;
  padding: 20px 10px;
`;

const scroll = keyframes`
  0%{
    opacity: 1;
  }
  100%{
    opacity: 0;
    transform: translateY(2rem);
  }
`;

interface ScrollIndicatorProps {
  readonly color: string;
  readonly opacity: number;
}

export const ScrollIndicator = styled.div<ScrollIndicatorProps>`
  &:before {
    position: absolute;
    left: 50%;
    content: '';
    width: 8px;
    height: 8px;
    background: ${(props) => props.color};
    margin-left: -4px;
    top: 0.5rem;
    border-radius: 4px;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-name: ${scroll};
  }
  width: 2rem;
  height: 3rem;
  margin-left: -20px;
  top: 50%;
  margin-top: -0.7rem;
  box-shadow: 0px 0px 1px ${(props) => props.color};
  border-radius: 525px;
  position: fixed;
  left: 50%;
  top: 90%;
  opacity: ${(props) => props.opacity};
`;

export const ProjectList = styled.div`
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
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`;

export const SourceDescription = styled.div`
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
  &:hover {
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
  background-color: #fafafa;
  border-radius: 12px;
  padding: 5px;
`;

interface ColoredTextProps {
  readonly color: string;
}

export const ColoredText = styled.span<ColoredTextProps>`
  color: ${(props) => props.color};
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
  &:after {
    content: '';
    display: block;
    position: absolute;
    transform: translate(120%, 150%);
    background-color: #378d54;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    z-index: 200;
  }
`;

export const ProfileDescription = styled.div`
  text-align: right;
  font-weight: 300;
  font-size: 1.5rem;
  line-height: 1.5;
`;
