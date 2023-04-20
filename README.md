# Project-3
#Team 1

#Final Proposal & Project Overview

The field we are interested in working with is Covid vaccines. Covid has affected everyone's lives and it would be impactful to find about its vaccines distribution and use around the world and in greater detail in the United States. The data we would be working with is a data collected for US states Covid vaccine provided by Kaggle.com. The dataset contains more than 100 unique records. In additon we examined data provided via the World Health Organization on vaccines around the world provided on 178 countries self-reporting data. 

We will scrape the dataset and will perform all the analysis including data visualizations for data sets. 

Data Source: (https://www.kaggle.com/datasets/paultimothymooney/usa-covid19-vaccinations)
             (https://ourworldindata.org/covid-vaccinations)

Analysis

Firstly, data is cleaned and read in SQL postgress. Use Flask API and d3 json and plot the maps(Leaflet) and other visualization of bar charts 
using interactions such as drop-down, hover menu.

While this subject could be studied indefinitely, we decided the following questions to be the best topics for the project:

1. What is the current environment of Covid vaccines around the world. 

  Total vaccines, total of population fully vaccinatied, different number of vaccines used in different countries. 

2.Total Vaccinations for different States within the US.

  Distribution vs. Use 

3. Total number of people fully vaccinated(including percentage).


Conclusion


These are the main takeways we found based on the dataset, each file will go into further detail in their respective markdown tabs.

World Data

In analysis of the world data, it was interesting to discover that with the suspected origin of the initial virus in China, they were also first in distribution of vaccines in July of 2020 followed by the US in December of 2020. Across the world most other counties began distribution in the summer of 2021. The data also revealed the variations in quantity of vaccine types used across the world. For example, Portugal and Iran have used up to 12 different vaccine types in distribution to their populations. 

With additional time and data sets, it would be interesting to further evaluate where distribution channels originated, and oversight/approval process for effectiveness of vaccines used. 

US Data

In comparing distribution to total vaccination rates we noticed a gap that would suggest the waste associated vaccination distribution likely sourced by temperature requirements and short shelf life of the product. 

As expected, we saw the largest rates of vaccinations directly correlate to population totals, such as California and Texas. 

With some additional time and data it would be valuable to see comparisons across various countries relative to GDP and/or population. 



