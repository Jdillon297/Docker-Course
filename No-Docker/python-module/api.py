#! /usr/bin/python3 env
import json
from flask import Flask, jsonify, request
from flask_restful import Resource, Api
from flask_cors import CORS
from connection import Connect,Select_All

app = Flask(__name__)

CORS(app)

api = Api(app)

class PythonApi(Resource):
    def get(self):
       connection = Connect()
       results = Select_All(connection)       
       jsonResults = self.mapToDictionary(results)         
       return jsonify(jsonResults)


    def mapToDictionary(self,results):
        return [{"id": item[0], "name": item[1]} for item in results]
        

    

api.add_resource(PythonApi, '/python-api')

if __name__ == '__main__':      app.run(host='0.0.0.0', port=5000)
