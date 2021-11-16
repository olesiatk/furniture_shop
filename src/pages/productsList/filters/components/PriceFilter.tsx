import React from 'react';
import styled from 'styled-components';

import { RangeInput, Slider } from 'styles';

const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Price = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2em;
`;

type PropsType = {
  minPrice: string;
  maxPrice: string;
  setMinPrice: (arg: string) => void;
  setMaxPrice: (arg: string) => void;
  minPriceDefault: string;
  maxPriceDefault: string;
};

export const PriceFilter = ({
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
  minPriceDefault,
  maxPriceDefault,
}: PropsType): JSX.Element => (
  <PriceBox>
    <Price>
      <span>min: {minPrice} $</span>
      <span>max: {maxPrice} $</span>
    </Price>
    <Slider>
      <RangeInput
        type="range"
        min={minPriceDefault}
        max={maxPriceDefault}
        step="1000"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />
      <RangeInput
        type="range"
        min={minPriceDefault}
        max={maxPriceDefault}
        step="1000"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
    </Slider>
  </PriceBox>
);
