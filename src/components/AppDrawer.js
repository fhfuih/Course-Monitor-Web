import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Collapse from "@material-ui/core/Collapse";
import Divider from "@material-ui/core/Divider";
import ChartIcon from '@material-ui/icons/Timeline';
import PersonIcon from '@material-ui/icons/Person';
import InfoIcon from '@material-ui/icons/Info';
import CodeIcon from '@material-ui/icons/Code';
import CloudIcon from '@material-ui/icons/Cloud';
import BrushIcon from '@material-ui/icons/Brush';

const drawerWidth = 280;

const styles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
});

class AppDrawer extends PureComponent {
  state = {
    githubCollapse: false,
  };

  onToggleGithubCollapse = () => {
    this.setState({ githubCollapse: !this.state.githubCollapse });
  };

  render() {
    const { classes, open, onClose } = this.props;
    const { githubCollapse } = this.state;
    return (
      <Drawer open={open} onClose={onClose} className={classes.drawer} classes={{ paper: classes.drawerPaper }}>
        <List>
          <ListItem button>
            <ListItemIcon>
              <ChartIcon/>
            </ListItemIcon>
            <ListItemText primary="Course Monitor" />
          </ListItem>
        </List>

        <Divider />

        <List>
          <ListItem button onClick={this.onToggleGithubCollapse}>
            <ListItemIcon>
              <CodeIcon />
            </ListItemIcon>
            <ListItemText primary="Source Code" />
          </ListItem>
          <Collapse in={githubCollapse} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component="a" href="#" className={classes.nested}>
                <ListItemIcon><CloudIcon /></ListItemIcon>
                <ListItemText primary="Backend Server" />
              </ListItem>
              <ListItem button component="a" href="#" className={classes.nested}>
                <ListItemIcon><BrushIcon /></ListItemIcon>
                <ListItemText primary="Frontend UI" />
              </ListItem>
            </List>
          </Collapse>
        </List>

        <Divider />

        <List>
          <ListItem button>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="Privacy Policy" />
          </ListItem>
        </List>
      </Drawer>
    )
  }
}

AppDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default withStyles(styles)(AppDrawer);
