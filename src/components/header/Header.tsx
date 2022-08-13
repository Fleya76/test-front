import React from 'react';
import styled from 'styled-components';

interface StyledHeaderType {
  readonly withBackground: boolean;
}

const StyledHeader = styled.header<StyledHeaderType>`
  ${(props) =>
    props.withBackground && `background-color: ${props.theme.colors.veraneos};`}
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 2.4rem;
  margin-bottom: 2%;
  min-width: 200px;
  width: 100%;
  @media (max-width: ${(props) => props.theme.device.mobile.max}) {
    padding: 5%;
  }
  @media (min-width: ${(props) =>
      props.theme.device.tablet.min}) and (max-width: ${(props) =>
      props.theme.device.tablet.max}) {
    padding: 3%;
  }
  @media (min-width: ${(props) => props.theme.device.desktop.min}) {
    padding: 1%;
  }
`;

interface HeaderType {
  children: string;
  withBackground?: boolean;
}

const Header = ({ children, withBackground = true }: HeaderType) => {
  return (
    <StyledHeader withBackground={withBackground}>{children}</StyledHeader>
  );
};

export default Header;
