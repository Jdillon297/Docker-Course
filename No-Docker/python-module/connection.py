import psycopg2 
import os
from dotenv import load_dotenv

load_dotenv()


def Select_All(connection):
    cursor = connection.cursor()
    cursor.execute("Select * from person")
    results = cursor.fetchall()
    cursor.close()
    connection.close()
    return results

def Connect():
    try:

        print('Connection to the PostgresSQL database....')
        connection = psycopg2.connect(
            host=os.getenv("DB_HOST"),
            database=os.getenv("DB_NAME"),
            user=os.getenv("DB_USER"),
            password=os.getenv("DB_PASSWORD"),
            port=os.getenv("DB_PORT")
        )                
        return connection

    except (Exception, psycopg2.DatabaseError ) as error:
        print(error)        



