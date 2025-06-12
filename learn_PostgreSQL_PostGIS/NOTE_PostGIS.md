
# PostGIS

## PostGIS Spatial data Types

- [PostgreSQL Not for professional](https://drive.google.com/drive/u/0/folders/1gnZVVymztzGffrfJttUm5e_7RMx4d9Y-)

- [PostGIS in action](https://drive.google.com/drive/u/0/home)

- Geometry: The planar type.

- Geography: The spheroidal geodetic type.

- Raster: The multiband cell type.

- Topology: The relational

### Geometry Types

| Type                 | Description               |
| -------------------- | ------------------------- |
| `POINT`              | Single point              |
| `LINESTRING`         | Connected line segments   |
| `POLYGON`            | Area enclosed by line     |
| `MULTIPOINT`         | Collection of points      |
| `MULTILINESTRING`    | Collection of lines       |
| `MULTIPOLYGON`       | Collection of polygons    |
| `GEOMETRYCOLLECTION` | Mixed geometry collection |

### Spatial Reference System

A Spatial Reference System defines how the position of points on the Earth's surface is represented in space — through coordinates that are tied to a specific mathematical model of the Earth.

👉 It consists of:

a Datum → defines the size and shape of the Earth (ellipsoid) and how that ellipsoid is aligned to the real Earth (geoid);

a Coordinate system → defines how coordinates (latitude, longitude, height, X/Y/Z, or projected coordinates) are expressed;

a Map projection (optional) → defines how to flatten the Earth's curved surface into a 2D map.

### Spatial Indexing

Spatial Indexing is a method of organizing spatial data (points, lines, polygons) so that spatial queries can be performed very quickly.

👉 Without an index, spatial queries (like ST_Intersects, ST_Within, ST_DWithin, ST_Contains, ST_Distance) would require a full table scan → comparing every geometry → very slow.

👉 With a spatial index, the database can rapidly filter out most geometries and only test the ones that could actually match.

| Index Type                                  | Description                                                                                         |
| ------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| **R-tree / GIST (Generalized Search Tree)** | Most common in PostGIS — stores geometries in a **hierarchical bounding box tree**.                 |
| **Quad-tree**                               | Divides space into 4 quadrants recursively — used in some in-memory engines or vector tile systems. |
| **Grid index**                              | Divides space into fixed grids — sometimes used in combination with others.                         |
