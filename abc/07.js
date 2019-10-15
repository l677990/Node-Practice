/*
类与继承 
ES6语法
*/
class Aimal {
    static showInfo(){
        console.log('德玛西亚');
    }
    constructor(name){
        this.name=name;
    }
    showName(){
        console.log(this.name);
    }
}
// let a = new Aimal('cat');
// a.showName();
// Aimal.showInfo();
//-------------------------------
//类的继承extends super用来继承父类
class Dog extends Aimal{
    constructor(name,color){        
        this.name=name;
        this.color=color;
    }
    showColor(){
        console.log(this.color);
    }
}
let d = new Dog('doudou','yellow');
d.showName();
d.showColor();