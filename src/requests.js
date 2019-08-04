import pref from './preference';

async function basicRequest(url) {
  const response = await fetch(url, {
    method: 'GET',
    // credentials: "same-origin"
  });
  if (!response.ok) {
    alert(`HTTP Error while requesting data: ${response.status} ${response.statusText}`);
    // throw new Error(`HTTP Error while requesting data: ${response.status} ${response.statusText}`);
    return null;
  }
  return response.json();
}

async function requestSemesterList() {
  return basicRequest(`${pref.dataServer}/start`);
}

async function requestCourseList(semCode) {
  return basicRequest(`${pref.dataServer}/semester?semCode=${semCode}`);
}

async function requestSectionList(semCode, courseCode) {
  return basicRequest(`${pref.dataServer}/courseSection?semCode=${semCode}&courseCode=${courseCode}`);
}

async function requestQuotaData(semCode, courseCode, section) {
  return basicRequest(`${pref.dataServer}/sectionData?semCode=${semCode}&courseCode=${courseCode}&section=${encodeURIComponent(section)}`);
}

export default {
  semester: requestSemesterList,
  course: requestCourseList,
  section: requestSectionList,
  quota: requestQuotaData,
};
