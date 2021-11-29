'use strict';

// class는 template에 속한다.
// 이 template을 이용해 실제 데이터를 넣어 만든 것이 object.
// ES6부터 추가된 속성
// 기존에 존재하던 prototype-based 

// 1. class declarations(class 선언)
class person {
    // constructor 
    constructor{ name, age } {
    // fields
    this.name = name;
    this.age = age;
}
// methods
speak(){
    console.log(`${this.name}: hello!`);
}
}
// class라는 keword를 이용해서 person 이라는 class를 만들고,
// constructor라는 생성자를 이용해 나중에 object를 만들 때 필요한 데이터를 전달한다.
// 그렇게 전달받은 데이터를 class에 존재하는 두가지 fields인 name과 age에 우리가 전달받은 데이터를 할당해준다.
// 또 이렇게 speak()이라는 말하는 method도 존재하게 된다.
// 이 speak() method를 보면 단순하게 이 class에 this.name을 출력하면서 hello 인사해주는 speak이다.

// 새로운 object를 만들 때는 new라는 keyword를 써준다.
// 나는 새로운 사람을 만들어 줄거야
// 이 person에는 constructor 안에있는 name과 age라는 데이터가 전달되고 있다.
// 그래서 person('woony', 27) 하면 새로운 object가 만들어진다.
// 이걸 확인하기 위해서 console에 찍어보면면
const woony = new person('woony', 27);
console.log(woony.name); // woony
console.log(woony.age); // 27
woony.speak();
// 그리고 woony에는 speak말하는 method가 있지
// 그래서 woony.speak();을 이용하면 함수호출 가능


