import math
class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        index = []
        distance = []
        
        for idx,point in enumerate(points):
            index.append(idx)
            distance.append(math.sqrt(point[0]**2+point[1]**2))
            
        output = [i for _,i in sorted(zip(distance,index))]
        return [points[output[i]] for i in range(k)]