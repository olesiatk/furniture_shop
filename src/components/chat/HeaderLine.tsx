import React, { SetStateAction } from 'react';
import styled from 'styled-components';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { IoMdOpen } from 'react-icons/io';

const Wrapper = styled.div`
  height: 2em;
  background: ${({ theme }) => theme.secondPrimaryColor};
  text-align: right;
`;
const SvgIcon = styled.div`
  svg {
    height: 100%;
    width: 2em;
    color: ${({ theme }) => theme.mainGrey};
    cursor: pointer;
  }
`;

interface PropsType {
  isShowingChat: boolean;
  setIsShowingChat: React.Dispatch<SetStateAction<boolean>>;
}

export const HeaderLine = ({ isShowingChat, setIsShowingChat }: PropsType) => (
  <Wrapper>
    <SvgIcon onClick={() => setIsShowingChat(!isShowingChat)}>
      {isShowingChat ? <AiOutlineCloseCircle /> : <IoMdOpen />}
    </SvgIcon>
  </Wrapper>
);
