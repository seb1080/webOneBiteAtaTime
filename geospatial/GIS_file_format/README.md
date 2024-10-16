
# GIS File Format

- [Wikipedia GIS file format](https://en.wikipedia.org/wiki/GIS_file_format)
- [File format](https://esri-es.github.io/awesome-arcgis/arcgis/content/data-storage/file-formats/)
- [GIS geography](https://gisgeography.com/gis-formats/)
- [Awesome GIS](https://github.com/elasticlabs/awesome-gis)

## GIS Data type

## Cloud native date format

- [](https://guide.cloudnativegeo.org/)

## TopoJSON

- [TopoJSON](https://github.com/topojson/topojson)

## File Geodatabase (FGDB) or .gdb

File Geodatabase (FGDB) is a proprietary Esri database format, favoured for more complex uses of GIS datasets in Esri software.

File geodatabases are made up of seven system tables plus user data. User data can be stored in the following types of datasets:

Feature class
Feature dataset
Mosaic dataset
Raster catalog
Raster dataset
Schematic dataset
Table (nonspatial)
Toolboxes

Feature datasets can contain feature classes as well as the following types of datasets:

Attachments
Feature-linked annotation
Geometric networks
Network datasets
Parcel fabrics
Relationship classes
Terrains
Topologies
The default maximum size of datasets in file geodatabase is 1 TB. The maximum size can be increased to 256 TB for large datasets (usually raster).

## PMTiles

PMTiles is a single-file archive format for pyramids of tiled data. A PMTiles archive can be hosted on a storage platform like S3, and enables low-cost, zero-maintenance map applications.

PMTiles is a general format for tiled data addressed by Z/X/Y coordinates. This can be cartographic basemap vector tiles, remote sensing observations, JPEG images, or more.

PMTiles readers use HTTP Range Requests to fetch only the relevant tile or metadata inside a PMTiles archive on-demand.

- [PMTiles](https://docs.protomaps.com/pmtiles/)
- [Specifications](https://github.com/protomaps/PMTiles/blob/main/spec/v3/spec.md)
- [Protommaps go-pmtiles](https://www.youtube.com/watch?v=dF9UuVKOf34)
