# History of web mapping

- [Introduction to web Mapping](https://geobgu.xyz/web-mapping-2018/)
- [Brief history of web maps](https://forrest.nyc/a-brief-history-of-web-maps/)
- [History of web mapping](https://www.slideshare.net/slideshow/history-of-web-mapping/7283501#1)
- [System architecture for web mapping](https://www.e-education.psu.edu/geog585/node/684)
- [Maptime Lessons resources](https://maptime.io/lessons-resources/)

### 1993 - PARC Map Viewer, was launched by Xerox

To show data on the map, the PARC Map Viewer would read a request from the user, and using a geographic database it would render a map image, then return the map image from the server back to the browser.

![Client Server](https://cdn-images-1.medium.com/v2/resize:fit:800/1*nu9XxoN93uELnaXmUbtP9g.png)

### 1996 - Mapquest was launched. Shortly after in the same year, Multimap was launched in the UK

Mapquest eventually became a publicly-traded company and was ultimately acquired by AOL for $1.1 billion in 1999.

![Mapquest](https://cdn-images-1.medium.com/max/800/1*sJcSVdcy0lmMpS5p3foM6g.png)

### 2 May 2020 - GPS opening to commercial usage

### 2004 - Steve Coast started a project called OpenStreetMap

### 2004 - Yahoo Maps

More people use maps online then e-mail.

### February 8, 2005 Google Map was release

Google wasn’t done trying to bring location into their search products, and in 2004 the company started the process of acquiring Keyhole, Where2 Technologies, and Zipdash. These three technologies would form what we would know as Google Earth, Google Maps, and Google Maps Mobile respectively.

![Google Maps](https://cdn-images-1.medium.com/max/800/1*S_hR-vovVTks857rw3fZDw.png)

Google Maps wasn’t the first attempt at location-based search. The company launched a feature called ‘Google Local’ in 2003 where users could include a location with your search.

**The slippy map** technically know as a tiled web map.

First, is that the tiles themselves are quite small. The size that they came up with, 256px by 256 px which became the default for web maps, might be only a few kilobytes. Each one could load quite quickly, and the tile would display when it was returned from the server.

The entire globe will fit on a single tile at zoom level 0, then it will split into 4 tiles at zoom 1, 16 tiles at zoom 2, so on and so on.

Out of all the map projections that have been developed, there was one that was highly suitable for putting the entire map on a single square PNG tile — the Mercator projection. The map projection designed for nautical navigation was now going to be pushed to billions of computers and phones simply because of the efficiency it provided for creating small square PNG tiles.

Google use the Web Mercator or "Spherical Mercator" projection EPSG:3857.
Then change for a spherical projection EPSG:4326.

### May 2007 - Release of Street View

### 2008 - ArcGIS Server Rest API

### End of 2010 - 350000 site use Google Maps API

### 2010 - Creation of Mapbox

Mapbox was backed by Development Seed.

### 2011 - Creation of Carto

### 2011 - release of Leaflet.js

- [Leaflet github](https://github.com/Leaflet/Leaflet)

### 2011 WebGL release

- [MDN WebGL API](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API)

### Google Earth Engine

- [](https://earthengine.google.com/platform/)

### Kepler.gl

- [](https://kepler.gl/)

---

### December 2022 - The Overture Maps Foundation is launched

Founded in December 2022 by Amazon Web Services (AWS), Meta, Microsoft, and TomTom, Overture today includes more than a dozen mapping, geospatial, and technology companies, including new members Esri, Cyient, InfraMappa, Nomoko, Precisely, PTV Group, SafeGraph, Sanborn, and Sparkgeo.

- [Ouverture Maps](https://overturemaps.org/)

### October 31, 2023 - Stadia Maps buy Stamen

## Map Tiles

- [Map tiles & Pyramid](https://www.youtube.com/watch?v=_do0Mc5uYzs)

## Mapbox Vector Tiles (MVT)

Tool for editing tiles [Maputnik](https://maplibre.org/maputnik/?layer=1928875599%7E0#1.34/0/0)

A vector tile is a lightweight data format for storing geospatial vector data, such as points, lines, and polygons.

![Map tiles pyramid](https://miro.medium.com/v2/resize:fit:640/format:webp/1*Shdpi_nEOY28mdRiGLYruQ.png)

Additionally, instead of displaying data for any location, a tiled map shows data within a fixed grid at each zoom level, combining these tiles to cover the desired area.

![](https://miro.medium.com/v2/resize:fit:720/format:webp/1*e32-9rYf8UPdX_vKtlUNtg.png)

- [](https://medium.com/@lawsontaylor/diy-vector-tile-server-with-postgis-and-fastapi-b8514c95267c)

- [Vector tile spec](https://github.com/mapbox/vector-tile-spec)
- [Vector tiles Standards](https://docs.mapbox.com/data/tilesets/guides/vector-tiles-standards/)
- [Proto Buf](https://protobuf.dev/)

- [Awesome Vectorl tiles](https://github.com/mapbox/awesome-vector-tiles)
