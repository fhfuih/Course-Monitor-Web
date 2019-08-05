import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import FilterIcon from '@material-ui/icons/MoreVert';
import { toggleFilter } from '../../actions';
import pref from '../../preference';
import filterType from '../../propTypes/filterType';

const styles = theme => ({
  root: {
    position: 'absolute',
    right: '-1rem',
    top: '-1rem',
    zIndex: theme.zIndex.drawer,
  },
  avail: {
    color: pref.quotaChartStyle.avail,
    '&$checked': {
      color: pref.quotaChartStyle.avail,
    },
  },
  wait: {
    color: pref.quotaChartStyle.wait,
    '&$checked': {
      color: pref.quotaChartStyle.wait,
    },
  },
  quota: {
    color: pref.quotaChartStyle.quota,
    '&$checked': {
      color: pref.quotaChartStyle.quota,
    },
  },
  checked: {},
});

class QuotaChartFilter extends PureComponent {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null,
    });
  };

  render() {
    const { classes, toggleAvail, toggleWait, toggleQuota, filter } = this.props;
    const { anchorEl } = this.state;
    const opened = Boolean(anchorEl);
    return (
      <div className={classes.root}>
        <IconButton
          aria-label="filter"
          aria-owns={opened ? 'filter-menu' : undefined}
          aria-haspopup
          onClick={this.handleClick}
        >
          <FilterIcon />
        </IconButton>
        <Menu id="filter-menu" anchorEl={anchorEl} open={opened} onClose={this.handleClose}>
          <MenuItem onClick={toggleAvail}>
            <Checkbox
              checked={filter.avail}
              disableRipple
              disableTouchRipple
              classes={{ root: classes.avail, checked: classes.checked }}
            />
            <ListItemText primary="Avail" />
          </MenuItem>
          <MenuItem onClick={toggleWait}>
            <Checkbox
              checked={filter.wait}
              disableRipple
              disableTouchRipple
              classes={{ root: classes.wait, checked: classes.checked }}
            />
            <ListItemText primary="Wait" />
          </MenuItem>
          <MenuItem onClick={toggleQuota}>
            <Checkbox
              checked={filter.quota}
              disableRipple
              disableTouchRipple
              classes={{ root: classes.quota, checked: classes.checked }}
            />
            <ListItemText primary="Quota" />
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

QuotaChartFilter.propTypes = {
  classes: PropTypes.object.isRequired,
  filter: filterType.isRequired,
  toggleAvail: PropTypes.func.isRequired,
  toggleWait: PropTypes.func.isRequired,
  toggleQuota: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    filter: state.filter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleAvail: () => dispatch(toggleFilter('avail')),
    toggleWait: () => dispatch(toggleFilter('wait')),
    toggleQuota: () => dispatch(toggleFilter('quota')),
  };
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(QuotaChartFilter),
);
