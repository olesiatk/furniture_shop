import React from 'react';

import { Preloader } from './Preloader';

interface PropsType {
  component: React.FC;
  isLoading: boolean;
}

export const PageLoading = ({
  component: Component,
  isLoading,
}: PropsType): JSX.Element => (isLoading ? <Preloader /> : <Component />);
