import React from 'react';

import { Select } from 'styles';

type PropsType = {
  sortOption: string;
  setSortOption: (arg: string) => void;
};

export const SortSelector = ({
  sortOption,
  setSortOption,
}: PropsType): JSX.Element => (
  <Select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
    <option value="">choose option:</option>
    <option value="oldest">Oldest</option>
    <option value="newest">Newest</option>
    <option value="lowPrice">Lowest price</option>
    <option value="highPrice">Highest price</option>
  </Select>
);
