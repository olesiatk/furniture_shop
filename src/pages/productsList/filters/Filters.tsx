import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Button } from 'styles';
import { ProductType } from 'assets/products_mock_data';
import { SearchBar, PriceFilter, SortSelector } from './components';
import { filterProducts, useDebounce } from 'utils';

const FilterTitle = styled.h5`
  margin: 0;
  text-transform: capitalize;
  letter-spacing: 1px;
`;

const FiltersComponent = styled.div`
  margin: 1.5em;
`;

type PropsType = {
  products: ProductType[];
  setProducts: (args: ProductType[]) => void;
};

export const Filters: React.FC<PropsType> = ({
  products,
  setProducts,
}: PropsType) => {
  const [defaultProducts] = useState(products);
  const minPriceDefault =
    defaultProducts.length > 1
      ? defaultProducts
          .reduce((product1, product2) =>
            product1.price < product2.price ? product1 : product2
          )
          .price.toString()
      : '0';
  const maxPriceDefault =
    defaultProducts.length > 1
      ? defaultProducts
          .reduce((product1, product2) =>
            product1.price > product2.price ? product1 : product2
          )
          .price.toString()
      : '0';
  const [sortOption, setSortOption] = useState('');
  const [minPrice, setMinPrice] = useState(minPriceDefault);
  const [maxPrice, setMaxPrice] = useState(maxPriceDefault);
  const [query, setQuery] = useState('');

  const debouncedQuery = useDebounce(query);

  useEffect(() => {
    filterProducts({
      defaultProducts,
      sortOption,
      debouncedQuery,
      minPrice,
      maxPrice,
      setProducts,
    });
  }, [defaultProducts, sortOption, debouncedQuery, minPrice, maxPrice, setProducts]);

  const clearFilters = () => {
    setQuery('');
    setSortOption('');
    setMinPrice(minPriceDefault);
    setMaxPrice(maxPriceDefault);
    setProducts(defaultProducts);
  };

  return (
    <FiltersComponent>
      <FilterTitle>Search by name</FilterTitle>
      <SearchBar query={query} setQuery={setQuery} />
      <FilterTitle>Sort</FilterTitle>
      <SortSelector sortOption={sortOption} setSortOption={setSortOption} />
      <FilterTitle>Price</FilterTitle>
      <PriceFilter
        minPrice={minPrice}
        maxPrice={maxPrice}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
        minPriceDefault={minPriceDefault}
        maxPriceDefault={maxPriceDefault}
      />
      <Button onClick={clearFilters}>clear filters</Button>
    </FiltersComponent>
  );
};
