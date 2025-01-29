const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};
// - time : O(n^2)
//- space : O(1)

// / hashmap

// - Time: O(n)
//- Space: O(n)
