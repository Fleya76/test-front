import React from 'react';
import styled from 'styled-components';

interface StyledContainerType {
  readonly tag: string;
}

interface TagType {
  name: string;
}

const StyledContainer = styled.div<StyledContainerType>`
  background-color: ${(props) => handleColorType(props.tag)};
  border-radius: 30px;
  font-weight: bold;
  margin: 3%;
  padding: 3%;
  position: absolute;
  z-index: 1;
`;

const handleColorType = (tag: string) => {
  switch (tag) {
    case 'group':
      return '#46c1fa';
    case 'combined':
      return '#baf789';
    default:
      return '#fff';
  }
};

const handleTextType = (tag: string) => {
  switch (tag) {
    case 'group':
      return 'Voyage en groupe';
    case 'combined':
      return 'Multi-destination';
    default:
      return '';
  }
};

const Tag = ({ name }: TagType) => {
  return <StyledContainer tag={name}>{handleTextType(name)}</StyledContainer>;
};

export default Tag;
