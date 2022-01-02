class Solution:
    def numPairsDivisibleBy60(self, time: List[int]) -> int:
        pair = [0]*60
        count = 0
        for t in time:
            count+=pair[-t%60]
            pair[t%60]+=1
        return count