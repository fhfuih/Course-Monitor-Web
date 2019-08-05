import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import AppBarComponent from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.modal + 1,
  },
  appTitle: {
    marginLeft: theme.spacing(1),
  },
  loadingBar: {
    zIndex: theme.zIndex.tooltip,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
});

function AppBar({ classes, loading, onMenuClick }) {
  return (
    <AppBarComponent position="absolute" color="primary" className={classes.appBar}>
      {loading && (
        <LinearProgress color="secondary" variant="query" className={classes.loadingBar} />
      )}
      <Toolbar>
        <IconButton color="inherit" onClick={onMenuClick}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="h1" color="inherit" className={classes.appTitle}>
          HKUST Course Monitor
        </Typography>
      </Toolbar>
    </AppBarComponent>
  );
}

AppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  onMenuClick: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    loading: state.loading,
  };
}

export default withStyles(styles)(connect(mapStateToProps)(AppBar));
