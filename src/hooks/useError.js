import { useDispatch, useSelector } from "react-redux";
import { selectError, updateError, removeError } from "../features/errorSlice";
import { useCallback } from "react";
function useError() {
  const dispatch = useDispatch();
  const newError = useCallback(
    (error) => dispatch(updateError(error)),
    [dispatch]
  );
  const clearError = useCallback(() => dispatch(removeError()), [dispatch]);
  const error = useSelector(selectError);

  return { error, newError, clearError };
}

export default useError;
