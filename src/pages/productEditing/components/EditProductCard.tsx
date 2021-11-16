import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { getSchemaValidations } from 'utils';
import { Button, ProductCardComponent } from 'styles';
import { ImageUploader, Input, TextArea } from 'components';
import { pathConstants } from 'projectConstants';
import { productsAlphabeticallySelector } from 'redux/selectors';
import { ProductType, NewProductType } from 'assets/products_mock_data';
import {
  addNewProductInit,
  updateProductsInit,
} from 'redux/actions/productsActions';

const { PRODUCT_EDIT } = pathConstants;

export const Form = styled.form`
  max-width: 100%;
  background: ${({ theme }) => theme.lightBrown};
  padding: 1em;
  color: ${({ theme }) => theme.secondPrimaryColor};
  text-align: center;
`;

type FormType = {
  name: string;
  price: number;
  description: string;
  image: string;
};

const emptyProduct = {
  name: '',
  price: 0,
  description: '',
  image: '',
};

export const EditProductCard = (): JSX.Element => {
  const history = useHistory();
  const { id }: { id: string } = useParams();
  const products = useSelector(productsAlphabeticallySelector);
  const dispatch = useDispatch();

  const createdProduct = products.find((product: ProductType) => product.id === id);

  const [defaultProduct] = useState(createdProduct || emptyProduct);
  const { name, price, description, image } = defaultProduct;

  const saveProduct = (newProduct: NewProductType) => {
    history.push(PRODUCT_EDIT);
    if (newProduct.id) {
      dispatch(updateProductsInit(newProduct));
      return;
    }
    dispatch(addNewProductInit(newProduct));
  };

  const { register, errors, handleSubmit, setValue } = useForm<FormType>({
    resolver: yupResolver(getSchemaValidations(['name', 'price', 'description'])),
    defaultValues: {
      name,
      price,
      description,
    },
  });
  const submit = (data: FormType) => {
    if (createdProduct) {
      saveProduct({ ...data, id });
      return;
    }
    saveProduct(data);
  };

  return (
    <ProductCardComponent>
      <Form onSubmit={handleSubmit(submit)}>
        <ImageUploader
          name="image"
          image={image}
          errors={errors}
          register={register}
          setValue={setValue}
        />
        <Input name="name" errors={errors} register={register} />
        <Input name="price" errors={errors} register={register} />
        <TextArea name="description" errors={errors} register={register} />
        <Button width="100%" uppercase type="submit">
          save product
        </Button>
      </Form>
    </ProductCardComponent>
  );
};
