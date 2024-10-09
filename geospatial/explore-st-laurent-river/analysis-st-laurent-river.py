
# %%
import geopandas as gpd
import pandas as pd
import matplotlib.pyplot as plt
import fiona
from shapely import wkt
from sqlalchemy import create_engine
import requests, zipfile, io
from io import StringIO
import folium

dataFolderRelativePath = './data'

# %%
## DataSources
adminBoundariesUrl = 'https://diffusion.mern.gouv.qc.ca/Diffusion/RGQ/Vectoriel/Theme/Local/SDA_20k/FGDB/SDA.gdb.zip'

# Répertoire des municipalités du Québec
# https://www.donneesquebec.ca/recherche/dataset/repertoire-des-municipalites-du-quebec
municipalities_CsvUrl = 'https://donneesouvertes.affmunqc.net/repertoire/MUN.csv'
MRC_CsvUrl = 'https://donneesouvertes.affmunqc.net/repertoire/MRC_CM_Arg.csv'

# Géobase du réseau hydrographique du Québec (GRHQ)
# https://www.donneesquebec.ca/recherche/dataset/grhq
grhqUrl = 'https://diffusion.mern.gouv.qc.ca/Diffusion/RGQ/Vectoriel/Carte_Topo/Local/GRHQ/FGDB/'

# Caractérisation des berges de la partie fluviale du Saint-Laurent et analyse de l'évolution des facteurs hydro-climatiques influençant les aléas d'érosion et d'inondation
# https://catalogue.ogsl.ca/fr/dataset/ca-cioos_448d2828-d249-4d77-ad68-563512977150
riverLineUrl = 'https://catalogue.ogsl.ca/data/melcc/ca-cioos_448d2828-d249-4d77-ad68-563512977150/CaractBerges_TCREF_UL_Mars2020.zip'

# Modèles numériques de terrain hydro cohérents à l’échelle régionale
# https://www.donneesquebec.ca/recherche/dataset/modeles-numerique-de-terrain-hydro-coherents-a-l-echelle-regionale
mntHydroUrl = ''

#### Water flood
floodingUrl = 'https://www.donneesquebec.ca/recherche/dataset/cartographie-des-inondations-du-printemps-2023'

# %%
response = requests.get(adminBoundariesUrl)
response.raise_for_status()
zip_file = zipfile.ZipFile(io.BytesIO(response.content))
zip_file.extractall(path=dataFolderRelativePath)
adminBoundariesPath = dataFolderRelativePath + '/SDA.gdb'
# layers = fiona.listlayers(adminBoundariesPath)
municipalitiesBoundaries = gpd.read_file(adminBoundariesPath, layer='munic_s')

# %%
response = requests.get(MRC_CsvUrl)
response.raise_for_status()
csv_data = StringIO(response.text)
mrc = pd.read_csv(csv_data)

# %%
response = requests.get(municipalities_CsvUrl)
response.raise_for_status()
csv_data = StringIO(response.text)
municipalities = pd.read_csv(csv_data)

response = requests.get(MRC_CsvUrl)
response.raise_for_status()
csv_data = StringIO(response.text)
mrc = pd.read_csv(csv_data)

# %%
response = requests.get(grhqUrl)
response.raise_for_status()
zip_file = zipfile.ZipFile(io.BytesIO(response.content))
zip_file.extractall(path=dataFolderRelativePath)
# adminBoundariesPath = dataFolderRelativePath + '/SDA.gdb'
# layers = fiona.listlayers(adminBoundariesPath)
# municipalitiesBoundaries = gpd.read_file(adminBoundariesPath, layer='regio_s')

# %%
# Explore municipalitiesBoundaries
municipalitiesBoundaries.head()
municipalitiesBoundaries.describe()

# The column 'mcode' of municipalities match with 'MUS_CO_GEO' of municipalitiesBoundaries
# %%

# %%
# Explore municipalities
municipalities.head()
municipalities.describe()
# %%
