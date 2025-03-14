{
    //masala1
    var Student = /** @class */ (function () {
        function Student(ism, yoshi, bahosi) {
            this.name = ism;
            this.age = yoshi;
            this.grade = bahosi;
        }
        Student.prototype.getInfo = function () {
            return "Ism:".concat(this.name, ", Yoshi:").concat(this.age, ", Bahosi:").concat(this.grade);
        };
        return Student;
    }());
    var student = new Student("Sarvar", 16, "A");
    console.log(student.getInfo());
}
{
    //masala3
    var Circle = /** @class */ (function () {
        function Circle(p, radius) {
            this.radius = radius;
            this.pi = p;
        }
        Circle.prototype.getArea = function () {
            return "".concat(this.pi * this.radius * this.radius);
        };
        return Circle;
    }());
    var radius = new Circle(3.1416, 5);
    console.log(radius.getArea());
}
{
    //masala5
    var Car = /** @class */ (function () {
        function Car(nomi, rusumi, yili) {
            this.name = nomi;
            this.model = rusumi;
            this.year = yili;
        }
        Car.prototype.getCarInfo = function () {
            return "".concat(this.name, " ").concat(this.model, " - ").concat(this.year);
        };
        return Car;
    }());
    var car = new Car("Toyota", "Corolla", 2022);
    console.log(car.getCarInfo());
}
