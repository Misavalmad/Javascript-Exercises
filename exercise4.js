/*Exercise #4 (sugerencia filter() e includes())
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.*/

function commonCourses(arr1, arr2) {
  let common = arr1.filter(course => arr2.includes(course));
  console.log('Common courses: ' + common.join(', '));
}

commonCourses(['Math', 'English', 'Programming'], ['Geography', 'Spanish', 'Programming']);
