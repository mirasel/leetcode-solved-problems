class Solution:
    def isValid(self, s: str) -> bool:
        braket = []
        for i in s:
            if i=='(' or i=='{' or i=='[':
                braket.append(i)
            elif (i==')' or i=='}' or i==']') and len(braket)==0:
                return False
            elif (braket[-1]=='(' and i==')') or (braket[-1]=='{' and i=='}') or (braket[-1]=='[' and i==']'):
                braket.pop()
            else:
                return False
        return len(braket)==0