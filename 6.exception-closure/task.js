// Задание №1
function parseCount(num) {
    const parsedNum = Number.parseFloat(num);
    if (isNaN(parsedNum)) {
        throw new Error('Невалидное значение');
    }
    
    return parsedNum;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        console.log(error);
        return error;
    }
}

// Задание №2
class Triangle {
    constructor(a, b, c) {
        if ((a + b < c) || (b + c < a) || (a + c < b)) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    get perimeter() {
        return this.a + this.b + this.c;
    }

    get area() {
        const s = (this.perimeter / 2);
        let area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
        area = parseFloat(area.toFixed(3));
        return area;
    }
}

function getTriangle(a, b, c) {

    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            get area() { return 'Ошибка! Треугольник не существует'; },
            get perimeter() { return 'Ошибка! Треугольник не существует'; }
        }
    }
}