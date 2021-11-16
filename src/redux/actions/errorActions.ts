import { SET_ERROR, HIDE_ERROR } from 'redux/actionTypes';

type SetErrorType = {
  type: typeof SET_ERROR;
  payload: { error: string };
};
export const setError = (error: string): SetErrorType => ({
  type: SET_ERROR,
  payload: { error },
});

type HideErrorType = {
  type: typeof HIDE_ERROR;
};
export const hideError = (): HideErrorType => ({
  type: HIDE_ERROR,
});
