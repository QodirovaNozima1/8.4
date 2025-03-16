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
    //masala2
    var BankAccount = /** @class */ (function () {
        function BankAccount(balance) {
            this.balance = 0;
            this.balance = balance;
        }
        BankAccount.prototype.getBalance = function () {
            return this.balance;
        };
        BankAccount.prototype.deposit = function (amount) {
            this.balance += amount;
        };
        BankAccount.prototype.pay = function (amount) {
            if (amount > this.balance) {
                return "You do not have enough money for that mission";
            }
            this.balance -= amount;
        };
        return BankAccount;
    }());
    var owner = new BankAccount(0);
    owner.deposit(100);
    owner.pay(49);
    console.log(owner.getBalance());
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
    //masala4
    var Product = /** @class */ (function () {
        function Product(price) {
            this.price = price;
        }
        Product.prototype.getBalance = function () {
            return this.price;
        };
        Product.prototype.applayDiscount = function (percentage) {
            this.price = this.price - (this.price * percentage / 100);
        };
        return Product;
    }());
    var owner = new Product(500);
    owner.applayDiscount(20);
    console.log(owner.getBalance());
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
