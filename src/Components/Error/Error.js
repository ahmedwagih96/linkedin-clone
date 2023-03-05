// custom error hook
import useError from "../../hooks/useError";
import ErrorIcon from '@mui/icons-material/Error';
import CloseIcon from '@mui/icons-material/Close';
import "./Error.css";

function Error() {
  const { error, clearError } = useError();
  return (
    <div className={`error ${error.error ? "show" : "hide"}`}>
      <div className = 'error__message'>
        <ErrorIcon className='error__icon'/>
      {error.message}
      </div>
        <CloseIcon onClick = {clearError} className ='error__icon'/>
    </div>
  );
}

export default Error;
