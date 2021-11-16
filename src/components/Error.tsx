import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { errorSelector, isErrorShowingSelector } from 'redux/selectors';
import { Button } from 'styles';
import { hideError } from 'redux/actions';

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-weight: 600;
  text-transform: capitalize;
  padding: 2em;
  background: ${({ theme }) => theme.lightGrey};
  ${({ theme }) => theme.shadow.dark};
  border-radius: 5px;
  z-index: 1000;
  letter-spacing: 3px;
`;

export const Error = (): JSX.Element => {
  const dispatch = useDispatch();
  const errorApp = useSelector(errorSelector);
  const isErrorShowing = useSelector(isErrorShowingSelector);

  const [error, setError] = useState(errorApp);

  useEffect(() => {
    setError(errorApp);
  }, [errorApp]);
  return (
    <>
      {isErrorShowing && error && (
        <Wrapper>
          <h1>uooops... something is wrong...</h1>
          <p>{error}</p>
          <Button onClick={() => dispatch(hideError())}>close</Button>
        </Wrapper>
      )}
    </>
  );
};
