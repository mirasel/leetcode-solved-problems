class Solution:
    def searchInsert(self, nums, target):
        return self.search(nums,0,len(nums)-1,target)
    
    def search(self,nums,left,right,target):
        if(left>right):
            return left
        else:
            mid = left+(right-left)//2
            if nums[mid]==target:
                return mid
            if nums[mid]>target:
                return self.search(nums,left,mid-1,target)
            if nums[mid]<target:
                return self.search(nums,mid+1,right,target)