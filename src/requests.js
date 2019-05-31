import pref from './preference'

function basicRequest(url, cb, final) {
  fetch(url, {
    method: 'GET',
    // credentials: "same-origin"
  })
  .then(response => {
    if (!response.ok) {
      alert('HTTP Error while requesting data: ' + response.status + ' ' + response.statusText)
    }
    return response.json()
  })
  .then(json => {
    cb(json);
    final();
  })
  .catch(e => {
    final();
    alert('Server Error while requesting data: ' + e + '\nSee the console for details.');
  })
}

function requestSemesterList(cb, final) {
  basicRequest(pref.dataServer + 'start', cb, final)
}

function requestCourseList(semCode, cb, final) {
  basicRequest(pref.dataServer + `semester?semCode=${semCode}`, cb, final)
}

function requestSectionList(semCode, courseCode, cb, final) {
  basicRequest(pref.dataServer + `courseSection?semCode=${semCode}&courseCode=${courseCode}`, cb, final)
}

function requestQuotaData(semCode, courseCode, section, cb, final) {
  basicRequest(pref.dataServer + `sectionData?semCode=${semCode}&courseCode=${courseCode}&section=${encodeURIComponent(section)}`, cb, final)
}

const a = {
  semester: requestSemesterList,
  course: requestCourseList,
  section: requestSectionList,
  quota: requestQuotaData
}

export default a;