class Solution:
    def bitwiseComplement(self, n: int) -> int:
        return int(format(n,'b').replace('1','2').replace('0','1').replace('2','0'),2)