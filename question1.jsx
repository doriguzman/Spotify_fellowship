// Question 1 -- sortByStrings(s,t): Sort the letters in the string s by the order 
//they occur in the string t. You can assume t will not have repetitive characters. 
//For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw".
// For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg".

const sortByStrings = (s, t) => {
  let finalString = "";
  let obj = {};

  for (var i = 0; i < s.length; i++) {
    if (!obj[s[i]]) {
      obj[s[i]] = s[i];
    } else {
      obj[s[i]] = obj[s[i]] + s[i];
    }
  }

  for (var i = 0; i < t.length; i++) {
    if (obj[t[i]]) {
      finalString += obj[t[i]];
    }
  }
  return finalString;
};

