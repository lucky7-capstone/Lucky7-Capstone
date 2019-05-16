import sys
import json
import uuid
import numpy as np
import pandas as pd
from similarity.normalized_levenshtein import NormalizedLevenshtein
from sklearn.cluster import KMeans

def data_classifier(values):
    NL = NormalizedLevenshtein()
    vectors = pd.DataFrame([[NL.distance(i, j) for j in values] for i in values])

    clusters = 4
    kmeans = KMeans(n_clusters=clusters, random_state=0).fit(vectors)

    field_ids = ["field-" + str(uuid.uuid4()) for field in values]
    uncert = pd.DataFrame()
    for i in range(clusters):
        uncert[i] = vectors.apply(dist, args=(kmeans.cluster_centers_[i], ), axis=0)
    uncert.index = field_ids

    classifications_obj = {}
    fields_obj = {}
    for i in range(clusters):
        cluster = {}
        fields = pd.Series(field_ids)[kmeans.labels_==i]
        for field_id in fields:
            cluster[field_id] = uncert.loc[field_id][i]
            fields_obj[field_id] = {"name" : values[field_ids.index(field_id)]}

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

