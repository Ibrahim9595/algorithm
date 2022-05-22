class Solution(object):
    def minSubArrayLen(self, target, nums):
        curr = j = s = 0
        ret = len(nums) + 1

        for num in nums:
            s += num
            curr += 1

            while s - nums[j] >= target:
                s -= nums[j]
                j += 1
                curr -= 1

            if ret > curr and s >= target:
                ret = curr

        return 0 if ret > len(nums) else ret


print(Solution().minSubArrayLen(4, [1, 2, 4]))
