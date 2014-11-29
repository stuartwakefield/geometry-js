# GeometryJS

### geometry.createPoint(x, y)

Creates a **Point** instance for the provided coordinates. Both **x** and **y** must be
numbers.

### geometry.createLine(start, end)

Creates an instance of **Line** from the provided points **start** and **end**, both
must be instances of **Point**.

### geometry.createLineRaw(x1, y1, x2, y2)

Creates an instance of **Line** from the provided coordinates. All coordinates: **x1**,
**y1**, **x2** and **y2** must be numbers.

### geometry.createPolygon(p1, p2, ..., pN);

Creates a **Polygon** from passed **points**, all points must be instances of **Point**.

### geometry.createPolygonRaw(x1, y1, x2, y2, ..., xN, yN)

Creates a **Polygon** from the provided coordinates. All coordinates must be numbers, an
unlimited number of coordinate pairs can be provided but must be in pairs.

### geometry.createContext()

Creates a geometry context which can be used to apply transformations.

### geometry.distance(x1, y1, x2, y2)

## Class: geometry.Point(x, y)

**Point** is created using the method `geometry.createPoint(x, y)`.

### point.x()

Returns the position of the point along the **x** axis.

### point.y()

Returns the position of the point along the **y** axis.

### point.distance(other)

Returns the distance between the point and **other**.

### point.direction(other)

Returns the angle (in radians) of the point **other**, the angle is counterclockwise
in relation to the azimuth, the azimuth is the positive x axis.

### point.equals(other)

Returns **true** if the point and **other** represent the same coordinates.

### point.translate(x, y)

Returns a new **Point** that represents the position of the point after translating by
**x** and **y**. Both **x** and **y** must be numbers.

### point.substract(other)

Returns a new **Point** that represents the position of the point after subtracting the
coordinates of the point **other**, which must be an instance of **Point**.

## Class: geometry.Line(start, end)

**Line** is created using the methods `geometry.createLine(start, end)` and
`geometry.createLineRaw(x1, y1, x2, y2)`.

### line.start()

Returns the **Point** representing the start of the line.

### line.end()

Returns the **Point** representing the end of the line.

### line.length()

Returns the length of the line from the **start** to the **end**.

### line.direction()

Returns the angle (in radians) of the line counterclockwise in relation to the
azimuth.

### line.intersect(other)

Returns the **Point** at which **other** intersects this **Line** instance. Will
return **null** if the lines do not intersect.

### line.containsPoint(point)

Returns **true** if the point sits along the line, **false** otherwise.

### line.contains(other)

Returns **true** if the line **other** is contained within this **Line** instance.

### line.equals(other)

Returns **true** if the line and **other** represent lines starting and ending at
the same points.

### line.reverse()

Returns a new **Line** instance where the **start** and **end** points are reversed.

### line.point(dist)

Returns a **Point** along the line that is the given distance **dist** from the
**start** point. Will return **null** if **dist** is out of bounds.

### line.split(dist)

Returns an array of one or two **Line** instances that represent the two line
components that are produced as a result of splitting the line at the given distance
from start. Returns a single line component if **dist** is out of bounds.

## Class: geometry.Polygon(p1, p2, ..., pN)

**Polygon** is created using the methods `geometry.createPolygon(p1, p2, ...,p3)`
and `geometry.createPolygonRaw(x1, y1, x2, y2, ..., xN, yN)`.

### polygon.points()

Returns the points that represent the vertices of the polygon.

### polygon.lines()

Returns the lines that represent the edges of the polygon.

### polygon.perimeter()

Returns the perimeter length of the polygon.

### polygon.area()

Returns the area of the polygon.

### polygon.containsPoint(point)

Returns true if the passed **Point**, point, is contained within the polygon.

### polygon.contains(other)

Returns true if the passed **Polygon**, other, is contained completely within the
polygon.

### polygon.intersectLine(line)

Returns a list of zero to many lines that represent the areas of the passed line
that intersect with the polygon. Line must be an instance of **Line**.

### polygon.intersect(other)

Returns a list of zero to many polygons that represent overlaps between the
polygon and other, which must be an instance of **Polygon**. The list will be
empty if there are no overlaps.

### polygon.union(other)

Returns a polygon that represent the area of the polygon plus the area of other,
which must be an instance of **Polygon**.

### polygon.complement(other)

Returns a list of zero to many polygons that represent the remaining area of
polygon after subtracting the area of other. Other must be an instance of **Polygon**.
The list will be empty if the two polygons are equal.

### polygon.diff(other)

Returns a list of zero to many polygons that represent the differences between
the polygon and **other**. The list will be empty if the two polygons are equal.
The result is equal to the complement of union and intersect. Other must be a
**Polygon**.

### polygon.reverse()

Reverses the directions of the points and edges that represent the polygon. Does
not affect the coordinates of the polygon.

### polygon.truncate(dist)

Returns a new **Polygon** that is the result of truncating the perimeter of the
polygon from the first point, a passed **dist**, which must be a number.

### polygon.point(dist)

Returns the **Point** that represents the coordinates found by tracing the
perimeter of the polygon a passed **dist**, which must be a number.

## Class: geometry.Context(rotation, translation, scale)

### context.rotate(angle)

### context.translate(x, y)

### context.scale(x, y)

### context.createPoint(x, y)

### context.createLine(start, end)

### context.createLine(x1, y1, x2, y2)

## Class: geometry.ContextTranslation(x, y)

### translation.x()

### translation.y()

## Class: geometry.ContextScale(w, h)

### scale.x()

### scale.y()

## geometry.float

### float.EPSILON

Represents the difference between the smallest value greater than one that can be
represented by a number and one. Used for floating point comparison.

### float.equal(a, b)

Returns **true** if the two numbers **a** and **b** could represent the same number
taking into consideration floating point accuracy errors.
