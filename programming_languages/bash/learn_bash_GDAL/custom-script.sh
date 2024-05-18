#! /bin/bash

# Print local conda, python and ogrinfo
: '
conda info
python --version

ogrinfo --version
'

# print ogr info about the file
# ogrinfo -so -al worldcities.csv -oo X_POSSIBLE_NAMES=lng -oo Y_POSSIBLE_NAMES=lat

ogr2ogr -f GPKG worldcities.gpkg worldcities.csv \
    -oo X_POSSIBLE_NAMES=lng -oo Y_POSSIBLE_NAMES=lat -a_srs EPSG:4326

ogr2ogr -f GPKG canada-cities.gpkg worldcities.csv \
    -oo X_POSSIBLE_NAMES=lng -oo Y_POSSIBLE_NAMES=lat -a_srs EPSG:4326 \
    -where "country = 'Canada'"
