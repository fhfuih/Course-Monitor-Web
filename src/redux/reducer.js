import { actionType } from './actions';

const clearSemester = {
  semesterList: [],
  semester: null,
};
const clearCourse = {
  courseList: [],
  course: null,
};
const clearSection = {
  sectionList: [],
  section: null,
};

const defaultState = {
  loading: false,
  ...clearSemester,
  ...clearCourse,
  ...clearSection,
  quota: [],
  startTime: undefined,
  endTime: undefined,
  filter: {
    avail: true,
    enroll: true,
    wait: true,
    quota: true,
  },
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionType.SET_LOADING:
      return {
        ...state,
        loading: action.value,
      };
    case actionType.UPDATE_SEMESTER_LIST:
      return {
        ...state,
        ...clearSemester,
        ...clearCourse,
        ...clearSection,
        semesterList: action.value,
        quota: [],
      };
    case actionType.UPDATE_COURSE_LIST:
      return {
        ...state,
        ...clearCourse,
        ...clearSection,
        courseList: action.value.courses,
        quota: [],
        startTime: action.value.startTime,
        endTime: action.value.endTime,
      };
    case actionType.UPDATE_SECTION_LIST:
      return {
        ...state,
        ...clearSection,
        sectionList: action.value,
        quota: [],
      };
    case actionType.UPDATE_QUOTA:
      return {
        ...state,
        quota: action.value,
      };
    case actionType.SELECT_SEMESTER:
      return {
        ...state,
        semester: action.value,
      };
    case actionType.SELECT_COURSE:
      return {
        ...state,
        course: action.value,
      };
    case actionType.SELECT_SECTION:
      return {
        ...state,
        section: action.value,
      };
    case actionType.TOGGLE_FILTER:
      return {
        ...state,
        filter: {
          ...state.filter,
          [action.value]: !state.filter[action.value],
        },
      };
    default:
      return state;
  }
};

export { actionType, reducer };
