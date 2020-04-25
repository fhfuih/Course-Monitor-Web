const actionType = {
  UPDATE_SEMESTER_LIST: Symbol('UPDATE_SEMESTER_LIST'),
  UPDATE_COURSE_LIST: Symbol('UPDATE_COURSE_LIST'),
  UPDATE_SECTION_LIST: Symbol('UPDATE_SECTION_LIST'),
  UPDATE_QUOTA: Symbol('UPDATE_QUOTA'),
  SET_LOADING: Symbol('SET_LOADING'),
  SELECT_SEMESTER: Symbol('SELECT_SEMESTER'),
  SELECT_COURSE: Symbol('SELECT_COURSE'),
  SELECT_SECTION: Symbol('SELECT_SECTION'),
  TOGGLE_FILTER: Symbol('TOGGLE_FILTER'),
};

function setLoading(value) {
  return {
    type: actionType.SET_LOADING,
    value,
  };
}

function updateSemesterList(value) {
  return {
    type: actionType.UPDATE_SEMESTER_LIST,
    value,
  };
}

function updateCourseList(value) {
  return {
    type: actionType.UPDATE_COURSE_LIST,
    value,
  };
}

function updateSectionList(value) {
  return {
    type: actionType.UPDATE_SECTION_LIST,
    value,
  };
}

function updateQuota(value) {
  return {
    type: actionType.UPDATE_QUOTA,
    value,
  };
}

function selectSemester(value) {
  return {
    type: actionType.SELECT_SEMESTER,
    value,
  };
}

function selectCourse(value) {
  return {
    type: actionType.SELECT_COURSE,
    value,
  };
}

function selectSection(value) {
  return {
    type: actionType.SELECT_SECTION,
    value,
  };
}

function toggleFilter(value) {
  return {
    type: actionType.TOGGLE_FILTER,
    value,
  };
}

function requestSemesters() {
  return (dispatch) => {
    dispatch(setLoading(true));
    return fetch(`${process.env.REACT_APP_DATASERVER}/start`)
      .then(
        (res) => res.json(),
        (err) => alert(err),
      )
      .then((json) => {
        dispatch(updateSemesterList(json.data));
        dispatch(setLoading(false));
      });
  };
}

function requestCourses() {
  return (dispatch, getState) => {
    dispatch(setLoading(true));

    const { semester } = getState();
    const url = new URL(`${process.env.REACT_APP_DATASERVER}/semester`);
    url.searchParams.append('semCode', semester.value);

    return fetch(url)
      .then(
        (res) => res.json(),
        (err) => alert(err),
      )
      .then((json) => {
        dispatch(updateCourseList(json.data));
        dispatch(setLoading(false));
      });
  };
}

function requestSections() {
  return (dispatch, getState) => {
    dispatch(setLoading(true));

    const { semester, course } = getState();
    const url = new URL(`${process.env.REACT_APP_DATASERVER}/courseSection`);
    url.searchParams.append('semCode', semester.value);
    url.searchParams.append('courseCode', course.value);

    return fetch(url)
      .then(
        (res) => res.json(),
        (err) => alert(err),
      )
      .then((json) => {
        dispatch(updateSectionList(json.data));
        dispatch(setLoading(false));
      });
  };
}

function requestQuota() {
  return (dispatch, getState) => {
    dispatch(setLoading(true));

    const { semester, course, section, startTime, endTime } = getState();
    const url = new URL(`${process.env.REACT_APP_DATASERVER}/sectionData`);
    url.searchParams.append('semCode', semester.value);
    url.searchParams.append('courseCode', course.value);
    url.searchParams.append('section', section.value);
    url.searchParams.append('startTime', startTime);
    url.searchParams.append('endTime', endTime);

    return fetch(url)
      .then(
        (res) => res.json(),
        (err) => alert(err),
      )
      .then((json) => {
        dispatch(updateQuota(json.data));
        dispatch(setLoading(false));
      });
  };
}

export {
  actionType,
  setLoading,
  selectSemester,
  selectCourse,
  selectSection,
  requestSemesters,
  requestCourses,
  requestSections,
  requestQuota,
  toggleFilter,
};
