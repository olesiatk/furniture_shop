import produce from 'immer';

import { SET_ERROR, HIDE_ERROR } from 'redux/actionTypes';

interface InitialStateType {
  error: string;
  isErrorShowing: boolean;
}

const initialState: InitialStateType = {
  error: '',
  isErrorShowing: false,
};

export const errorReducer = produce((draft, action): InitialStateType => {
  const { type, payload } = action;
  switch (type) {
    case SET_ERROR:
      draft.error = payload.error;
      draft.isErrorShowing = true;
      return draft;
    case HIDE_ERROR:
      draft.isErrorShowing = false;
      return draft;
    default:
      return draft;
  }
}, initialState);
