import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useAppSelector, useAppDispatch } from '../../hooks/stores';
import {
  getTripsAsync,
  selectTripsByHighLight,
  selectTripsByUnHighLight,
  selectStatus,
} from '../../stores/travel/travelSlice';

import { Cards } from '../../components/card';
import { Highlight } from '../../components/highlight';

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  @media (max-width: ${(props) => props.theme.device.mobile.max}) {
    justify-content: center;
  }
`;

const Gallery = () => {
  const highLightedCards = useAppSelector(selectTripsByHighLight);
  const unHighLightedCards = useAppSelector(selectTripsByUnHighLight);
  const status = useAppSelector(selectStatus);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTripsAsync());
  }, []);

  return (
    <StyledContainer>
      {status !== 'loading' ? (
        <>
          {highLightedCards.length > 0 && Highlight(highLightedCards)}
          {Cards(unHighLightedCards)}
        </>
      ) : (
        <p>Cards is on loading</p>
      )}
    </StyledContainer>
  );
};

export default Gallery;
