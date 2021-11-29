// 1. Literals and properties

// Objects
// primitive type은 변수 하나당 값을 하나만 담을 수 있음.
const name = "woony";
const age = 27;
// 만약 얘네를 출력하고 싶은 함수를 만든다면,
print(name, age);
// 이름과 나이를 각각 parameter로 전달해줘야 함.
// 그리고 함수를 정의해서 쓸 때도, 두가지의 parameter를 받아올 수 있도록 만들어줘야함

const obj1 = {}; // 'object literal' suntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}
// 이렇게 하게되면, 만약에 주소나 full name last name 이렇게 조금 더 인자가 많아지게 되면,
// 추가해야 되는 것들이 많아짐.
// 그렇게 되면 관리하기도 힘들고, logical하게 그룹으로 묶어서 생각할 수 없기 때문에 힘들다.
// 그래서 이런 문제들을 개선하고자 object를 사용.

const woony = { name: 'woony', age: 27 };
print(woony);
// 이렇게 하면 object로 관리하면 되니까 더이상 name과 age를 따로 받지않고 person이라는 데이터를 받아서
// person.name person.age를 출력하면 됨.
// 그리고 이렇게 전달할 때도, 호출할 때도 woony만 전달하면 되니까 간편하게 데이터를 관리할 수 있음.
// object를 만드는 방법은

// object를 new라는 keyword를 이용해서 생성하면 object에서 정의된 constructor가 호출이 됨.
// but, JS에서는 보다시피 class가 없어도{}를 이용해서 바로 object를 생성할 수 있음.
// JS는 dynamic clip type language라고 했잖아요, 
// 동적으로 type이 runtime때 결정되는 언어!
// 그래서 이런 이상한 짓도 가능 ↓
woony.hasJob = true;
console.log(woony.hasJob);
// 이렇게 뒤늦게 하나의 property를 추가해 줄 수 있음.
// 그래서 우리가 name과 age라는 object를 정의했음에도 불구하고 그 뒤에 우리가 마음이 바뀌면,
// 위에서 코딩할 때는, 사람은 이름과 나이 이정도 정보면 충분해라고 생각해서 만들다가,
// 뒤늦게 일을 하는지 안 하는지도 추가할까 이렇게 마음이 바뀌어서 다시 추가하는 이런 짓도 가능.
// 다른 언어에서는 흔한 일이 아니다.
// 이렇게 동적으로 코딩하면 금방금방 하기에는 좋지만, 나중에 유지보수하기가 굉장히 힘이들고,
// 생각지도 못 한 error가 발생할 수 있기 때문에, 가능하면 이런 방법은 쓰지 않고 코딩하는 게 좋다.
// 하나더! 삭제도 가능하다.
delete woony.hashJob
// 마음이 바뀌어서 얘를 빼고 싶어 그럼 delete하고 동일한 걸 출력해보면
console.log(woony.hasJob);
// undefined이 출력됨.
// 여기서 중요한 point는
// object는 key와 value의 집합체라는 것이다.
// object = { key: value };
// 이 말은 object는 key 우리가 접근할 수 있는 변수 property와 그 property가 가지고 있는 값 이렇게 두가지로 나위어져있는 걸 알 수 있다.


