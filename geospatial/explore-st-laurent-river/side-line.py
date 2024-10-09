
# %%
# Create a GeoDataFrame from the WKT string
geometry = wkt.loads('LINESTRING (45.0064051 -74.7950346, 50.3348612 -64.1506207)')
centerLineStLawrenceRiver = gpd.GeoDataFrame([{'geometry': geometry}], crs="EPSG:4326")
centerLineStLawrenceRiver.buffer()



# %%
grhqPath = dataFolderRelativePath + '/GRHQ_00AA.gdb'
grhq_layers = fiona.listlayers(grhqPath)
grhq_layers
RH_R = gpd.read_file(grhqPath, layer='RH_R')

# %%
# Explore RHG_L
RH_R = RH_R.to_crs(epsg=4326)
RH_R.head()
RH_R.describe()
RH_R.plot()
subset_RH_R = RH_R[0:400]
subset_RH_R.plot()

# %%
# Create a Folium map centered around the approximate center of the dataset
customMap = folium.Map(location=[45, -73], zoom_start=10)

# Add the GeoDataFrame to the map
folium.GeoJson(subset_RH_R).add_to(customMap)

customMap

# %%



# %%
# Find string 'Percé' in the column 'munnom' of municipalities
perce_municipalities = municipalities[municipalities['munnom'].str.contains('Percé', case=False, na=False)]
perce_municipalities