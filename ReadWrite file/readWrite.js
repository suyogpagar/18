const fs = require('fs');

// Read the input.txt file asynchronously
fs.readFile('input.txt', 'utf8', (readErr, data) => {
  if (readErr) {
    console.error('Error reading input.txt:', readErr);
    return;
  }

  console.log('Content of input.txt:');
  console.log(data);

  // Prepare data to write to output.txt
  const outputData = `This is the output file.\nContent read was:\n${data}`;

  // Write to output.txt asynchronously
  fs.writeFile('output.txt', outputData, 'utf8', (writeErr) => {
    if (writeErr) {
      console.error('Error writing to output.txt:', writeErr);
      return;
    }
    console.log('Successfully wrote to output.txt');
  });
});
