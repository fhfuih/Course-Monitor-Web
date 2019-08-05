import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { selectSemester, selectCourse, selectSection } from '../../actions';
import reactSelectDataType from '../../propTypes/reactSelectDataType';
import BaseDropdown from './BaseDropdown';

const styles = {
  breadcrumb: {
    position: 'relative',
    top: -5,
  },
  breadcrumbDelimiter: {
    opacity: 0.6,
    margin: '24px 10px 0 10px',
    display: 'inline-block',
  },
};

class _Divider extends PureComponent {
  render() {
    const { classes } = this.props;
    return <span className={classes.breadcrumbDelimiter}>/</span>;
  }
}

_Divider.propTypes = {
  classes: PropTypes.object.isRequired,
};

const Divider = withStyles(styles)(_Divider);

class MainDropdown extends Component {
  render() {
    const {
      classes,
      disabled,
      semesterList,
      semester,
      selectSemester: onSemesterChange,
      courseList,
      course,
      selectCourse: onCourseChange,
      sectionList,
      section,
      selectSection: onSectionChange,
    } = this.props;
    return (
      <Typography component="div" variant="h4" className={classes.breadcrumb}>
        {/* Spring 2019 / MATH1013 / L01 */}
        <form autoComplete="off">
          <BaseDropdown
            text="Semester"
            name="semester"
            disabled={disabled}
            data={semesterList}
            value={semester}
            onChange={onSemesterChange}
          />
          <Divider />
          <BaseDropdown
            text="Course"
            name="course"
            disabled={disabled}
            data={courseList}
            value={course}
            onChange={onCourseChange}
          />
          <Divider />
          <BaseDropdown
            text="Section"
            name="section"
            width={220}
            disabled={disabled}
            data={sectionList}
            value={section}
            onChange={onSectionChange}
          />
        </form>
      </Typography>
    );
  }
}

MainDropdown.propTypes = {
  classes: PropTypes.object.isRequired,
  disabled: PropTypes.bool.isRequired,
  semester: reactSelectDataType,
  course: reactSelectDataType,
  section: reactSelectDataType,
  semesterList: PropTypes.arrayOf(reactSelectDataType).isRequired,
  courseList: PropTypes.arrayOf(reactSelectDataType).isRequired,
  sectionList: PropTypes.arrayOf(reactSelectDataType).isRequired,
  selectSemester: PropTypes.func.isRequired,
  selectCourse: PropTypes.func.isRequired,
  selectSection: PropTypes.func.isRequired,
};

const semesterListSelector = state => state.semesterList;
const courseListSelector = state => state.courseList;
const sectionListSelector = state => state.sectionList;
const getSemesterList = createSelector(
  semesterListSelector,
  l => l.map(s => ({ label: s.name, value: s.semCode })),
);
const getCourseList = createSelector(
  courseListSelector,
  l => l.map(c => ({ label: c, value: c })),
);
const getSectionList = createSelector(
  sectionListSelector,
  l => l.map(s => ({ label: s, value: s })),
);

function mapStateToProps(state) {
  return {
    disabled: state.loading,
    semesterList: getSemesterList(state),
    semester: state.semester,
    courseList: getCourseList(state),
    course: state.course,
    sectionList: getSectionList(state),
    section: state.section,
  };
}

const mapDispatchToProps = {
  selectSemester,
  selectCourse,
  selectSection,
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(MainDropdown),
);
