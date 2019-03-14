import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import { toggleFilter } from '../actions'

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import FilterIcon from 'mdi-material-ui/Filter';

import pref from '../preference'

const styles = theme => ({
  root: {
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: theme.zIndex.drawer,
  },
  avail: {
    color: pref.quotaChartStyle.avail,
    '&$checked': {
      color: pref.quotaChartStyle.avail
    }
  },
  wait: {
    color: pref.quotaChartStyle.wait,
    '&$checked': {
      color: pref.quotaChartStyle.wait
    }
  },
  quota: {
    color: pref.quotaChartStyle.quota,
    '&$checked': {
      color: pref.quotaChartStyle.quota
    }
  },
  checked: {}
})

class QuotaChartFilter extends PureComponent {
  state = {
    anchorEl: null
  }
  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget
    })
  }
  handleClose = () => {
    this.setState({
      anchorEl: null
    })
  }
  render() {
    const {anchorEl} = this.state;
    const opened = Boolean(anchorEl);
    return (
      <div className={this.props.classes.root}>
        <IconButton
          color='primary'
          aria-label='more'
          aria-owns={opened ? 'filter-menu' : undefined}
          aria-haspopup={true}
          onClick={this.handleClick}
        >
          <FilterIcon />
        </IconButton>
        <Menu
          id='filter-menu'
          anchorEl={anchorEl}
          open={opened}
          onClose={this.handleClose}
        >
          <MenuItem
            onClick={this.props.toggleAvail}
          >
            <Checkbox 
              checked={this.props.filter.avail}
              disableRipple
              disableTouchRipple
              classes={{root: this.props.classes.avail, checked: this.props.classes.checked}}
            />
            <ListItemText primary='Avail' />
          </MenuItem>
          <MenuItem
            onClick={this.props.toggleWait}
          >
            <Checkbox 
              checked={this.props.filter.wait}
              disableRipple
              disableTouchRipple
              classes={{root: this.props.classes.wait, checked: this.props.classes.checked}}
            />
            <ListItemText primary='Wait' />
          </MenuItem>
          <MenuItem
            onClick={this.props.toggleQuota}
          >
            <Checkbox 
              checked={this.props.filter.quota}
              disableRipple
              disableTouchRipple
              classes={{root: this.props.classes.quota, checked: this.props.classes.checked}}
            />
            <ListItemText primary='Quota' />
          </MenuItem>
        </Menu>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    filter: state.filter
  }
}

function mapDispathToProps(dispatch) {
  return {
    toggleAvail: () => dispatch(toggleFilter('avail')),
    toggleEnroll: () => dispatch(toggleFilter('enroll')),
    toggleWait: () => dispatch(toggleFilter('wait')),
    toggleQuota: () => dispatch(toggleFilter('quota'))
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispathToProps)(QuotaChartFilter));