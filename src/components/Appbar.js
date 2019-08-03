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
  grow: {
    flexGrow: 1
  },
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
    anchorEl: null,
    drawerOpen: false,
  };

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null
    });
  };

  onCloseDrawer = () => {
    this.setState({ drawerOpen: false });
  };

  onToggleDrawer = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl, drawerOpen } = this.state;
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
            <div className={classes.grow} />
            <IconButton
              color='inherit'
              aria-owns={anchorEl ? 'github-dropdown' : undefined}
              aria-haspopup='true'
              onClick={this.handleClick}
            >
              <GithubCircleIcon />
            </IconButton>
            <Menu
              id='github-dropdown'
              open={Boolean(anchorEl)}
              anchorEl={anchorEl}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.handleClose}>
                <Link
                  color='inherit'
                  underline='none'
                  href='https://github.com/ppfish45/Course-Monitor/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Scraper
                </Link>
              </MenuItem>
              <MenuItem onClick={this.handleClose}>
                <Link
                  color='inherit'
                  underline='none'
                  href='https://github.com/fhfuih/Course-Monitor-Web/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Web UI
                </Link>
              </MenuItem>
            </Menu>
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