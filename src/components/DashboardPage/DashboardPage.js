import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {
  setLoading as setLoadingAction,
  requestSemesters as requestSemestersAction,
  requestCourses as requestCoursesAction,
  requestSections as requestSectionsAction,
  requestQuota as requestQuotaAction,
} from '../../redux/actions';
import BodyWrapper from '../BodyWrapper/BodyWrapper';
import MainDropdown from './MainDropdown';
import QuotaChart from './QuotaChart';
import reactSelectDataType from '../../propTypes/reactSelectDataType';

const styles = {
  paper: {
    padding: '2rem',
  },
};

class DashboardPage extends Component {
  componentDidMount() {
    const { requestSemesters } = this.props;
    requestSemesters();
  }

  componentDidUpdate(prevProps) {
    const { semester: prevSemester, course: prevCourse, section: prevSection } = prevProps;
    const { semester, course, section, requestCourses, requestSections, requestQuota } = this.props;
    if (semester && semester.value && (!prevSemester || prevSemester.value !== semester.value)) {
      requestCourses();
    }
    if (course && course.value && (!prevCourse || prevCourse.value !== course.value)) {
      requestSections();
    }
    if (section && section.value && (!prevSection || prevSection.value !== section.value)) {
      requestQuota();
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <BodyWrapper>
        <Grid container spacing={3} justify="center">
          <Grid item xs={12}>
            <MainDropdown />
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <QuotaChart />
            </Paper>
          </Grid>
          <Grid item xs={12} />
        </Grid>
      </BodyWrapper>
    );
  }
}

DashboardPage.propTypes = {
  classes: PropTypes.object.isRequired,
  semester: reactSelectDataType,
  course: reactSelectDataType,
  section: reactSelectDataType,
  requestSemesters: PropTypes.func.isRequired,
  requestCourses: PropTypes.func.isRequired,
  requestSections: PropTypes.func.isRequired,
  requestQuota: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    semester: state.semester,
    course: state.course,
    section: state.section,
    loading: state.loading,
    startTime: state.startTime,
    endTime: state.endTime,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setLoading: (value) => dispatch(setLoadingAction(value)),
    requestSemesters: (data) => dispatch(requestSemestersAction(data)),
    requestCourses: (data) => dispatch(requestCoursesAction(data)),
    requestSections: (data) => dispatch(requestSectionsAction(data)),
    requestQuota: (data) => dispatch(requestQuotaAction(data)),
  };
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(DashboardPage));
