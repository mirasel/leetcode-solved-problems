# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:

    def __init__(self):
        self.head = None
        self.ptr = None

    def mergeTwoLists(self, list1: ListNode, list2: ListNode) -> ListNode:
        if list1 is None and list2 is None:
            return None
        if list1 is not None and list2 is None:
            return list1
        if list1 is None and list2 is not None:
            return list2

        pointer_list1 = list1
        pointer_list2 = list2

        if pointer_list1.val<pointer_list2.val:
            self.head = pointer_list1
            self.ptr = self.head
            pointer_list1 = pointer_list1.next
        else:
            self.head = pointer_list2
            self.ptr = self.head
            pointer_list2 = pointer_list2.next


        while pointer_list1 and pointer_list2:
            if pointer_list1.val<pointer_list2.val:
                self.ptr.next = pointer_list1 
                pointer_list1 = pointer_list1.next
                self.ptr = self.ptr.next
            else:
                self.ptr.next = pointer_list2
                self.ptr = self.ptr.next
                pointer_list2 = pointer_list2.next
        
        while pointer_list1:
            self.ptr.next = pointer_list1
            self.ptr = self.ptr.next
            pointer_list1 = pointer_list1.next
            
        while pointer_list2:
            self.ptr.next = pointer_list2
            self.ptr = self.ptr.next
            pointer_list2 = pointer_list2.next
        
        return self.head
        