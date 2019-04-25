import numpy as np
import pandas as pd
import unittest
import KMeans
 
class TestKMeans(unittest.TestCase):
 
    def setUp(self):
        pass
 
    def test_dist_1(self):
        a = np.array([1,1])
        b = np.array([2,2])
        self.assertEqual(KMeans.dist(a, b), 1.414)

    def test_dist_2(self):
        a = np.array([1,2,3])
        b = np.array([3,4,5])
        self.assertEqual(KMeans.dist(a, b), 3.464)

    def test_mean_dist_1(self):
        df = pd.DataFrame([[1,2,3], [4,5,6], [7,8,9]])
        x = np.array([1,2,3])
        self.assertEqual(KMeans.mean_dist(df, x), 5.196)


if __name__ == '__main__':
    unittest.main()