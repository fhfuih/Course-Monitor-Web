import semesters from './semesterList.json';
import courses from './semesterData.json';
import sections from './courseSection_COMP1021.json';
import quota from './sectionData_COMP1021_L1.json';

export default function(type, cb) {
  setTimeout(() => {
    switch(type) {
      case 'SEMESTER':
        // console.log('Requesting semesters');
        return cb(semesters);
      case 'COURSE':
        // console.log('Requesting courses');
        return cb(courses);
      case 'SECTION':
        // console.log('Requesting sections');
        return cb(sections);
      case 'QUOTA':
        // console.log('Requesting quota');
        return cb(quota);
      default:
        return null;
    }
  }, 1000);
}