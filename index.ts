{
    //masala1
    class Student{
        name:string
        age:number
        grade?:string
        constructor(ism:string,yoshi:number,bahosi:string){
            this.name = ism
            this.age = yoshi
            this.grade = bahosi
        }
        getInfo(){
            return `Ism:${this.name}, Yoshi:${this.age}, Bahosi:${this.grade}`
        }
    }
    const student = new Student("Sarvar",16,"A")
    console.log(student.getInfo());
    
}
{
    //masala2
    class BankAccount {
                private balance: number = 0
                    constructor(balance: number){
                        this.balance = balance
                    }
                    getBalance(){
                        return this.balance
                    }
                deposit(amount: number){
                    this.balance += amount
                }
                pay(amount: number){
                    if(amount > this.balance){
                        return "You do not have enough money for that mission"
                    }
                    this.balance -= amount
                }
            }
        
            const owner: BankAccount = new BankAccount(0)
        
            owner.deposit(100)
        
            owner.pay(49)
        
            console.log(owner.getBalance())
}
    
{
    //masala3
    class Circle{
        radius:number
        pi:number
        constructor(p:number,radius:number){
            this.radius = radius
            this.pi = p
        }
        getArea(){
            return `${this.pi * this.radius * this.radius}`
        }
    }
     const radius = new Circle( 3.1416, 5)
     console.log(radius.getArea());
     
}
{
    //masala4
    class Product {
            name : string
            price: number
            constructor(price: number) {
              this.price = price;
            }
            getBalance() {
              return this.price;
            }
        
            applayDiscount(percentage: number) {
              
              this.price = this.price - ( this.price * percentage / 100)
            }
          }
        
          const owner: Product = new Product(500);
        
          owner.applayDiscount(20);
        
          console.log(owner.getBalance());
}
{
    //masala5
    class Car{
        name:string
        model:string
        year:number
        constructor(nomi:string,rusumi:string,yili:number){
            this.name = nomi
            this.model = rusumi
            this.year = yili
        }
        getCarInfo(){
            return `${this.name} ${this.model} - ${this.year}`
        }
    }

    const car = new Car("Toyota","Corolla",2022)
    console.log(car.getCarInfo());

}