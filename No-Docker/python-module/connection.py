import psycopg2 
import os
from dotenv import load_dotenv
from config import config

load_dotenv()


def Select_All(connection):
    cursor = connection.cursor()
    cursor.execute("Select * from person")
    results = cursor.fetchall()
    return results

def Connect():
    try:

        print('Connection to the PostgresSQL database....')
        connection = psycopg2.connect(
            host=os.getenv("HOST"),
            database=os.getenv("DATABASE"),
            user=os.getenv("USER"),
            password=os.getenv("PASSWORD"),
            port=os.getenv("PORT")
        )                
        return connection

    except (Exception, psycopg2.DatabaseError ) as error:
        print(error)        

