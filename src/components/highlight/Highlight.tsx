import React from 'react';
import styled from 'styled-components';

import { TravelObject } from '../../constants/types';
import { Cards } from '../card';
import { Header } from '../header';

const StyledContainer = styled.div`
  border: 1px solid;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  margin-bottom: ${(props) => props.theme.margin.third};
  min-width: 200px;
  padding-left: ${(props) => props.theme.margin.secondary};
  padding-right: ${(props) => props.theme.margin.secondary};
  padding-bottom: ${(props) => props.theme.margin.third};
  width: 100%;
`;

const Highlights = (trips: TravelObject[]) => {
  return (
    <StyledContainer>
      <Header withBackground={false}>Highlights</Header>
      {Cards(trips)}
    </StyledContainer>
  );
};

export default Highlights;
