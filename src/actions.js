const actionType = {
  UPDATE_SEMESTER_LIST: Symbol(),
  UPDATE_COURSE_LIST: Symbol(),
  UPDATE_SECTION_LIST: Symbol(),
  UPDATE_QUOTA: Symbol(),
  SET_LOADING: Symbol(),
  SELECT_SEMESTER: Symbol(),
  SELECT_COURSE: Symbol(),
  SELECT_SECTION: Symbol(),
  TOGGLE_FILTER: Symbol()
};

function setLoading(value) {
  return {
    type: actionType.SET_LOADING,
    value
  }
}

function updateSemesterList(value) {
  return {
    type: actionType.UPDATE_SEMESTER_LIST,
    value
  }
}

function updateCourseList(value) {
  return {
    type: actionType.UPDATE_COURSE_LIST,
    value
  }
}

function updateSectionList(value) {
  return {
    type: actionType.UPDATE_SECTION_LIST,
    value
  }
}

function updateQuota(value) {
  return {
    type: actionType.UPDATE_QUOTA,
    value
  }
}

function selectSemester(value) {
  return {
    type: actionType.SELECT_SEMESTER,
    value
  }
}

function selectCourse(value) {
  return {
    type: actionType.SELECT_COURSE,
    value
  }
}

function selectSection(value) {
  return {
    type: actionType.SELECT_SECTION,
    value
  }
}

function toggleFilter(value) {
  return {
    type: actionType.TOGGLE_FILTER,
    value
  }
}

export { 
  actionType, 
  setLoading, 
  updateSemesterList, 
  updateCourseList, 
  updateSectionList,
  updateQuota,
  selectSemester,
  selectCourse,
  selectSection,
  toggleFilter
};