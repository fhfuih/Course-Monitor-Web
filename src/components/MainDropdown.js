import React, { Component, PureComponent } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';

import { selectSemester, selectCourse, selectSection } from '../actions'
import { createSelector } from 'reselect';

import Typography from '@material-ui/core/Typography';

import BaseDropdown from './BaseDropdown';

const styles = {
  breadcrumb: {
    position: 'relative',
    top: -5
  },
  breadcrumbDelimiter: {
    opacity: 0.6,
    margin: "24px 10px 0 10px",
    display: "inline-block"
  },
};

class _Divider extends PureComponent {
  render() {
    return <span className={this.props.classes.breadcrumbDelimiter}>/</span>;
  }
}

const Divider = withStyles(styles)(_Divider);

class MainDropdown extends Component {
  render() {
    return (
      <Typography component='div' variant='h4' className={this.props.classes.breadcrumb}>
        {/* Spring 2019 / MATH1013 / L01 */}
        <form autoComplete='off'>
          <BaseDropdown 
            text='Semester'
            name='semster'
            disabled={this.props.disabled}
            data={this.props.semesterList}
            value={this.props.semester}
            onChange={this.props.selectSemester}
          />
          <Divider />
          <BaseDropdown 
            text='Course'
            name='course'
            disabled={this.props.disabled}
            data={this.props.courseList}
            value={this.props.course}
            onChange={this.props.selectCourse}
          />
          <Divider />
          <BaseDropdown 
            text='Section'
            name='section'
            disabled={this.props.disabled}
            data={this.props.sectionList}
            value={this.props.section}
            onChange={this.props.selectSection}
          />
        </form>
      </Typography>
    )
  }
}

const semesterListSelector = state => state.semesterList;
const courseListSelector = state => state.courseList;
const sectionListSelector = state => state.sectionList;
const getSemesterList = createSelector(semesterListSelector, l => l.map(s => ({label: s.name, value: s.semCode})));
const getCourseList = createSelector(courseListSelector, l => l.map(c => ({label: c, value: c})));
const getSectionList = createSelector(sectionListSelector, l => l.map(s => ({label: s, value: s})));

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

function mapDispatchToProps(dispatch) {
  return {
    selectSemester: value=> dispatch(selectSemester(value)),
    selectCourse: value=> dispatch(selectCourse(value)),
    selectSection: value=> dispatch(selectSection(value)),
  }
}


export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(MainDropdown));