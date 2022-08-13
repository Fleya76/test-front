import React from 'react';
import styled from 'styled-components';

interface StyledHeaderType {
  readonly withBackground: boolean;
}

const StyledHeader = styled.header<StyledHeaderType>`
  display: flex;
  ${(props) =>
    props.withBackground && `background-color: ${props.theme.colors.veraneos};`}
  justify-content: space-between;
  margin-bottom: 2%;
  min-width: 200px;
  width: 100%;
  @media (max-width: ${(props) => props.theme.device.mobile.max}) {
    padding: 5%;
    flex-direction: column;
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

const StyledTitle = styled.span`
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 2.4rem;
  width: 30%;
`;

interface HeaderType {
  children: string;
  setFilter?: any;
  withBackground?: boolean;
}

const Header = ({ children, setFilter, withBackground = true }: HeaderType) => {
  return (
    <StyledHeader withBackground={withBackground}>
      <StyledTitle>{children}</StyledTitle>
      {setFilter && (
        <span>
          <label>Filtre par tag </label>
          <select onChange={(event: any) => setFilter(event.target.value)}>
            <option value="">Aucun tag</option>
            <option value="combined">Multi-destination</option>
            <option value="group">Voyage en groupe</option>
          </select>
        </span>
      )}
    </StyledHeader>
  );
};

export default Header;
