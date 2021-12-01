'use strict';

//Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];
// 배열이 index를 기준으로 데이터가 저장이 되기 때문에, index를 활용해서
// 어떻게 데이터를 검색하고, 삽입, 삭제 하는지 아는 것이 매우 중요하다.

// 2. Index position
// index를 통해서 어떻게 데이터에 접근할 수 있을지
const fruits = ['사과', '바나나'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]);// 맨 마지막

// 3. Looping over an array
// 과일이 다 출려되게 해 봐
// a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// b. for of 
for (let fruit of fruits) {
    console.log(fruit);
}
// c. forEach
fruits.forEach((fruit) => console.log(fruit));
// foreach는 배열안에 들어있는 value들마다 내가 전달한 함수를 출력하는구나

// 4. Addition, deletion, copy
// push: item을 배열의 맨 뒤에 넣고싶어!!
fruits.push('딸기', '복숭아');
console.log(fruits);
// pop: 배열의 맨 뒤 item부터 배열을 지우고 싶어!1
fruits.pop();
// 하나 더 빼고 싶을 땐 한 번 더 선언!
fruits.pop();
console.log(fruits);

// unshift: 앞에서부터 item을 넣고 
fruits.unshift('딸기', '레몬');
console.log(fruits);
// shift: 앞에서부터 item을 지우는 거!!
fruits.shift();
console.log(fruits);

// !! shift와 unshift는 정말 정말 느리다!! pop과 push보다 why?
// 배열에 item들이 들어있을 때,  뒤에서부터 넣고 빼는 것은 빈공간에서 데이터를 넣었다가,
// 지웠다가 하기 때문에 기존에 있던 데이터들은 움직이지 않아도 된다. 그래서 한공간에 있는 index를 이용해서 넣고빼고가 되기 때문에,
// 빠른 operation을 진행할 수 있지만, 반대로 앞에서 데이터를 넣게 되려면,
// 뒤에 있던 데이터를 먼저 그 뒤로 옮겨놓고 첫번째에 있는 데이터를 두번째 박스로 와서 담아놓고,
// 텅텅 비게 만든 다음에, 새로운 데이터를 집어넣어야 함.
// 반대로 데이터를 삭제할 때는, 첫 번째에 있는 item을 지우고, 두번째 있는 item을 앞으로 땡겨오고, 또 그다음에 있는 걸 땡겨오고,
// 이런 일들을 계속 반복해서 해줘야 함.
// 그래서 배열의 길이가 길면 길수록 이런 일들의 반복이 더 많아지기 때문에,
// shift와 unshift 보다는, 
// pop과 push를 사용하는 게 더 좋다.
// 한가지 더 중요한 포인트는!!
// 제일 뒤에서 item에 접근하는 것은 정말정말 빠르고, 그리고 중간에 데이터를 넣고 빼는것도
// index를 활용해서 하기 때문에 빠르다.
// 배열의 길이가 길면 길수록 전체적으로 움직여야 되는 게 많아지니까 shift,unshift는 더 느려지겠지?

// item을 지정된 position에서 지우는건?
// splice 
fruits.push('딸기', '복숭아', '레몬');
console.log(fruits);
fruits.splice(몇번째부터시작, 몇개지울거야)
// 갯수는 option 넣어도 되고 안 넣어도 돼 index만 넣어도 됨.
fruits.splice(1);
console.log(fruits);
//그럼 첫번째 자리에 있던 item을 시작으로 뒤에가 싹 지워짐
fruits.splice(1, 1);
console.log(fruits);
// 1번째 자리에 있는 item 하나가 지워짐
// 지워주고 데이터를 추가할 수도 있음.
fruits.splice(1, 1, '사과', '수박');// 1번째 자리에 있는 item 하나가 지워주고 그 자리에 사과와 수박을 넣어줌.
console.log(fruits);

// 두가지의 배열을 묶어서도 만들어줄 수 있음.
const fruits2 = ['배', '코코넛']
const newFruits = fruits.concat(fruits2);// 새로 묶여진 배열이 합해져서 return이 됨.
console.log(newFruits)
// 기존에 있던 fruits와 새로 만들어진 fruits2 배열들이 합해져서 7개의 과일이 들어있는 배열이 만들어짐

// 5. Searching (검색할 수 있는 API)
// find the index
console.log(fruits);
console.log(fruits.indexOf('사과')); > 0
console.log(fruits.indexOf('수박')); > 2
console.log(fruits.includes('수박'));// 배열에 수박이 있는지 없는지 true나 false로 return함
console.log(fruits.indexOf('망고스틴')); > -1 // indexOf도 없는 걸 호출하면 -1이 나옴.

// lastIndexOf
console.clear();
fruits.push('사과'); // 똑같은 사과가 마지막에 하나 더 있다면?
console.log(fruits);
console.log(fruits.indexOf('사과')); > 0 // indexOf는 제일 첫번째로 해당하는 값을 만나면 그 값이 들어있는 index를 return하게 됨.
// 반대로 lastIndexOf는?
console.log(fruits.lastIndexOf('사과')); > 5 // 마지막에 들어있는 값을 출력하게 돼 즉 맨 마지막에 나온 사과의 index를 출력하게 됨.


