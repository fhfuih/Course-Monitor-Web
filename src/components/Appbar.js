import React from 'react'
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import IconButton from '@material-ui/core/IconButton'
import MenuIcon from 'mdi-material-ui/Menu';
import GithubCircleIcon from 'mdi-material-ui/GithubCircle';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem'

import AppDrawer from "./AppDrawer";

const styles = {
  appTitle: {
    paddingLeft: 10
  },
  loadingBar: {
    zIndex: 2000,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
};

class Appbar extends React.PureComponent {
  state = {
    drawerOpen: false,
  };

  onCloseDrawer = () => {
    this.setState({ drawerOpen: false });
  };

  onToggleDrawer = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  };

  render() {
    const { classes } = this.props;
    const { drawerOpen } = this.state;
    return (
      <>
        <AppBar position='absolute' color='primary'>
          {this.props.loading && <LinearProgress color='secondary' variant='query' classes={classes.loadingBar}/>}

          <Toolbar>
            <IconButton color='inherit' onClick={this.onToggleDrawer}>
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' color='inherit' className={classes.appTitle}>
              HKUST Course Monitor
            </Typography>
          </Toolbar>
        </AppBar>
        <AppDrawer open={drawerOpen} onClose={this.onCloseDrawer} />
      </>
    )
  }
}

function mapStateToProps(state) {
  return {
    loading: state.loading
  }
}

export default withStyles(styles)(connect(mapStateToProps)(Appbar))