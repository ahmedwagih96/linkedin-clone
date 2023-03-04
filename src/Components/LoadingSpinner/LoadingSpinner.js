import { InfinitySpin } from "react-loader-spinner";
import "./LoadingSpinner.css";
function LoadingSpinner() {
  return (
    <div className="loading__spinner">
      <InfinitySpin width="200" color="#0074b1" />
    </div>
  );
}

export default LoadingSpinner;
