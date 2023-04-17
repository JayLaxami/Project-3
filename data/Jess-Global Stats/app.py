from flask import Flask, jsonify
from flask_cors import CORS
import numpy as np
import sqlalchemy
import pandas as pd
from sqlite3 import connect
from sqlalchemy import create_engine
import psycopg2
import sqlite3
# from flask_sqlalchemy import SQLAlchemy
# 2. Create an app, being sure to pass __name__
app = Flask(__name__)
CORS(app)
@app.route("/")
def welcome():
    """List of all the available routes"""
    return(
        f"Available Routes for Global Covid-19 Vaccine Data:<br/>"
        f"/api/v1.0/Country<br/>"        
    )
@app.route("/api/v1.0/Country")
def Country():
    engine = create_engine('postgresql://postgres:addycole#422@localhost/world_vaccination_data')
    conn = engine.connect()
    #df = pd.read_sql('global_vaccine', engine, index_col='Country')
    result = conn.execute('''SELECT
                            json_build_object(
                              'type', 'FeatureCollection',
                              'features', json_agg(ST_AsGeoJSON(t.*)::json)
                            ) 
                            FROM 
                                global_vaccine as t
                        ''')
    data = [dict(row) for row in result]
    conn.close()
    #json_string = df.to_json(orient='index')
    return jsonify(data)
    #conn_string = "host='localhost' dbname='world_vaccination_data'\
    #user='postgres' password='addycole#422'"
    # use connect function to establish the connection
    #conn = psycopg2.connect(conn_string)
    #data = pd.read_sql('select * from global_vaccine',con=engine)
    #return data.to_json(orient='records')
if __name__ == "__main__":
    app.run(debug=True)
    
    
    