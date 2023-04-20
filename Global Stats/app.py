from flask import Flask, jsonify
from flask_cors import CORS
import psycopg2
import geojson
import pandas as pd
from sqlite3 import connect
from sqlalchemy import create_engine
import psycopg2

conn = psycopg2.connect(
    host="localhost",
    database="world_vaccination_data",
    user="postgres",
    password="addycole#422",
    port=5432
)
cur = conn.cursor()
cur.execute("SELECT * FROM global_vaccine")
results = cur.fetchall()
features = []
for result in results:
    feature = geojson.Feature(
        geometry=geojson.Point((result[3],result[2])),
        properties={
            "Country": result[0],
            "Capital": result[1],
            "First_Vaccine_Date": result[4],
            "Persons_Fully_Vaccinated": result[7],
            "Total_Vaccinations": result[5],
            "Number_of_Vaccine_Types_Used": result[8],
            "Vaccines_Used": result[9],
            "Data_as_of": result[10]
        }
    )
    features.append(feature)
feature_collection = geojson.FeatureCollection(features)
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
    return jsonify(feature_collection)
    
if __name__ == "__main__":
    app.run(debug=True)
    
    
    