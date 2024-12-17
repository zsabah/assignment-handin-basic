function loadCourses(subject) {
    fetch('data/courses.json')
      .then(response => response.json())
      .then(courses => {
        const filteredCourses = courses.filter(course => course.CourseSubject === subject);
        displayCourses(filteredCourses);
      })
      .catch(error => console.error('Error loading courses:', error));
  }
  
  function displayCourses(courses) {
    const container = document.getElementById('coursesContainer');
    container.innerHTML = ''; 
    courses.forEach(course => {
      const courseElement = document.createElement('div');
      courseElement.className = 'course';
      courseElement.innerHTML = `
        <h3>${course.CourseTitle}</h3>
        <p><strong>Course Type:</strong> ${course.CourseType}</p>
        <p><strong>Summary:</strong> ${course.CourseSummary}</p>
        <p><strong>Award Name:</strong> ${course.CourseAwardName}</p>
        <p><strong>UCAS Code:</strong> ${course.UcasCode}</p>
        <p><strong>UCAS Points:</strong> ${course.UcasPoints}</p>
        <p><strong>Year of Entry:</strong> ${course.YearOfEntry}</p>
        <p><strong>Mode of Attendance:</strong> ${course.ModeOfAttendance}</p>
        <p><strong>Study Length:</strong> ${course.StudyLength}</p>
        <p><strong>Has Foundation Year:</strong> ${course.HasFoundationYear}</p>
        <p><strong>Subject:</strong> ${course.CourseSubject}</p>
        <p><strong>No Longer Recruiting:</strong> ${course.NoLongerRecruiting}</p>
      `;
      container.appendChild(courseElement);
    });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const path = window.location.pathname;
    if (path.includes('design.html')) {
      loadCourses('Art and design');
    } else if (path.includes('computing.html')) {
      loadCourses('Computing');
    }
  });
  