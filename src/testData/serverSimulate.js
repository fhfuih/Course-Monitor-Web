import semesters from './semesterList.json';
import courses from './semesterData.json';
import sections from './courseSection_COMP1021.json';
import quota from './sectionData_COMP1021_L1.json';

export default function(type, cb, final) {
  setTimeout(() => {
    switch(type) {
      case 'SEMESTER':
        // console.log('Requesting semesters');
        cb(semesters);
        final();
        break;
      case 'COURSE':
        // console.log('Requesting courses');
        cb(courses);
        final();
        break;
      case 'SECTION':
        // console.log('Requesting sections');
        cb(sections);
        final();
        break;
      case 'QUOTA':
        // console.log('Requesting quota');
        cb(quota);
        final();
        break;
      default:
        alert("What the heck?")
    }
  }, 3000);
}