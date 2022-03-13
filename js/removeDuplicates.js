/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
    const m = {}
    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        if (!m[nums[i]] || m[nums[i]] < 2) {
            m[nums[i]] = (m[nums[i]] || 0) + 1;
            nums[k++] = nums[i];
        }
    }

    return k;
};

const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
console.log(removeDuplicates(nums), nums);