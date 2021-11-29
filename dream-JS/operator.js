// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log('string literals: 1 + 2 = ${1 + 2}');

// 2. Numeric operators 
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); //divide
console.log(1 * 1); // multiply
console.log(5 % 2); //remainder
console.log(2 ** 3) // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
//postIncrement = counter;
//counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
const preDecrement = --counter;
console.log(`preDecrement: ${preDcrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater han or equal

// 6. Logical operators: \\ (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2; // false

// \\ (or)
console.log(`or: ${value1 || value2 || check()}`);
// 셋중에 하나라도 true가 되는 아이가 있으면 true가 되는 연산자
// check()는 쓸데없이 시간 낭비를 하다가 결국엔 true를 return 시켜줌
// or 연산자는 처음에서 true가 나오면 거기서 멈춰 왜냐면 or중에 하나라도 true면 true거든 so, 뒤에가 true건 false건 상관없어
// 그래서 computation이 heavy한 연산이 많이되는 함수를 호출하거나 또는 expression같은 아이들을 제일 앞에다가 두게 되면 안 된다. 심플한 value같은 아이들을 제일 앞에둬서 얘네들이 false 일 때만 마지못해 마지막에 호출하는 게 제일 좋다.

// && (and), finds the first falsy value
console.log(`and : ${value1 && value2 && check()}`);
// and는 이 3개가 다 true여야 true so, value1이 false가 나오면 그냥 false가 되어버림
// 그래서 and도 heavy한 operation일수록 뒤에다 두는 게 좋다


function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('ha..');
    }
    return true;
}

// and는 간편하게 null 체크할 때도 많이 쓰인다.
// often used to compress long if-statement
//nullableObject && nullableObject.something
//object가 null이면 false가 되기 때문에 뒤에가 실행이 안 됨 즉, nullObject가 null이 아닐 때만 이 object의 something이라는 value를 받아오겠지
if (nullableObject != null) {
    nullObject.something;
}
// 나중에 간편하게 코드를 작성할 때 유용하게 쓰일 수 있음.


// ! (not)
console.log(!value1);
// 값을 반대로 바꿔줌 이 value1이 true이기 때문에 false로 변경이 됨

// 7. ㄸ벼미ㅑ쇼
const stringFive = '5';
const numberFive = 5;

// == 이렇게 쓰이면 loose equality라고 불림 type을 변경해서 검사를 하기 때문
// 이 말은 stringFive나 numberFive 둘이 true 같다고 나옴
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);
// 문자열이긴 한데 안에 들어 있는 건 숫자잖아 그러니까 너네 둘은 똑같아라고 얘기하는 것

// === strict equality, no type conversion
console.log(stringFive === nymberFive);
console.log(stringFive !== numberFive);
// type을 신경써서 type이 다르면 넌 다른애들이야 하는 것과 같다.
// 그래서 코드를 작성할 때는 웬만하면 strict equality를 사용해서 검사하는 게 더 좋다

// ovject equality by reference
// equality를 공부할 때는 object를 더 신경써서 공부하는 게 좋다
// object는 저장될 때 reference 형태로 저장된다고 했어
const woony1 = { name: 'woony' };
const woony2 = { name: 'woony' };
const woony3 = woony1;
// woony1 과 woony2는 똑같은 데이터가 들어있는 object지만 실제로 메모리를 보면 1과2는 각각 다른 reference에 들어있음
// 그 다른 reference는 서로다른 object를 가리키고 있다
// woony3은 woony1의 reference가 할당되어 있으니까 똑같은 reference를 가지고 있게 된다.
// 그럼 console 에는 각각 어떤 갑이 출력될까?
console.log(woony1 == woony2);
console.log(woony1 === woony2);
console.log(woony1 === woony3);

// equality - puzzler
console.log(0 == false); //true
console.log(0 === false); // false 0은 boolean type이 아니기 때문에
console.log('' == false); // true
console.log('' === false); // false ''은 boolean type이 아니기 때문에
console.log(null == undefined); //true
console.log(null === undefined); // false

// 8. Conditional operators: if 조건문
// if, else if, else
const name = 'woony';
if (name === 'woony') {
    console.log('Welcome, Woony');
} else if (neme === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unknown');
}
// if statement는 이 statement가 true면 그 안에있는 block을 실행한다.
// 너의 이름은 woony야? 어 그러면 Welcome Woony가 출력
const name = 'coder';
if (name === 'woony') {
    console.log('Welcome, Woony');
} else if (neme === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unknown');
}
// 근데 이름이 coder면, 넌 이름이 woony야? 아니
// 그럼 else if 넌 이름이 coder니? 응 
// 그럼 You are amazing coder가 출력
const name = 'lim';
if (name === 'woony') {
    console.log('Welcome, Woony');
} else if (neme === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unknown');
}
// 근데 만약 이렇게 random한 이름이 나오게 되면,
// woony도 아니고 coder도 아니기 때문에 else로 넘어와서 unknown이 출력됨

// 9. Ternary operator: ? 
// condirion ? value1 : value2;
console.log(name === 'woony' ? 'yes' : 'no');
// 이 statement에다가 ?를 붙이면 얘가 true니? true면 왼쪽에 있는 걸 실행하고 아니면 : 다음에 나오는 아이를 실행하면 돼
// 그래서 값을 할당하거나 간단하게 출력할 때 이런 형태를 많이 쓰게 됨
// 간혹 이 ternary operator를 nesting해서 묶고 묶고 묶고 해서 사용하는 경우도 있는데,
// 그렇게 하면 코드의 가독성이 떨어지기 때문에 그런 경우라면,
// if나 switch를 쓰는 게 맞다.
// 이런 형태는 간단한 형태로 쓰는 게 맞다.

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}
// switch()안에 있는 값이 그니까 지금 현재 browser 값이 IE면 go away를 실행하고 break 멈추고
// Chrome이면 또 이 값을 출력하고 멈추고 이런식
// Chrome이랑 Firefox랑 출력하는 값이 같잖아
// 반복할 필요 없이, case를 연달아 붙여놓으면 자동적으로 묶어서 출려이 된다.
// if 에서 else if else if가 반복돼서 쓰인다면, switch 사용을 고려하는게 좋고,
// 나중에 typescript에서 정해져 있는 type을 검사하거나 enum 비슷한 아이들을 검사할 때는 switch를 쓰는 것이 가독성에 좋다

// 11. Loops 반복문
// while loop, while the condition is truthy,
// body code is exeuted.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}
// 이 while같은 경우에는는 statement가 false로 나오기 전까지는 무한대로 반복해서 계속해서 값을 출력함
// 즉, 우리가 i가 3부터 시작하는데 얘가 0보다 크니? 응 그럼 출력이 한 번 되고,
// i-- i를 1 감소 시켰으니까 2 i가 0보다 크니? 응 그래서 또 출력이 되고,
// 또 감소시켜서 1이 되고 출력하고 감소시켜서 0이 나오면,
// i 가 0보다 크니? 아니 그럼 여기서 멈추게 된다.


// 반대로 do while이라는게 있어
// do while loop, body code is executed first,
// then check the condition.
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);
// 얘는 block을 먼저 실행한 다음에 조건이 맞는지 안 맞는지를 검사한다.
// 그래서 위에는 0이 되어 멈췄지만, 얘는 0이어도 일단 값을 출력하고나서
// i가 0인지 아닌지 검사해서 이 때 멈추게 된다.
// 그래서 block을 먼저 실행하고 싶다면 do-while을 사용하고 
// 조건문이 맞을 때만 block을 실행하고 싶다면 while을 써야된다.

// for loop
// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.lof(`for: ${i}`);
}
// for같은 경우는 시작하는 문장, 컨디션이 중간에 오고, 마지막으로 어떤 스텝을 밟아나갈 것인지 명시하게 되어있다.
// gor loop는 begin을 딱 한 번만 호출을 하고, block을 실행하기 전에 조건이 맞는지 안 맞는지 검사를 한 다음에,
// 이 block이 다 실행이 되면 step을 실행하게 돼
// condition이 안 맞을 때까지 condition과 step이 무한반복
// 이렇게 기존에 존재하는 변수에 값을 할당하는 경우도 있고,

for (let i = 3; i > 0; i = i - 2) {
    // inline variable declaration
    console.log(`inline variable for: ${i}`);
}
// 이렇게 for 안에서 inline variable declaration이라고
// 이렇게 block 안에 let이라는 지역변수를 선언해서 작성하는 방법도 있다.

// 이런 while이나 for 같은 것들은 서로 nesting해서 작성할 수 있다.
// nested loops
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j:${j}`);
    }
}
// for문 안에 다시 for를 작성하게 되면, i가 0일 때, j를 0-9까지 삥삥 돌리고,
// i가 1일 때 0-9까지 돌리고 근데 이렇게 nesting해서 작성하게 되며느
// CPU에 좋지 않아요

// break, continue
// 01. literate from 0 to 10 and print only even numbers(use continue)
for (let i = 0; i < 11; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(`q1. ${i}`);
}
// 02. literate from 0 to 10 and print until reaching 8 (use break)
for (let i = 0; i < 11; i++) {
    if (i > 8) {
        break;
    }
    console.log(`q2. ${i}`);
}
// 이런 loop 안에서는 break나 continue같은 keyword를 써서 loop를 끝낼 수가 있다.
// break는 loop를 완전히 끝내는 거, continue는 지금꺼만 skip하고 바로 다음 step으로 넘어가는 것을 말함

