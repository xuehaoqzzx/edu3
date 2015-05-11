/*var person={
    name:"iewn",
    age:30,
    eat: function () {
        alert('好吃');
    }

}
alert(person.name);

function person(){

}
person.prototype={
    name:"iwen",
    age:30,
    eat:function(){
        alert("我在吃");
    }
}
var p=new person();
p.age;
p.name;
p.eat();

function People(){

}
People.prototype.say=function(){
    alert("hello");
}
function Student(){

}
Student.prototype=new People();
var superSsay = Student.prototype.say;
Student.prototype.san=function(){
    superSsay.call(this);
    alert('stu-hello');
}
var s=new Student();
s.san();

(function () {
    var n="ime";
    function People(name){
        this._name=name;
    }
    People.prototype.say = function(){
        alert("peo-hello"+this._name);
    }
    window.People=People;
}())

function Student(name){
    this._name=name;
}
Student.prototype=new People();
var superSsay=Student.prototype.say;

Student.prototype.say=function(){
    superSsay.call(this);
    alert("stu-hello"+this._name);
}
var s = new Student("iewn");
s.say();

*/
(function(){
    var n="IMW";
    function Person(name){
        var _this={};
        _this._name=name;
        _this.sayHello=function(){
            alert("PHello"+_this._name+n);
        }
        return _this;
    }
    window.Person=Person;
}())

function Teacher(name){
    var _this=Person(name);
    var surperSay = _this.sayHello;
        _this.sayHello=function(){
        surperSay.call(_this);
        alert("Thello"+_this._name);
    }
    return _this;
}

var t=Teacher("xuehao");
t.sayHello();






















