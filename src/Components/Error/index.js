// custom error hook
import useErrorStore from "../../hooks/useErrorStore";
import ErrorIcon from '@mui/icons-material/Error';
import CloseIcon from '@mui/icons-material/Close';
import "./Error.css";

function Error() {
  const { error, clearError } = useErrorStore();
  return (
    <div className={`error ${error.error ? "show" : "hide"}`}>
      <div className = 'error__message'>
        <ErrorIcon className='error__icon'/>
      {error.message.replaceAll("-", " ").toUpperCase()}
      </div>
        <CloseIcon onClick = {clearError} className ='error__icon'/>
    </div>
  );
}

export default Error;
