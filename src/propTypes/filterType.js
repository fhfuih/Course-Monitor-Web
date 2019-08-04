import PropTypes from 'prop-types';

export default PropTypes.shape({
  quota: PropTypes.bool.isRequired,
  avail: PropTypes.bool.isRequired,
  wait: PropTypes.bool.isRequired,
});
