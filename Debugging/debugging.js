const PI = 3.14;
let radius = 3;
let area = 0;


function circleArea(raduis) {
    return radius * radius * PI;
}

area = circleArea(radius);
console.log("Area is: " + area);


radius = 4;
area = circleArea(radius);
console.log("New area is: " + area);