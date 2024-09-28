import psycopg2 
from config import config

def Select_All(connection):
    cursor = connection.cursor()
    cursor.execute("Select * from person")
    results = cursor.fetchall()
    return results

def Connect():
    try:
        params = config()

        print('Connection to the PostgresSQL database....')
        connection = psycopg2.connect(
            host=params['host'],
            database=params['database'],
            user=params['user'],
            password=params['password'],
            port=params['port']
        )                
        return connection

    except (Exception, psycopg2.DatabaseError ) as error:
        print(error)        