// 2. Getter and Setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age() {
        return this._age;
    }
    set age() {
        // if (value < 0) {
        // throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);
// 사람의 나이가 -1인건 말이 안 돼
// 그래서 이렇게 class를 사용하는 사용자나, 아니면 동료의 개발자가 잘 못 사용하더라도
// 우리가 방어적인 자세로 만들 수 있도록 해주는 것이 geeter와 setter다.
// user의 나이가 -1인건 말이 안 되기 때문에 get이라는 keyword를 이용해서 값을 return하고,
// set이라는 keyword를 이용해서 값을 설정할 수가 있다.
// 대신에 set은 값을 설정하기 때문에 value를 받아와야 한다.
// 그래서 사용자가 get age를 호출하게 되면 바로 this.age로 return 해야하고
// 새로운 value를 받으면 this.age를 value로 설정하게 된다.
// 근데 이렇게 하면 계속해서 call stack이 추가 되었다는 error가 뜨는데,
// 우리가 age라는 getter를 정의하는 순간
// this.age는 메모리에 올라가 있는 데이터를 읽어오는 것이 아니라, 바로 getter를 호출하게 된다.
// 그리고 setter를 정의하는 순간, this.age = age;를 호출할 때(값을 할당할 때) 바로 메모리의 값을 할당하는 게 아니라,
//  setter를 호출하게 된다. 그 말은, 우리가 setter안에서 전달된 value를 this.age에 할당할 때 메모리의 값을 update하는 것이 아니라,
//  이 setter를 호출하게 된다. 즉 이 setter로 다시 돌아와서 이 문장으 또다시 setter를 호출하고 이렇게 계속 무한대로 반복되니까,
//  이 call stack이 다 찼어 하고 경고가 뜨는건데, 이것을 방지하기 위해서는, getter와 setter안에 쓰여지는 변수의 이름을 조금 다르걸로 만들어줘야 함.
//  보통은 ._age 이렇게 쓰인다.
//  그래서 이제는 setter가 있기 때문에, 야 - 값을 주면 어떡하니? 이렇게 경고를 보낼 수 있게됨.
// 다른 방법으로는, setter에 this._age = value < 0 ? 0 : value; 이런식으로 써줘도 돼
// 그러면 -1로 지정했지만 0으로 저장되어 진다.
// 그리고 field는 기호가 들어간 age(._age)가 있지만, .age라고 호출할 수 있는 것, 그리고 .age에 값을 할당할 수 있는 것은,  
// 바로 이 내부적으로 getter와 setter를 이용하기 때문이다.

// 3. Fields (public, private)
// 정말 최근에 추가되어진 것

class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// constructor 생성자를 사용하지 않고 그냥 정의할 수 있음.
// 이렇게 그냥 정의하게 되면, 외부에서 접근이 가능하고,
// 그리고 #(hash)기호를 붙이게 되면, class 내부에서만 값이 보여지고, 접근이되고, 값의 변경이 가능하지만,
// class 외부에서는 이 값을 읽을수도 변경할 수도 없음.
// 그래서 이렇게 publicField는 2라고 나오지만, privateField는 undefined가 나옴.
// 정말 최근에 추가되어진 것이기 때문에, safari에서도 지원이 되지 않음.
// 최신 브라우저에서도 지원이 되지 않기 때문에, 쓰려면 babel을 이용해야함. 

// 4. Static properties and methods
// 얘도 최근에 추가됨.
class Article {
    static publisher = "Dream Coding";
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }
    static printPublisher() {
        console.log(Article.publisher);
    }
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
// class 안에 있는 fields와 method들은 새로운 object를 만들때마다,
// 그대로 복제되어서, 이 값들만 지정된 값으로 변경이 되어서 만들어진다.
// 간혹 이런 object에 상관없이 데이터에 상관없이 
// class가 가지고 있는 고유한 값과 이런 데이터에 상관없이 동일하게 반복적으로 사용되어지는 method가 있을 수 있는데, 
// 그런것들을 static이라는 keyword를 이용해서 붙이면 object에 상관없이 class 자체에 연결되어 있는데,
// 이게 무슨 말이냐면, 이렇게 article1과 article2라는 object를 만들게되면,
// 만약 여기서 static을 사용하지 않는다면, object를 이용해서 object에 publisher를 출력할 수 있었을거다.
// 그럼 undefined이 출력이된다. 이 말은 이 object안에 publisher는 '몰라 값이 지정되지 않았어'라고 하는 것이다.
// 그것은 바로 이 static은 object마다 할당되어지는 것이 아니라, class 자체에 즉, article이라는 class자체에 붙어있기 때문이다.
// 그래서 article1.publisher를 Article.publisher라고 한다면 Dream Coding이 출력이 된다.
// 그래서 static 함수로 호출할 때도 class 이름을 이용해서 
// Article.printPublisher(); 라고 하면 Dream Coding이 출력되는 걸 알 수 있다.
// 나중에 typescript 를 사용할 때도 많이 쓰임
// object에 상관없이 들어오는 데이터에 상관없이 공통적으로 class에서 쓸 수 있는 거라면,
// static과 static method를 이용해 작성하는 것이 메모리의 사용을 조금 줄여줄 수 있는거지.

// 5. Inheritance
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() {
        console.log(`drawing ${this.color} color of`);
    }
    getArea() {
        return width * this.height;
    }
}
class Rectangle extends Shape { }
class Triangle extends Shape {
    draw() {
        super.draw();
        console.log("세모")
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
}
const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());
// Shape이라는 class 안에는 3개의 fields가 있고,
// draw(), getArea()라는 2개의 method가 있다.
// 여기서 Rectangle이라는 class를 만들고 싶다면, 동일하게 계속 반복해서 하기 보다는,
// extands라는 keyword를 이용해서 Shape을 바로 이렇게 연장할 수 있다.
// 그럼 Shape에 있는 fields와 method들이 자동적으로 포함이 됨
// 동일한 곳에 재사용 가능
// 다양성이 획기적임. rectangle.getArea()는 400이 나오지만, triangle.getArea()는 20*20한거에 2를 또 나눠줘야함.
// 이럴 때, 우리가 필요한 함수만 재정의해서 사용할 수 있다.
// 이런걸 overwriting이라고 한다.
// 여기서 triangle을 drawing 할 때 좀 더 색다르게 drawing 하고 싶어서 drawing을 재정의 하면
// 재정의된 draw()만 호출이 된다. Shape에 정의된 draw()는 호출되지 않음.
// 두 method를 다 호출시키고 싶을 땐 super를 사용.

// 6. InstanceOf
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true
// 우리가 JS에서 만든 모든 object class들은 이 JS에 있는 object를 상속한거다.

// 왼쪽에 있는 object가 이 오른쪽에 있는 class의 instance인지 아닌지
// 즉 이 object가 class를 이용해서 만들어진 아이인지 아닌지 확인하는거다.
// true와 false를 return 하는데