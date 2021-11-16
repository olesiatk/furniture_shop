import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

type PropsType = {
  hide: () => void;
};
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 110;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.primaryColor};
  opacity: 0.5;
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 120;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`;

const ModalBox = styled.div`
  z-index: 100;
  background: ${({ theme }) => theme.mainWhite};
  position: relative;
  margin: 3em auto;
  border-radius: 5px;
  max-width: 320px;
  padding: 2em;
  text-align: center;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CloseButton = styled.button`
  font-size: 1.5em;
  color: ${({ theme }) => theme.lightBrown};
  background: ${({ theme }) => theme.mainWhite};
  cursor: pointer;
  border: none;
`;

const Image = styled.img`
  width: 100%;
  object-fit: contain;
`;

const ModalWindow = ({ hide }: PropsType): JSX.Element => (
  <>
    <Overlay />
    <Wrapper tabIndex={-1}>
      <ModalBox>
        <Header>
          <CloseButton type="button" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </CloseButton>
        </Header>
        <h4>Great choice!</h4>
        <Image
          src="https://img.icons8.com/bubbles/2x/good-quality.png"
          alt="thank you"
        />
      </ModalBox>
    </Wrapper>
  </>
);

export const Modal: React.FC<PropsType> = (props: PropsType) =>
  createPortal(ModalWindow(props), document.getElementById('modal') as HTMLElement);
