from flask import Flask, jsonify
import numpy as np
import sqlalchemy
import pandas as pd
from sqlite3 import connect
from sqlalchemy import create_engine
import psycopg2
import sqlite3
from flask_cors import CORS, cross_origin
# from flask_sqlalchemy import SQLAlchemy
# 2. Create an app, being sure to pass __name__
app = Flask(__name__)
CORS(app)
@app.route("/")
@cross_origin()
def welcome():
    """List of all the available routes"""
    return(
        f"Available Routes for Covid Vaccines in US:<br/>"
        f"/api/v1.0/id<br/>"
        f"/api/v1.0/date<br/>"
        f"/api/v1.0/location<br/>"
        f"/api/v1.0/total_vaccinations<br/>"
        f"/api/v1.0/total_vaccinations_per_hundred<br/>"
        f"/api/v1.0/total_distributed<br/>"
        f"/api/v1.0/distributed_per_hundred<br/>"
        f"/api/v1.0/people_vaccinated<br/>"
        f"/api/v1.0/people_vaccinated_per_hundred<br/>"
        f"/api/v1.0/people_fully_vaccinated<br/>"
        f"/api/v1.0/people_fully_vaccinated_per_hundred<br/>"
        f"/api/v1.0/daily_vaccinations<br/>"
        f"/api/v1.0/daily_vaccinations_per_million<br/>"
        f"/api/v1.0/total_boosters<br/>"
        f"/api/v1.0/total_boosters_per_hundred<br/>"
        f"/api/v1.0/location_<br/>"
        f"/api/v1.0/latitude<br/>"
        f"/api/v1.0/longitude<br/>"
            
    )
@app.route("/api/v1.0/id")
@cross_origin()
def id():
    conn_string = "host='localhost' dbname='covid_vaccine'\
    user='postgres' password='Juhi@123'"
    # use connect function to establish the connection
    conn = psycopg2.connect(conn_string)
    data = pd.read_sql('select * from vaccine2', conn)
    return data.to_json()


@app.route("/api/v1.0/daily_vaccinations")
@cross_origin()
def daily_vaccinations():
    conn_string = "host='localhost' dbname='covid_vaccine'\
    user='postgres' password='Juhi@123'"
    # use connect function to establish the connection
    conn = psycopg2.connect(conn_string)
    data = pd.read_sql('select location,daily_vaccinations from vaccine2', conn)
    return data.to_json()

@app.route("/api/v1.0/total_vaccinations")
@cross_origin()
def total_vaccinations():
    conn_string = "host='localhost' dbname='covid_vaccine'\
    user='postgres' password='Juhi@123'"
    # use connect function to establish the connection
    conn = psycopg2.connect(conn_string)
    data = pd.read_sql('select location,total_vaccinations from vaccine2', conn)
    return data.to_json()

@app.route("/api/v1.0/people_fully_vaccinated")
@cross_origin()
def people_fully_vaccinated():
    conn_string = "host='localhost' dbname='covid_vaccine'\
    user='postgres' password='Juhi@123'"
    # use connect function to establish the connection
    conn = psycopg2.connect(conn_string)
    data = pd.read_sql('select location,latitude,longitude, people_fully_vaccinated from vaccine2', conn)
    return data.to_json()

@app.route("/api/v1.0/latitude")
@cross_origin()
def latitude():
    conn_string = "host='localhost' dbname='covid_vaccine'\
    user='postgres' password='Juhi@123'"
    # use connect function to establish the connection
    conn = psycopg2.connect(conn_string)
    data = pd.read_sql('select location,latitude from vaccine2', conn)
    return data.to_json()

@app.route("/api/v1.0/longitude")
@cross_origin()
def longitude():
    conn_string = "host='localhost' dbname='covid_vaccine'\
    user='postgres' password='Juhi@123'"
    # use connect function to establish the connection
    conn = psycopg2.connect(conn_string)
    data = pd.read_sql('select location,longitude from vaccine2', conn)
    return data.to_json()

if __name__ == "__main__":
    app.run(debug=True)
    
    
    