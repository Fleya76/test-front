import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  border: 1px solid ${(props) => props.theme.colors?.['paper-darker']};
  min-width: 250px;
  position: relative;
  width: calc(33% - 8px);
`;
const StyledHeader = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 62.5%;
`;
const StyledCover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;
const StyledTitle = styled.p`
  color: ${(props) => props.theme.colors.ink};
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 2.4rem;
`;

const StyledBody = styled.div`
  height: 130px;
  width: 100%;
  padding: 24px 16px 16px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledDetail = styled.div`
  color: ${(props) => props.theme.colors?.['ink-light']};
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
`;

const StyledDuration = styled.span`
  margin-right: 4px;
`;

const StyledPrice = styled.span`
  padding-left: 4px;
  border-left: 1px solid ${(props) => props.theme.colors?.['paper-darker']};
`;

const StyledPriceValue = styled.span`
  color: ${(props) => props.theme.colors.blue};
  font-weight: bold;
`;

const Card = ({ id, picture, title, price, duration }: any) => {
  return (
    <StyledCard data-testid={`itinerary-card-${id}`}>
      <StyledHeader>
        <StyledCover
          style={{ backgroundImage: `url(${picture})` }}
        ></StyledCover>
      </StyledHeader>
      <StyledBody>
        <StyledTitle>{title}</StyledTitle>
        <StyledDetail>
          <StyledDuration>{'Environ ' + duration + ' jours'}</StyledDuration>
          <StyledPrice>
            {'à partir de '}
            <StyledPriceValue>{price}</StyledPriceValue>
            {' €'}
          </StyledPrice>
        </StyledDetail>
      </StyledBody>
    </StyledCard>
  );
};

export default Card;
