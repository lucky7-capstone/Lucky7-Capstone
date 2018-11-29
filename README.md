# Wiki for Lucky7 Capstone

# Components

# Build Environment

We are using Travis CI to build and test our software, here is the link to our most recent build: 
https://travis-ci.com/kyle-maxwell/Lucky7-Capstone

# Additional Notes

Ontology notes:
Categories can be grouped into Groupings which can then then be Classified.


# Metrics for Clustering

Category Clustering Metrics:
1. Levenshtein Distance for Field Names
2. GloVe Word embeddings of Field Names

Data Clustering Metrics:
1. Averaged Trigram Similarty of multiple data entries
2. Data Entry Length
3. Data Entry Information Entropy
4. 1-D Bidirectional ConvNet for pattern embedding


## Run Locally

1. npm install
2. npm run dev
3. pip install -r requirements.txt
4. python server.py
5. Goto http://localhost:3000

If you would like to have webpack rebuild your javascript any time your React code changes, enter `npm run start` in a different terminal.

(Thanks https://github.com/jwkvam/minimal-flask-react)
