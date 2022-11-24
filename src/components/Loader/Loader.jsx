import { RotatingLines } from 'react-loader-spinner';
import PropTypes from 'prop-types';

const Loader = ({ size }) => {
  return (
    <>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="3"
        animationDuration="0.75"
        width={size}
        visible={true}
      />
    </>
  );
};

export default Loader;

Loader.propTypes = {
  size: PropTypes.string.isRequired,
};
