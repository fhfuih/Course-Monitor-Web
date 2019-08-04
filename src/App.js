import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {
  setLoading,
  updateSemesterList,
  updateCourseList,
  updateSectionList,
  updateQuota,
} from './actions';
import requests from './requests';
import Appbar from './components/Appbar';
import MainDropdown from './components/MainDropdown';
import QuotaChart from './components/QuotaChart';
import Footer from './components/Footer';
import reactSelectDataType from './propTypes/reactSelectDataType';

const styles = {
  content: {
    margin: '74px 16px 0 16px',
    padding: '0 10%',
  },
  paper: {
    padding: '2rem',
  },
};

class App extends Component {
  componentDidMount() {
    this.requestSemesters();
  }

  componentDidUpdate(prevProps) {
    const { semester: prevSemester, course: prevCourse, section: prevSection } = prevProps;
    const { semester, course, section } = this.props;
    if (semester && semester.value && (!prevSemester || prevSemester.value !== semester.value)) {
      this.requestCourses();
    }
    if (course && course.value && (!prevCourse || prevCourse.value !== course.value)) {
      this.requestSections();
    }
    if (section && section.value && (!prevSection || prevSection.value !== section.value)) {
      this.requestQuota();
    }
  }

  requestSemesters = async () => {
    const { setLoading: set, updateSemesters } = this.props;
    set(true);
    const json = await requests.semester();
    if (json) {
      updateSemesters(json.data);
    }
    set(false);
  };

  requestSections = async () => {
    const { setLoading: set, updateSections, semester, course } = this.props;
    set(true);
    const json = await requests.section(semester.value, course.value);
    if (json) {
      updateSections(json.data);
    }
    set(false);
  };

  requestCourses = async () => {
    const { setLoading: set, updateCourses, semester } = this.props;
    set(true);
    const json = await requests.course(semester.value);
    if (json) {
      updateCourses(json.data);
    }
    set(false);
  };

  requestQuota = async () => {
    const { setLoading: set, updateQuota: update, semester, course, section } = this.props;
    set(true);
    const json = await requests.quota(semester.value, course.value, section.value);
    if (json) {
      update(json.data);
    }
    set(false);
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <CssBaseline />
        <Appbar />
        <main className={classes.content}>
          <Grid container spacing={3} justify="center">
            <Grid item xs={12}>
              <MainDropdown />
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <QuotaChart />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Footer />
            </Grid>
          </Grid>
        </main>
      </div>
    );
  }
}

App.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
  semester: reactSelectDataType,
  course: reactSelectDataType,
  section: reactSelectDataType,
  setLoading: PropTypes.func.isRequired,
  updateSemesters: PropTypes.func.isRequired,
  updateCourses: PropTypes.func.isRequired,
  updateSections: PropTypes.func.isRequired,
  updateQuota: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    semester: state.semester,
    course: state.course,
    section: state.section,
    loading: state.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setLoading: value => dispatch(setLoading(value)),
    updateSemesters: data => dispatch(updateSemesterList(data)),
    updateCourses: data => dispatch(updateCourseList(data)),
    updateSections: data => dispatch(updateSectionList(data)),
    updateQuota: data => dispatch(updateQuota(data)),
  };
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(App),
);
