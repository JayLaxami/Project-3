# Project-3

#Proposal

The field we are interested in working with Covid Vaccines in US states. Covid has affected everyone's lives and it would be impactful to find about its vaccines distribution. The data we would be working with is a data collected for US states Covid vaccine provided by Kaggle.com. The dataset contains more than 100 unique records.

We will scrape the dataset and will perform all the analysis including data visualizations for data sets. 

Data Source: (https://www.kaggle.com/datasets/paultimothymooney/usa-covid19-vaccinations)

Analysis

Firstly, data is cleaned and dataframe is saved as CSV and read in database SQL postgress. Using Flask in python, an API call is made and storing this endpont API as URL on which GET request is performed using d3 json. After getting json response, plot the maps(Leaflet) and other visualization of bar charts using interactions such as drop-down, hover menu. 

While this subject could be studied indefinitely, we decided the following questions to be the best topics for the project:

1. Total Vaccinations for different State.

2. Total number of people fully vaccinated(including percentage).

3. People vaccinated per month.

These are the main takeways we found based on the dataset, each file will go into further detail in their respective markdown tabs.
