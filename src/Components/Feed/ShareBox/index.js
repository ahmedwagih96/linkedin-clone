import "./ShareBox.css"
// Components
import ShareBoxForm from "./ShareBoxForm";
import ShareInputOptions from './ShareInputOptions'
function ShareBox() {
  return (
    <div className="feed__shareBox">
      <ShareBoxForm/>
      <ShareInputOptions/>
    </div>
  );
}

export default ShareBox;
