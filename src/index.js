/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  for(let i = preferences.length - 1, a = preferences.length; i >= 0; i--, a--) {
  let b = preferences[i];
  let c = preferences[b-1];
  let d = preferences[c-1];
  if (a !== c && a === d) {
    count += 1;
    preferences.length--;
    }
  else {
      preferences.length--;
    }
  }
  return count;
}
