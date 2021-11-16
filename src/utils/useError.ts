import { useDispatch } from 'react-redux';
import { setError } from 'redux/actions';

export const useError = () => {
  const dispatch = useDispatch();

  const showError = (error: string) => {
    dispatch(setError(error));
  };
  return { showError };
};
