# GeometryJS

### goemetry.createVector(x : double, y : double) : Vector2d

### geometry.createPoint(x : double, y : double) : Point

### geometry.createLine(start : Point, end : Point) : Line

### geometry.createLine(x1 : double, y1 : double, x2 : double, y2 : double) : Line

### geometry.createRectangle() : Rectangle

### geometry.createContext() : Context

### geometry.distance(x1, y1, x2, y2) : double

## Point(x : double, y : double)

### point.x() : double

### point.y() : double

### point.distance(other : Point) : double

### point.equals(other : Point) : boolean

## Line(start : Point, end : Point) : Line

### line.start() : Point

### line.end() : Point

### line.length() : double

### line.direction() : double

### line.intersects(other : Line) : boolean

### line.contains(point : Point) : boolean

## Context(rotation : double, translation : ContextTranslation, scale : ContextScale)

### context.rotate(angle) : Context

### context.translate(x, y) : Context

### context.scale(x, y) : Context

### context.createPoint(x, y)

### context.createLine(start, end)

### context.createLine(x1, y1, x2, y2)

## ContextTranslation(x : double, y : double)

### translation.x()

### translation.y()

## ContextScale(w : double, h : double)

### scale.x()

### scale.y()
