import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

const styles = {
  container: {
    position: 'relative',
    bottom: 0,
  },
};

const currentYear = new Date().getFullYear();

class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Typography align="center" color="textSecondary" component="footer" variant="caption">
          Copyright &copy; {currentYear} XIA Junzhe, HUANG, Zeyu. Built with{' '}
          <span role="img" aria-label="love">
            ❤️
          </span>
        </Typography>
      </div>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
