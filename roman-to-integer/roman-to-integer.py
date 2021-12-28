class Solution:
    def romanToInt(self, s: str) -> int:
        roman = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}
        s = s[::-1]
        sum = 0
        for i in range(len(s)):
            if i==0:
                sum+=roman[s[i]]
                continue
            if((s[i]=='I'and(s[i-1]=='V' or s[i-1]=='X')) or (s[i]=='X'and(s[i-1]=='L' or s[i-1]=='C')) or (s[i]=='C'and(s[i-1]=='D' or s[i-1]=='M'))):
                sum-=roman[s[i]]
            else:
                sum+=roman[s[i]]
        return sum