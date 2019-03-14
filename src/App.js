import React, { Component, PureComponent } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import { setLoading, updateSemesterList, updateCourseList, updateSectionList, updateQuota } from './actions'

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';


import Appbar from './components/Appbar';
import MainDropdown from './components/MainDropdown';
import QuotaChart from './components/QuotaChart';
import Paper from '@material-ui/core/Paper';

import serverSim from './testData/serverSimulate';
import requests from './requests';

const styles = {
  content: {
    margin: "74px 16px 16px 16px"
  },
  paper: {
    padding: '2rem'
  }
}

class Container extends PureComponent {
  render() {
    return (
      <Grid container spacing={24} justify='center'>
        <Grid item xs={10}>
          {this.props.children}
        </Grid>
      </Grid>
    )
  }
}

class App extends Component {
  requestSemsters = () => {
    this.props.setLoading(true);
    // requests.semester(json => {
    //   this.props.updateSemesters(json.data);
    // }, () => {
    //   this.props.setLoading(false);
    // })
    serverSim('SEMESTER', json => {
      this.props.updateSemesters(json.data);
    })
  }
  requestSections = () => {
    this.props.setLoading(true);
    requests.section(this.props.semester, this.props.course, json => {
      this.props.updateSections(json.data);
    }, () => {
      this.props.setLoading(false);
    })
    // serverSim('SECTION', json => {
    //   this.props.updateSections(json.data);
    // })
  }
  requestCourses = () => {
    this.props.setLoading(true);
    requests.course(this.props.semester, json => {
      this.props.updateCourses(json.data);
    }, () => {
      this.props.setLoading(false);
    })
    // serverSim('COURSE', json => {
    //   this.props.updateCourses(json.data);
    // })
  }
  requestQuota = () => {
    this.props.setLoading(true);
    requests.quota(this.props.semester, this.props.course, this.props.section, json => {
      this.props.updateQuota(json.data);
    }, () => {
      this.props.setLoading(false);
    })
    // serverSim('QUOTA', json => {
    //   this.props.updateQuota(json.data);
    // })
  }
  componentDidMount() {
    this.requestSemsters();
  }
  render() {
    return (
      <div>
        <CssBaseline />
        <Appbar />
        <main className={this.props.classes.content}>
          <Container container spacing={24} justify='center'>
            <MainDropdown 
              requestCourses={this.requestCourses}
              requestSections={this.requestSections}
              requestQuota={this.requestQuota}
            />
            <Paper className={this.props.classes.paper}>
              <QuotaChart />
            </Paper>
          </Container>
        </main>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    semester: state.semester,
    course: state.course,
    section: state.section,
    loading: state.loading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setLoading: value => dispatch(setLoading(value)),
    updateSemesters: data => dispatch(updateSemesterList(data)),
    updateCourses: data => dispatch(updateCourseList(data)),
    updateSections: data => dispatch(updateSectionList(data)),
    updateQuota: data => dispatch(updateQuota(data)),
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(App));
