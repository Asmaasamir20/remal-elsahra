import PropTypes from "prop-types";

export const MultilayerCardV_1 = ({ children }) => {
  return (
    <div className="relative h-full ">
      {/* Clean Background - خلفية نظيفة */}
      <div className="relative h-full">{children}</div>
    </div>
  );
};

MultilayerCardV_1.propTypes = {
  children: PropTypes.node.isRequired,
};
