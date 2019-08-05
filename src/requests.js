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
  const url = new URL(`${pref.dataServer}/semester`);
  url.searchParams.append('semCode', semCode);
  return basicRequest(url);
}

async function requestSectionList(semCode, courseCode) {
  const url = new URL(`${pref.dataServer}/courseSection`);
  url.searchParams.append('semCode', semCode);
  url.searchParams.append('courseCode', courseCode);
  return basicRequest(url);
}

async function requestQuotaData(semCode, courseCode, section, startTime, endTime) {
  const url = new URL(`${pref.dataServer}/sectionData`);
  url.searchParams.append('semCode', semCode);
  url.searchParams.append('courseCode', courseCode);
  url.searchParams.append('section', section);
  url.searchParams.append('startTime', startTime);
  url.searchParams.append('endTime', endTime);
  return basicRequest(url);
}

export default {
  semester: requestSemesterList,
  course: requestCourseList,
  section: requestSectionList,
  quota: requestQuotaData,
};
