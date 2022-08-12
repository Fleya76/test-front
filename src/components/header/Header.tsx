import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.colors.veraneos};
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 2.4rem;
  margin-bottom: 2%;
  min-width: 200px;
  width: 100%;
  @media (min-width: ${(props) =>
      props.theme.device.mobile.min}) and (max-width: ${(props) =>
      props.theme.device.mobile.max}) {
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

const Header = (props: { children: string }) => {
  return <StyledHeader>{props.children}</StyledHeader>;
};

export default Header;
