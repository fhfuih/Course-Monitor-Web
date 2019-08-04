import PropTypes from 'prop-types';

export default PropTypes.shape({
  timestamp: PropTypes.number.isRequired,
  avail: PropTypes.number.isRequired,
  enroll: PropTypes.number.isRequired,
  quota: PropTypes.number.isRequired,
  wait: PropTypes.number.isRequired,
});
