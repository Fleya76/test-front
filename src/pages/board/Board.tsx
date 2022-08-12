import React from 'react';
import styled from 'styled-components';

import { Card } from '../../components/card';
import { Header } from '../../components/header';

const StyledDiv = styled.div`
  padding: 8px;
  margin: ${(props) => props.theme.margin.main};
`;

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  @media (min-width: ${(props) =>
      props.theme.device.mobile.min}) and (max-width: ${(props) =>
      props.theme.device.mobile.max}) {
    justify-content: center;
  }
`;

function Board() {
  return (
    <StyledDiv>
      <Header>Evanoes</Header>
      <StyledContainer>
        <Card
          id={1479}
          picture="https://static1.evcdn.net/images/reduction/1103742_w-1000_h-625_q-60_m-crop.jpg"
          title="Taj Mahal, palais, tigres et dunes"
          price={1410}
          duration={15}
        />{' '}
        <Card
          id={1479}
          picture="https://static1.evcdn.net/images/reduction/1103742_w-1000_h-625_q-60_m-crop.jpg"
          title="Taj Mahal, palais, tigres et dunes"
          price={1410}
          duration={15}
        />{' '}
        <Card
          id={1479}
          picture="https://static1.evcdn.net/images/reduction/1103742_w-1000_h-625_q-60_m-crop.jpg"
          title="Taj Mahal, palais, tigres et dunes"
          price={1410}
          duration={15}
        />{' '}
        <Card
          id={1479}
          picture="https://static1.evcdn.net/images/reduction/1103742_w-1000_h-625_q-60_m-crop.jpg"
          title="Taj Mahal, palais, tigres et dunes"
          price={1410}
          duration={15}
        />{' '}
        <Card
          id={1479}
          picture="https://static1.evcdn.net/images/reduction/1103742_w-1000_h-625_q-60_m-crop.jpg"
          title="Taj Mahal, palais, tigres et dunes"
          price={1410}
          duration={15}
        />
      </StyledContainer>
    </StyledDiv>
  );
}

export default Board;
