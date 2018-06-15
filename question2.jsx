// Question 2 -- decodeString(s): Given an encoded string, return its corresponding decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times. Note: k is guaranteed to be a positive integer.

// For s = "4[ab]", the output should be decodeString(s) = "abababab"
// For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"

const decodeString = s => {
  let stack = [];
  let beginning = "[";
  let ending = "]";
  let final = [];
  //creating the stack
  for (var i = 0; i < s.length; i++) {
    if (s[i] !== ending) {
      stack.push(s[i]);
    }
  }
  while (stack.length > 0) {
    let topElem = stack.pop();

    //checking for a letter
    if (topElem !== beginning && !Number(topElem)) {
      final.unshift(topElem);
      //checking for a number
    } else if (Number(topElem)) {
      let values = final.join(""); //get the values in the array

      //making the multiple -1 because it already exists once in the array and want it to be put in that many more times
      let multiple = Number(topElem) - 1;
      // put the additional values in front of the array until multiple is 0
      while (multiple) {
        final.unshift(values);
        multiple--;
      }
    }
  }
  return final.join("");
};
