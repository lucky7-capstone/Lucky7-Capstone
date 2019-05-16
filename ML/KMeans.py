import sys
import json
import uuid
import numpy as np
import pandas as pd
from similarity.normalized_levenshtein import NormalizedLevenshtein
from sklearn.cluster import KMeans


def data_classifier(df):
	arr = df.columns.values

	NL = NormalizedLevenshtein()
	vectors = pd.DataFrame([[NL.distance(i, j) for j in arr] for i in arr])

	clusters =  int(len(arr) ** .5)
	if clusters <= 1:
		clusters = 2
	kmeans = KMeans(n_clusters=clusters, random_state=0).fit(vectors)

	uncert = pd.DataFrame()
	for i in range(clusters):
	    uncert[i] = vectors.apply(dist, args=(kmeans.cluster_centers_[i], ), axis=0)
	uncert = uncert.set_index(arr)


	classifications_obj = {}
	fields_obj = {}
	for i in range(clusters):
	    cluster = {}
	    fields = pd.Series(arr[kmeans.labels_==i])
	    for field_name in fields:
	        field_id = "field-" + str(uuid.uuid4())
	        cluster[field_id] = uncert.loc[field_name][i]
	        fields_obj[field_id] = {"name" : field_name}

	    cid_obj = {}
	    cid_obj["name"] = "classification" + str(i)
	    cid_obj["metadata"] = None
	    cid_obj["values"] = cluster
	    classifications_obj["classification-" + str(uuid.uuid4())] = cid_obj

	data = {}
	data["Classifications"] = classifications_obj
	data["Fields"] = fields_obj
	return(json.dumps(data, sort_keys=True, indent=4))



def dist(x, y): # computationally effcient euclidean distance
    #dist = np.sqrt(np.dot(x, x) - 2 * np.dot(x, y) + np.dot(y, y))
    dist = np.linalg.norm(x-y)
    return np.around(dist, 3)

def mean_dist(DF, X): # TODO could use to order the classifications
    dists = DF.apply(dist, args=(X, ), axis=1)
    return dists.mean()

