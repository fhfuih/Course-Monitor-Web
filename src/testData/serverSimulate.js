import semesters from './semesterList.json';
import courses from './semesterData.json';
import sections from './courseSection_COMP1021.json';
import quota from './sectionData_COMP1021_L1.json';

function basicRequest(data, cb, final) {
  setTimeout(() => {
    cb(data);
    final();
  }, 3000);
}

function requestSemesterList(cb, final) {
  basicRequest(semesters, cb, final)
}

function requestCourseList(semCode, cb, final) {
  basicRequest(courses, cb, final)
}

function requestSectionList(semCode, courseCode, cb, final) {
  basicRequest(sections, cb, final)
}

function requestQuotaData(semCode, courseCode, section, cb, final) {
  basicRequest(quota, cb, final)
}

export default {
  semester: requestSemesterList,
  course: requestCourseList,
  section: requestSectionList,
  quota: requestQuotaData
};
