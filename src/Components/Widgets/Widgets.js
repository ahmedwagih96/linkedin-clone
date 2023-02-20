import "./Widgets.css";
import { Info, FiberManualRecord } from "@mui/icons-material";

import { articles } from "./articles";

function Widgets() {
  const renderArticles = () => {
    return articles.map(({ heading, subtitle }) => (
      <div key={heading} className="widgets__article">
        <div className="widgets__articleLeft">
          <FiberManualRecord />
        </div>
        <div className="widgets__articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    ));
  };
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>
      {renderArticles()}
    </div>
  );
}

export default Widgets;
