import "./Widgets.css";

import { Info, FiberManualRecord } from "@mui/icons-material";
function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecord />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>
      {newsArticle('New Js Features', 'Top news -- 999 readers')}
      {newsArticle('Next.js 13 is out', 'Top news -- 456 readers')}
      {newsArticle('Advanced TypeScript', 'Top news -- 854 readers')}
      {newsArticle('Tidy up your ES6 imports', 'Top news -- 999 readers')}
      {newsArticle('All about JavaScript events', 'Top news -- 999 readers')}
    </div>
  );
}

export default Widgets;
