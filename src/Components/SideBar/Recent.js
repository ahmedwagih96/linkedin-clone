
function Recent() {
  const renderRecentItems = () => {
    return ["reactjs", "programming", "software engineering", "remotework"].map(
      (topic) => (
        <div key={topic} className="sidebar__recentItems">
          <span className="sidebar__hash">#</span>
          <p>{topic}</p>
        </div>
      )
    );
  };
  return (
    <div className="sidebar__recent">
    <p style={{ fontWeight: "bold" }}>Recent</p>
    {renderRecentItems()}
  </div>
  )
}

export default Recent