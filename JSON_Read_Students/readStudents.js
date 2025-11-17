const fs = require('fs');

// Read the file asynchronously
fs.readFile('students.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  try {
    // Parse the JSON data
    const students = JSON.parse(data);

    // Display the list of student names and information
    students.forEach(student => {
      console.log(`Name: ${student.name}`);
      console.log(`ID: ${student.id}`);
      console.log(`Age: ${student.age}`);
      console.log(`Major: ${student.major}`);
      console.log('--------------------');
    });
  } catch (parseError) {
    console.error('Error parsing JSON:', parseError);
  }
});
