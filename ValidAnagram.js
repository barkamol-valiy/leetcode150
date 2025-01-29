const isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sanoq = {};

  for (let char of s) {
    sanoq[char] = (sanoq[char] || 0) + 1;
  }

  for (let char of t) {
    if (!sanoq[char]) {
      return false;
    }

    sanoq[char]--;
  }

  return true;
};
