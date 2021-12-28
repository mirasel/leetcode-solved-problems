class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        prefix = strs[0];
        
        for i in range(1,len(strs)):
            prefix = self.getPrefix(prefix,strs[i])
        return prefix
        
    def getPrefix(self,str1:str,str2:str)->str:
        i=j=0
        while i<len(str1) and j<len(str2):
            if str1[i]!=str2[j]:
                break
            i+=1
            j+=1
        return str1[:i]