import { useState } from 'react';

export type ModalType = {
  isShowing: boolean;
  toggle: () => void;
};

export const useModal = (): ModalType => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle,
  };
};
