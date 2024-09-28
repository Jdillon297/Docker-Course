#! /usr/bin/python3 env
from flask import Flask, jsonify, request
from flask_restful import Resource, Api
from connection import Connect,Select_All

app = Flask(__name__)

api = Api(app)

class PythonApi(Resource):
    def get(self):
       connection = Connect()
       results = Select_All(connection)
       return jsonify(results)
    

api.add_resource(PythonApi, '/python-api')

if __name__ == '__main__':
    app.run(debug=True)
