# Wiki for End users

Using our data workbench is quite simple!

1. Go to http://ec2-52-55-161-116.compute-1.amazonaws.com:3000/ in your web browser
2. Select 'Upload' on the left-hand side
3. Click 'drag and drop or select to upload'
4. Select a dataset.  You can find example datasets in this github repo under /ML/Ames/
5. Click 'Start File Analysis'
6. You will be routed to the Analysis page
7. Click on Classifications that you want to edit
8. Click send to workbench
9. Click on a field under a classification in the workbench to remove it from the classification
10. Click on a field in the 'Fields' menu then click a classification to add it to that classification
11. Click the 'POP' next to either a field or classification to see more information about it

[Feedback Form](https://docs.google.com/forms/d/e/1FAIpQLScmxEMG7J4y-km6vZKv0yY13olqkSYTY7VY-2L8MOqAJuZCdA/viewform?usp=sf_link)

# Wiki for developers

## Running the Server Locally

This section shows how to get the server running on a local environment
We use this primarily for testing

1. Open a terminal on your computer
2. Clone this project
3. cd Lucky7-Capstone
4. Follow the steps outlined in 'Starting the server' below
5. Go to http://localhost:3000

## Starting the Server

1. npm install
2. npm run dev (or "npm run start" in a different terminal to have the changes incorporate live
3. If you did npm run start, open a new terminal
4. pip3 install -r requirements.txt
5. python3 server.py

Use 'CTRL+SHIFT+R' to reload the page after making any changes.

(Thanks https://github.com/jwkvam/minimal-flask-react)

## Running the Production Server

Our production website is running on an EC2 instance
This section outlines how to get the EC2 instance running and how to connect to it


### Connecting to an existing instance

Once you are in the AWS console you can see the EC2 instances that exist in your account

1. If there are no running instances, you will need to set one up
	follow the 'Creating an EC2 Instance' below
2. If there is already an instance, ask Adam for the private key file
	follow the instructions 'What to do with a Key Pair'
3. You can now connect to the server with ssh:
	ssh -i "~/.ssh/CapstoneEC2.pem" ubuntu@ec2-52-55-161-116.compute-1.amazonaws.com

### Starting the Production Server

After you have followed the instructions to connect to the instance you can run our server

1. clone this git repository if it does not yet exist
2. cd into the repo
3. git pull
4. follow the instructions "Starting the Server" above
5. When you close the terminal, the server will shut down.
	If you do not want this behavior, simply run the servers in a persistant window like tmux

**HELP IT WON'T START!**
I keep an instance of the server running in the background and you cannot have two servers running at once.  Simply kill the old version of the server with the command:

tmux kill-server


### Creating an EC2 Instance

1. Follow the steps in 'Accessing the AWS Console'
2. In the 'Find Services' search bar, search for EC2
3. In the EC2 console, click the 'Running Instances' link
4. Click the 'Launch Instance' button at the top of the screen
5. Select 'Ubuntu Server'
6. Select t2.micro general purpose instance type
7. Click 'Review and Launch'
8. Launch the instance
9. Select 'Create a new key pair'
10. Name the key pair CapstoneEC2
11. Download the Private Key
12. Follow the below instructions 'What to do with a Private Key'
13. Launch the instance
14. Follow the steps above 'Connecting to and Existing Instance'
15. Once you have connected clone this repository
16. Run sudo apt update
17. Run sudo apt install npm
18. Run sudo apt install python3-pip
19. go back to the EC2 console in the AWS console in your browser
20. In order to connect to this server on the internet, you need to allow inbound http access on port 3000
21. Select your running instance
22. In the description tab, you should find a section named 'Security Groups'
23. Click the attached security group (should be something like 'launch-wizard-5'
24. Click edit
25. Add a rule
26. Select 'Custome TCP Rule' under type
27. Select 'anywhere' for the source
28. Type 3000 for the port range

### Accessing the AWS Console

1. Open a web browser and navigate to https://aws.amazon.com/education/awseducate/
2. Click 'Login to AWS Educate'
3. Ask Adam for login credentials and log in
4. Click the hamburger menu in the upper right and click AWS Account
5. Click the orange 'AWS Educate Starter Account'
6. Click the orange 'AWS Console'

### What to do with a Private Key

1. When you have a private key, you should put it in the folder ~/.ssh/
	ex: mv ~/downloads/CapstoneEC2.pem ~/.ssh/
2. Don't share the private key with any one

# Components


# Build Environment

We are using Travis CI to build and test our software, here is the link to our most recent build: 
https://travis-ci.com/kyle-maxwell/Lucky7-Capstone

# Tests
'npm test' will run all tests
tests are defined in the '__tests__' folder and are saved as '<NAME>.test.js'
We are using the [jest testing framework](https://jestjs.io/en/) with [enzyme](https://airbnb.io/enzyme/) for interacting with react components.

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
