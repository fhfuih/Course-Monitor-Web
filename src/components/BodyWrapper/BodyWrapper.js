import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from './AppBar';
import AppDrawer from './AppDrawer';
import Footer from './Footer';

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  container: {
    width: '80%',
    margin: '0 auto',
    padding: theme.spacing(1),
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(2),
  },
});

class BodyWrapper extends Component {
  state = {
    drawerOpen: false,
  };

  onCloseDrawer = () => this.setState({ drawerOpen: false });

  onToggleDrawer = () => this.setState(state => ({ drawerOpen: !state.drawerOpen }));

  render() {
    const { classes, children } = this.props;
    const { drawerOpen } = this.state;
    return (
      <>
        <CssBaseline />
        <AppBar onMenuClick={this.onToggleDrawer} />
        <AppDrawer open={drawerOpen} onClose={this.onCloseDrawer} />
        <div className={classes.toolbar} />
        <main className={classes.container}>
          {children}
          <Footer />
        </main>
      </>
    );
  }
}

BodyWrapper.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default withStyles(styles)(BodyWrapper);
