class Solution:
    def findComplement(self, num: int) -> int:
        output = format(num,'b').replace('1','2').replace('0','1').replace('2','0')
        return int(output,2)