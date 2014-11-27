# GeometryJS

### geometry.createPoint(x, y)

Creates a Point instance for the provided coordinates. Both **x** and **y** must be
numbers.

### geometry.createLine(start, end)

### geometry.createLineRaw(x1, y1, x2, y2)

### geometry.createRectangle(edge, depth);

Creates a rectangle from a Line instances **edge** and a **depth** which must be a
number.

The **edge** describes one of the edges of the rectangle. The **depth** is the
length of the adjacent edge which extends in a direction 90 degrees counter-clockwise
from **edge**.

Example

The rectangle defined with the **edge** `(0, 10)->(10,10)` and the **depth** of `10` 
describes a square whose corners are `(0, 10)`, `(10, 10)`, `(10, 20)` and `(0, 20)`. 

### geometry.createContext()

### geometry.distance(x1, y1, x2, y2)

## Class: geometry.Point(x, y)

### point.x() : double

### point.y() : double

### point.distance(other : Point) : double

### point.equals(other : Point) : boolean

## Class: geometry.Line(start, end)

This class is created using the methods `geometry.createLine(start, end)` and
`geometry.createLineRaw(x1, y1, x2, y2)`

### line.start() : Point

### line.end() : Point

### line.length() : double

### line.direction() : double

### line.intersects(other : Line) : boolean

### line.contains(point : Point) : boolean

## Class: geometry.Context(rotation : double, translation : ContextTranslation, scale : ContextScale)

### context.rotate(angle) : Context

### context.translate(x, y) : Context

### context.scale(x, y) : Context

### context.createPoint(x, y)

### context.createLine(start, end)

### context.createLine(x1, y1, x2, y2)

## Class: geometry.ContextTranslation(x : double, y : double)

### translation.x()

### translation.y()

## Class: geometry.ContextScale(w : double, h : double)

### scale.x()

### scale.y()
