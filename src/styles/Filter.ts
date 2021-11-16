import styled from 'styled-components';

export const SearchInput = styled.input`
  background: ${({ theme }) => theme.mainGrey};
  width: 100%;
  padding: 0.5em 1em;
  border-color: transparent;
  letter-spacing: 1px;
  border-radius: 3px;
  display: block;
  margin: 1em 0 1em;
`;

export const Select = styled.select`
  background: ${({ theme }) => theme.mainGrey};
  margin: 1em 0;
  padding: 0.5em;
  border-color: transparent;
  letter-spacing: 1px;
  border-radius: 3px;
`;

export const RangeInput = styled.input`
  background: ${({ theme }) => theme.mainGrey};
  width: 100%;
`;

export const Slider = styled.div`
  width: 100%;
  margin: 2em auto;
  position: relative;
  input[type='range'] {
    position: absolute;
    left: 0;
    bottom: 0;
    -webkit-appearance: none;
    width: 100%;
  }
  input[type='range']:focus {
    outline: none;
  }
  input[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 0.25em;
    cursor: pointer;
    animate: 0.2s;
    background: ${({ theme }) => theme.primaryColor};
    border: 0;
  }
  input[type='range']::-webkit-slider-thumb {
    z-index: 2;
    position: relative;
    border: 1px solid ${({ theme }) => theme.primaryColor};
    height: 18px;
    width: 18px;
    border-radius: 25px;
    background: ${({ theme }) => theme.lightBrown};
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -7px;
  }
  input[type='range']::-moz-range-track {
    width: 100%;
    height: 0.25em;
    cursor: pointer;
    animate: 0.2s;
    background: ${({ theme }) => theme.primaryColor};
    border: 0;
  }
  input[type='range']::-moz-range-thumb {
    z-index: 2;
    position: relative;
    border: 1px solid ${({ theme }) => theme.primaryColor};
    height: 18px;
    width: 18px;
    border-radius: 25px;
    background: ${({ theme }) => theme.lightBrown};
    cursor: pointer;
  }
  input[type='range']::-ms-track {
    width: 100%;
    height: 0.25em;
    cursor: pointer;
    animate: 0.2s;
    background: ${({ theme }) => theme.primaryColor};
    border: 0;
  }
`;
