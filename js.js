class Shape {
    constructor(color = 0, initX = 0, initY = 0) {
        this.color = color;
        this.initX = initX;
        this.initY = initY;
    }

    getColor() {
        return this.color;
    }

    setColor(val) {
        this.color = val;
    }

    getCoords() {
        return (
            `${this.initX }, ${this.initY};`
        )
    }

    moveTo(newX, newY) {
        this.initX = newX;
        this.initY = newY;
    }

}

class Rectangle extends Shape {
    constructor(initWidth = 0, initHeight = 0) {
        super("#f00", 0, 0);
        this.initWidth = initWidth;
        this.initHeight = initHeight;
    }

    setWidth(newWidth) {
        this.initWidth = newWidth;
    }

    setHeight(newHeight) {
        this.initHeight = newHeight;
    }

    getDims() {
        return (
            `${this.initWidth}, ${this.initHeight}`
        )
    }

    draw() {
        console.log(
            `Drawing a Rectangle at:,
            (x:${this.initX},y:${this.initY}),
            With dimentions:,
              width: ${this.initWidth}
              height: ${this.initHeight}
            Filled with color: ${this.color} 
            `
        )
    }
}

// const one = new Shape('green', 10, 10);
// const two = new Rectangle();

class Circle extends Shape {
    constructor(params, initRadius = 0) {
        super(params);
        this.initRadius = initRadius;
    }

    getRadius() {
        return this.initRadius;
    }

    setRadius(val) {
        this.initRadius = val;
    }

    draw() {
        console.log(
            `Drawing a Circle at:,
            (x:${this.initX},y:${this.initY}),
            With dimentions:
              radius: ${this.initRadius}
            Filled with color: ${this.color} 
            `
        )
    }
}

// const three = new Circle;