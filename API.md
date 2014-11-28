# GeometryJS

### geometry.createPoint(x, y)

Creates a **Point** instance for the provided coordinates. Both **x** and **y** must be
numbers.

### geometry.createLine(start, end)

Creates an instance of **Line** from the provided points **start** and **end**, both
should be instances of **Point**.

### geometry.createLineRaw(x1, y1, x2, y2)

Creates an instance of **Line** from the provided coordinates. All coordinates: **x1**,
**y1**, **x2** and **y2** must be numbers.

### geometry.createPolygon(points);

Creates a **Polygon** from an array of **points**.

### geometry.createContext()

Creates a geometry context which can be used to apply transformations.

### geometry.distance(x1, y1, x2, y2)

## Class: geometry.Point(x, y)

This class is created using the method `geometry.createPoint(x, y)`.

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

## Class: geometry.Line(start, end)

This class is created using the methods `geometry.createLine(start, end)` and
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
