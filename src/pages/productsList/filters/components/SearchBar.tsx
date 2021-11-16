import React from 'react';

import { SearchInput } from 'styles';

type PropsType = {
  query: string;
  setQuery: (arg: string) => void;
};

export const SearchBar = ({ query, setQuery }: PropsType): JSX.Element => (
  <SearchInput
    type="text"
    placeholder="search"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
  />
);