// 2. Computed properties(계산된 properties)
console.log(woony.name);
// 우리가 object에 있는 데이터에 접근할 때는 이렇게 .(dot)을 이용해서 접근했는데,
// 다른 방법도 있다. 이렇게 woony라는 object에[]이 괄호를 이용해서 name이라는 string 즉 object안에있는 변수의 이름을 string 형태로 접근이 가능하다.
console.log(woony['name']);
// 여기서 한가지 주의할 점은 property는 string type으로('')
// 아까 이미 생성된 woony라는 object에 hasJob이라는 새로운 property를 추가했다가 삭제했는데,
// 그래서 얘를 다시 출력하면
woony['hasJob'] = true;
console.log(woony.hasJob);
// undefined이라고 나옴.
// 여기서 computed property를 이용해서 동일한 것을 할 수 있음.
//woony라는 object에 hasJob이라는 property를 true라고 할당하게 되면,
// undefinde이라고 뜨던게 true라고 출력이 됨.
// 우리가 .(dot)을 쓸 때는 코딩하는 순간 우리가 그 key에 해당하는 값을 받아오고 싶을 때 .을 사용해 코딩을 하고
// computed property를 쓸때는 우리가 정확하게 어떤 key가 필요한지 모를 때
// 즉 runtime에서 결정될 때 이 computed property를 쓰게 된다.
// 그래서 코딩할 때는 그냥 .을 써서 코딩하는게 맞다.
// 우리가 실시간으로 원하는 key의 값을 받아오고싶다면, computed property를 쓰면 된다.
function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(woony, 'name');
printValue(woony, 'age');
// 이 말이 무슨 말이냐!
// 우리가 printValue라는 함수가 있다고 합시다.
// 이 함수는 obj와 key를 받아서 그 object에 있는 key에 상응하는 value를 출력하는 함수다
// 그래서 언제 어떤 key를 받는지 몰라
// 예를 들면 이 원하는 key를 사용자에게 input을 받아서 출력해야되는 함수라면,
// 이 key는 어떤 걸 출력할지 코딩하는 이 시점에는 나는 전혀 모른다.
// 그래서 여기서 obj.key라고 하게 되면, 
// printValue(woony, 'name);가 undefinde이 나옴.
// 이 코드가 하고있는 것은 야 object에 key라는 property가 들어있니? 
// 아니 없잖아 object에 key라는 property는 들어있지 않아
// 그래서 이때는 우리가 앞에서 배운 computed property를 써야되는거야.
// console.log(obj[key]); 그럼 woony가 정상적으로 출력됨.
// 이뿐만 아니라 다양한 key들을 변경해서 출력할 수 있어
// 나중에 동적으로 key에 관련된 value를 받아올 때 유용하게 쓰일 수 있음.

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = Person('woony', 27);
console.log(person4)
function Person(name, age) {
    return {
        name,
        age,
    };
}
// object를 필요할 때마다 일일히 만들면 동일한 key와 value들을 반복해서 작성해줘야 하는 문제점이 있다.
// 그래서 함수를 이용해서 값만 전달해주면 object를 만드는 유용한 함수를 만들었다.
// makeperson은 class같은 아이 즉, template같은 아이
// 그래서 이전에 JS에 class가 없었을 때는 이런 식으로 많이 작성이 되었다.
// 이렇게 다른 계산은 하지 않고 순수하게 object를 생성하는 함수들은
// 보통 대문자로 시작하도록 함수를 만든다. so, makePerson 보다 Person
// return 이라고 하지 않고,
// this.name = name; 이런 식으로 class에서 contrunctor에서 했던 것처럼 이런 식으로 작성하게 됨.
// 4. Constructor function
const person4 = new Person('woony', 27);
console.log(person4);
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}
// 그리고 호출 할 때도, class에서 object를 만드는 것처럼 해준다.
// 이렇게 하면 JS engine이 알아서 object를 생성해준다.
// 여기서 생략된 건, 새로운 object를 만들어서 this에다가 name이라는 새로운 property를 넣고,
// this를 return 하는 함수...가 생략이 됨.
// 그리고 이런걸 Constructor function이라고 함.

// 5. in operator
// 해당하는 object안에 key가 있는지 없는지 확인하는 거
// 그래서 name이라는 key가 value object안에 있는지 확인 해보면, true라고 나옴
console.log('name' in woony); // true
console.log('age' in woony); // true
console.log('random' in woony); // false
console.log(woony.random);
// 여기서 내가 정의하지 않은 key에 접근하게 되면, undefinde이 출력됨.

// 6. for..in vs for..of
console.clear();
for (key in woony) {
    console.log(key);
}
// 이렇게 in이라는 keyword를 이용하면,
// woony가 가지고 있는 key들이 block을 돌 때마다, key들이 key라는 지역변수에 할당이 되는거다.
// 그래서 console에 key를 출력하게 되면, woony안에 있는 모든 key들이 출력되어진다.
// console.clear()하면 이전 log들이 지워짐.
// name, age, hasJob이 출력됨.
// 그래서 모든 key들을 받아와 처리하고 싶을 때, 이렇게 for..in을 쓰면 좋아

