import React from 'react';
import styled from 'styled-components';

import { Header } from '../../components/header';
import { Gallery } from '../../components/gallery';

const StyledDiv = styled.div`
  margin-left: ${(props) => props.theme.margin.main};
  margin-right: ${(props) => props.theme.margin.main};
  margin-top: ${(props) => props.theme.margin.third};
  padding: 8px;
`;

function Board() {
  return (
    <StyledDiv>
      <Header>Evanoes</Header>
      <Gallery />
    </StyledDiv>
  );
}

export default Board;
