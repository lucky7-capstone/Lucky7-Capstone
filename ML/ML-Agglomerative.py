import sys
import numpy as np
import pandas as pd
from similarity.normalized_levenshtein import NormalizedLevenshtein
from sklearn.cluster import AgglomerativeClustering
from sklearn.cluster import KMeans


def main():
	if (len(sys.argv) != 2):
		print("Usage: python ML-Agglomerative.py path-name")
		sys.exit()
	path = sys.argv[1] # "../ames/test.csv"

	df = pd.read_csv(path)
	arr1 = df.columns.values
	arr2 = df.columns.values

	NL = NormalizedLevenshtein()
	vectors = pd.DataFrame([[NL.distance(i, j) for j in arr2] for i in arr1])

	clusters = 5
	agg = AgglomerativeClustering(affinity='euclidean', compute_full_tree='auto',
	        connectivity=None, linkage='ward', memory=None, n_clusters=clusters,
	        pooling_func='deprecated').fit(vectors)

	for i in range(clusters):
	    print("Cluster " + str(i) + ":")
	    print(pd.Series(arr1[agg.labels_==i]))
	    print('\n')




if __name__ == "__main__":
    main()