// for..of는 object를 쓰는 게 아니라 배열과 같은 배열 list 순차적으로 literable한 아이들을 쓴다.
// 이렇게 순차적으로 데이터가 담겨져있는
const array = [1, 2, 3, 4];
// 이 데이터에 있는 모든 값들을 찍으려면, 이전 같으면,
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
// 이렇게 하면 많이 작성해야 해서 좋지 못 한 방법
// 이걸 쉽게하는 방법! for..of를 쓴다.
for (value of array) {
    console.log(value);
}
// 이렇게 하면 array에 있는 모든 값들이 value에 할당 되면서
// block안에서 순차적으로 출력하거나, 값을 계산 할 수 있다.

// 7. cloning
const user = { name: 'woony', age: '27' };
const user2 = user
// 여기에 user라는 것에 object를 만들어 놓고
// user2 가 user를 가리키게 했다.
// 그럼 메모리에는, user는 reference를 가리키고 있고 이 reference는 name은 woony고 age는 27이라는 object를 가리키고 있다.
// 그리고 user2의 변수는 user가 할당되어 있는데, 그 말은 user안에 있는 reference 값이
// user2에도 동일하게 할당된다는 말이다.
// 여기서 내가 user2의 name을 coder로 바꾼다면?
user2.name = 'coder';
console.log(user);
// 그럼 user의 name은 woony가 coder로 바뀜
// 이런식으로 말고 object를 복제하는 방법!
// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.log(user3);
// 예전방식은 텅텅 비어져있는 object를 먼저 만들고,
// for..in 사용해 object를 빙빙 돌면서 수동적으로 할당해주는 방법이 있다.
// 그래서 user3의 key에는 user에 있던 value를 할당해주는 거다.
// 이렇게 해서 새로 만들어진 user3을 찍으면, 값들이 복사되어진 걸 확인 할 수 있다.
// 지금 복사는 우리가 coder라는 값을 변경한 다음에 복사가 일어나서 coder로 되어있지만 만약,
// 이렇게 변경이 되지 않으면 당연히 woony로 변경이 되는 걸 확인 할 수 있다.
// 이 코드를 설명하자면 user안에 있는 이 key들을 빙글빙글 돌면서
// 그럼 첫번째 kwy는 name이 되고, 두번째 key는 age가 되는거다.
// 그래서 첫번재 name일때는 user3에 새로운 property name을 추가 할건데,
// 값은 우리가 기존에 있는 user에 key name에 있는 value 즉 woony가 할당이되고,
// 두번째로 볼때는 user3에 age라는 property가 추가가 되고, 값은 user에 있는 age 27이 할당 되는거다.
// 이런 식으로 manual하게 복사할 수 있는 방법이 있다.

// 다른방법으로는
// Object.assign Object에 있는 assign을 쓰는거다.
// object는 기본적으로 JS에 탑제되어있는 object중에 하나이고,
// 그리고 JS에있는 모든 object들은 이 object를 상속한다.
// assign은 복사하고자 하는 target과 복사를 하려고 하는 source를 같이 전달해줘야함.
// return 값은 target과 복사하고자 하는 것이 통합된 아이가 return이 된다.
const user4 = {};
Object.assign(user4, user);
console.log(user4);
// 그래서 먼저 target을 만들면, 텅텅 비어져 있는 걸 정의한 다음에,
// user4를 전달해서 우리가 바로 복사 하고자 하는 object를 전달하면 된다.
// 그래서 console.log(user4)를 출력하면 복사된 value가 나오는 걸 확인 할 수 있다.
// 또 다른 방법은 
const user4 = Object.assign({}, user);
console.log(user4);
// 전달하는 object는 텅텅 비어져있고, 우리가 return 되는 값은
// 두개가 섞인 게 return이 되니까, 이런식으로 return값을 받아와서 작성할 수도 있다.
// assign은 여러개의 source를 전달할 수 있음.
// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
// blue와 big이 출력됨 왜냐!
// 뒤에 나오는 아이일수록 앞에 동일한 property가 있다면, 값을 계속 덮어씌워줌
// 이런점을 유의해서 assign을 사용해야 함.
