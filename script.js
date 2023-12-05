// function toCase(text) {
//   // write your code here
// }

// // DO not change the code below

// const text = prompt("Enter text:");
// alert(toCase(text));


function toCase(text) {
  // Check if the input string is empty
  if (text.length === 0) {
    return '-';
  }

  // Convert the string to lowercase and uppercase
  const lowerCaseText = text.toLowerCase();
  const upperCaseText = text.toUpperCase();

  // Return the formatted string with - as the delimiter
  return `${lowerCaseText}-${upperCaseText}`;
}

// Example
const text = prompt("Enter text:");
alert(toCase(text));
