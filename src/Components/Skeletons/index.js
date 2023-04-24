// Animation
import "./Skeletons.css";

const Skeletons = () => {
  return (
    <div className="skeleton animate-pulse">
      <div className="skeleton__header">
        <div className="skeleton__avatar" />
        <div className="skeleton__info" />
      </div>
      <div className="skeleton__body" />
    </div>
  );
};

export default Skeletons;
