import React from 'react'
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton'
import MenuIcon from 'mdi-material-ui/Menu';
import GithubCircleIcon from 'mdi-material-ui/GithubCircle';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem'

const styles = theme => ({
  grow: {
    flexGrow: 1
  },
  appTitle: {
    paddingLeft: 10
  }
})

class Appbar extends React.PureComponent {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget
    });
  }

  handleClose = () => {
    this.setState({
      anchorEl: null
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <AppBar position='absolute' color='primary'>
        {this.props.loading && <LinearProgress color='secondary' style={{zIndex: 2000}}/>}

        <Toolbar>
          <IconButton 
            color='inherit' 
            disabled
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' color='inherit' className={classes.appTitle}>
            Course Monitor
          </Typography>
          <div className={classes.grow} />
          <IconButton 
            color='inherit'
            aria-owns={this.state.anchorEl ? 'github-dropdown' : undefined}
            aria-haspopup='true'
            onClick={this.handleClick}
          >
            <GithubCircleIcon />
          </IconButton>
          <Menu
            id='github-dropdown'
            open={Boolean(this.state.anchorEl)}
            anchorEl={this.state.anchorEl}
            onClose={this.handleClose}
          >
            <MenuItem onClick={this.handleClose}>
              <a href='https://github.com/ppfish45/Course-Monitor/' target='_blank' rel='noopener noreferrer'>Core scripts</a>
            </MenuItem>
            <MenuItem onClick={this.handleClose}>
              <a href='https://github.com/fhfuih/Course-Monitor-Web/' target='_blank' rel='noopener noreferrer'>Web UI</a>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    )
  }
}

function mapStateToProps(state) {
  return {
    loading: state.loading
  }
}

export default withStyles(styles)(connect(mapStateToProps)(Appbar))