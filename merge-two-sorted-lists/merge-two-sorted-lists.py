# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:

    def __init__(self):
        self.head = None

    def mergeTwoLists(self, list1: ListNode, list2: ListNode) -> ListNode:
        if list1 is None and list2 is None:
            return None
        if list1 is not None and list2 is None:
            return list1
        if list1 is None and list2 is not None:
            return list2

        if list1.val<list2.val:
            self.head = list1
            list1 = list1.next
        else:
            self.head = list2
            list2 = list2.next

        ptr = self.head

        while list1 and list2:
            if list1.val<list2.val:
                ptr.next = list1 
                list1 = list1.next
            else:
                ptr.next = list2
                list2 = list2.next
            ptr = ptr.next
        
        if list1:
            ptr.next = list1
            
        if list2:
            ptr.next = list2
        
        return self.head
        
