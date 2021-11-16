import { RootState } from 'redux/reducers';

export const errorSelector = (state: RootState): string => state.error.error;
export const isErrorShowingSelector = (state: RootState): boolean =>
  state.error.isErrorShowing;
