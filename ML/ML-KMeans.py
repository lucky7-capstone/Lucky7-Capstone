import sys
import json
import numpy as np
import pandas as pd
from similarity.normalized_levenshtein import NormalizedLevenshtein
from sklearn.cluster import KMeans


def main():
	if (len(sys.argv) != 2):
		print("Usage: python ML-KMeans.py path-name")
		sys.exit()
	path = sys.argv[1] # "../ames/test.csv"

	df = pd.read_csv(path)
	arr1 = df.columns.values
	arr2 = df.columns.values

	NL = NormalizedLevenshtein()
	vectors = pd.DataFrame([[NL.distance(i, j) for j in arr2] for i in arr1])

	clusters = 4
	kmeans = KMeans(n_clusters=clusters, random_state=0).fit(vectors)

	uncert = pd.DataFrame()
	for i in range(clusters):
	    uncert[i] = vectors.apply(dist, args=(kmeans.cluster_centers_[i], ), axis=0)
	uncert = uncert.set_index(arr1)


	data = {}
	for i in range(clusters):
	    cluster = {}
	    fields = pd.Series(arr1[kmeans.labels_==i])
	    for field in fields:
	        cluster[field] = uncert.loc[field][i]
	    data["Cluster " + str(i)] = cluster

	print(json.dumps(data, sort_keys=True, indent=4))



def dist(x, y): # computationally effcient equclidean distance
    return np.sqrt(np.dot(x, x) - 2 * np.dot(x, y) + np.dot(y, y))

def mean_dist(DF, X):
    dists = DF.apply(dist, args=(X, ), axis=1)
    return dists.mean()



if __name__ == "__main__":
    main()