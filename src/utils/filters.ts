import { ProductType } from 'assets/products_mock_data';

type FilterProps = {
  defaultProducts: ProductType[];
  debouncedQuery: string;
  minPrice: string;
  maxPrice: string;
  sortOption: string;
  setProducts: (arg: ProductType[]) => void;
};

export const sortAlphabetically = (basicProducts: ProductType[]): ProductType[] => {
  const renewProducts = [...basicProducts];
  return renewProducts.sort((product1, product2) =>
    product1.name.localeCompare(product2.name)
  );
};

const sortByOldest = (basicProducts: ProductType[]) => {
  const renewProducts = [...basicProducts];
  return renewProducts.sort((product1, product2) => product1.date - product2.date);
};

const sortByNewest = (basicProducts: ProductType[]) => {
  const renewProducts = [...basicProducts];
  return renewProducts.sort((product1, product2) => product2.date - product1.date);
};

const sortByLowPrice = (basicProducts: ProductType[]) => {
  const renewProducts = [...basicProducts];
  return renewProducts.sort((product1, product2) => product1.price - product2.price);
};

const sortByHighPrice = (basicProducts: ProductType[]) => {
  const renewProducts = [...basicProducts];
  return renewProducts.sort((product1, product2) => product2.price - product1.price);
};

const sortProducts = (
  filteredProducts: ProductType[],
  sortOption: string,
  setProducts: (arg: ProductType[]) => void
) => {
  switch (sortOption) {
    case 'oldest':
      setProducts(sortByOldest(filteredProducts));
      break;
    case 'newest':
      setProducts(sortByNewest(filteredProducts));
      break;
    case 'lowPrice':
      setProducts(sortByLowPrice(filteredProducts));
      break;
    case 'highPrice':
      setProducts(sortByHighPrice(filteredProducts));
      break;
    default:
      setProducts(filteredProducts);
  }
};

export const filterProducts = ({
  defaultProducts,
  debouncedQuery,
  minPrice,
  maxPrice,
  sortOption,
  setProducts,
}: FilterProps): void => {
  const filteredProducts = [...defaultProducts].filter(
    (product) =>
      product.name.toLowerCase().includes(debouncedQuery.toLowerCase()) &&
      product.price >= +minPrice &&
      product.price <= +maxPrice
  );

  sortProducts(filteredProducts, sortOption, setProducts);
};
