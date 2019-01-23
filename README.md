# Wiki for Lucky7 Capstone


## Run Locally

1. npm install
2. npm run dev (or "npm run start" in a different terminal to have the changes incorporate live
3. pip3 install -r requirements.txt
4. python3 server.py
5. Go to http://localhost:3000
6. Use 'CTRL+SHIFT+R' to override the cache and reload the page

Use 'CTRL+SHIFT+R' to reload the page after making any changes.

(Thanks https://github.com/jwkvam/minimal-flask-react)

# Components


# Build Environment

We are using Travis CI to build and test our software, here is the link to our most recent build: 
https://travis-ci.com/kyle-maxwell/Lucky7-Capstone

# Additional Notes

Ontology notes:
Categories can be grouped into Groupings which can then then be Classified.


# Machine Learning 

Field Clustering Metrics:
1. Levenshtein Distance for Field Names
2. GloVe Word embeddings of Field Names

Data Clustering Metrics:
1. Averaged Trigram Similarty of multiple data entries
2. Data Entry Information Entropy & Metadata
3. 1-D Bidirectional ConvNet for pattern embedding

Siamese Neural Network with Tripplet Loss


# Data Structures

```
classifications:
{
  cid: { 
    classname: string   
    metadata: Object   
    values: {   
      field-id: Confidence Interval     
      ...              
    }   
  } 
  ...     
}

fields:
{ 
    field-id: {   
    }   
    ...    
  } 
  ... 
}
```
