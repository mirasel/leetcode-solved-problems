class Solution:
    def findJudge(self, n: int, trust: List[List[int]]) -> int:
        townPeople = [0]*n

        for t in trust:
            townPeople[t[0]-1]-=1
            townPeople[t[1]-1]+=1
        
        if n-1 in townPeople:
            return townPeople.index(n-1)+1
        else:
            return -1