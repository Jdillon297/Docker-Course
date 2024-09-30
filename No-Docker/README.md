This project has become pretty cool if I say so myself.

To be formal you should look at th docker-compose.yaml file.

Create a .env file with those environment variables so that docker knows what is going on.

run docker-compose up --build

There are 2 apis running so you should navigate in the browser to:

http://localhost:3000/node-api for the node.js api endpoint
http://localhost:5050/python-api for the python api endpoint

There is 1 Database running which is the postgres container. 

To test that it was working go into that running contaier and use the following commands

psql -U <DB_USER> -d <DB_NAME>

