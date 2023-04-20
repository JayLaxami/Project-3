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
        
    )
@app.route("/api/v1.0/id")
@cross_origin()
def id():
    conn_string = "host='localhost' dbname='covid_vaccine'\
    user='postgres' password='Nhy3035!'"
    # use connect function to establish the connection
    conn = psycopg2.connect(conn_string)
    data = pd.read_sql('select * from vaccine2', conn)
    return data.to_json()

# @app.route("/api/v1.0/daily_vaccinations")
# @cross_origin()
# def daily_vaccinations():
#     conn_string = "host='localhost' dbname='covid_vaccine'\
#     user='postgres' password='Nhy3035!'"
#     # use connect function to establish the connection
#     conn = psycopg2.connect(conn_string)
#     data = pd.read_sql('select daily_vaccinations from vaccine2', conn)
#     return data.to_json()

query1 = '''
   with cte as (
	select 
		location,
		max(date::date) as max_date
	from 
		vaccine2
	group by 1
)
select
        a1.location,
        a1.total_vaccinations
    from
        vaccine2 a1
	join cte a2 on a1.location=a2.location and a1.date=a2.max_date 
'''

@app.route("/api/v1.0/total_vaccinations")
@cross_origin()
def total_vaccinations():
    conn_string = "host='localhost' dbname='covid_vaccine'\
    user='postgres' password='Nhy3035!'"
    # use connect function to establish the connection
    conn = psycopg2.connect(conn_string)
    data = pd.read_sql(query1, conn)
    return data.to_json()

query2 = '''
   with cte as (
	select 
		location,
		max(date::date) as max_date
	from 
		vaccine2
	group by 1
)
select
        a1.location,
        a1.people_fully_vaccinated
    from
        vaccine2 a1
	join cte a2 on a1.location=a2.location and a1.date=a2.max_date 
'''

@app.route("/api/v1.0/people_fully_vaccinated")
@cross_origin()
def people_fully_vaccinated():
    conn_string = "host='localhost' dbname='covid_vaccine'\
    user='postgres' password='Nhy3035!'"
    # use connect function to establish the connection
    conn = psycopg2.connect(conn_string)
    data = pd.read_sql(query2, conn)
    return data.to_json()

if __name__ == "__main__":
    app.run(debug=True)
    
    
    