import React, { useState } from 'react';
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
  const [filter, setFilter] = useState('');
  return (
    <StyledDiv>
      <Header setFilter={setFilter}>Evanoes</Header>
      <Gallery filter={filter} />
    </StyledDiv>
  );
}

export default Board;
