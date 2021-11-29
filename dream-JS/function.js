// Function (함수)
// - program을 구성하는 가장 기본적인 building block
// - sub program이라고도 불리며, 여러번 재사용이 가능하다는 장점이 있음.
// - 그리고 function은 한가지의 task나 아니면 어떠한 값을 계산하기 위해 쓰여짐

// JavaScript에서 function을 정리하는 방법으로는..

// 1. Function declaration
// function 이라는 keword를 이용하고 name을 지정한 다음에, parameters를 쭉 나열한 다음, 함수안에 기본적인 비지니스로직을 작성한 다음, return을 해주면 된다.
// ex) function name(param1, param2) {body... return;}
// 여기서 정말 중요한 point는 하나의 함수는 한가지 일만 하도록 만들어야 된다.
// 그리고 함수의 이름을 작성할 때는.  변수의 이름을 정할 때는 명사, 함수는 무언가 동작하는거기 때문에 doSomething, command, verb 동사형태로 지정해야돼
// 그리고 중요한 또 한가지!! function은 JS에서 object이다. 그렇기 때문에 function을 변수에다 할당할 수도 있고, parameter로 전달이 되고, 함수를 return 할 수 있게 되는거야.
function printHello() {
    console.log('Hello');
}
printHello();
// 좀 더 유용한 function을 만들고 싶다면, parameter로 메세지를 전달해야 돼 그럼 전달된 메세지가 화면에 출력되도록 하는데 이런 게 좀 더 유용한 함수.
function log(message) {
    console.log(message);
}
log('Hello');
// JS에는 타입이 없다고 했잖아, 그렇기 때문에 이런 함수 자체의 interface만 봤을 땐 이 message가 string으로 전달해야 되는지 number로 전달해야 되는지가 명확하지 않아.
// 그래서 사용하는 사람이 log(1234) 이렇게 숫자로 전달해 줄 수 있지.
// 다행히 숫자가 문자열로 변환이 되어서 여기 log가 1234로 출력이 된다.
// But 다른 함수에서 type이 중요한 경우에는 JS는 조금 난해할 수 있다.
// so, typescript가 이럴 때 필요!
function log(message) {
    console.log(message);
}
// typescript에서는 이렇게 적으면 야!! type을 안 적었잖아 하고 complain을 걸어.
function log(message: string) {
    console.log(message);
}
// 근데 이렇게 type을 명시해주면, 에러가 없어짐
// 그래서 typescript에서는 항상 parameter나 return type에 type을 명시하도록 해야한다.
// 만약 return을 number로 하고 싶다면,
function log(message: string): number {
    console.log(message);
    return 0;
}
// 그래서 규모있는 프로젝트를 하거나, 현업에서 다양한 개발자들과 일을 하거나, 아니면 우리가 작성한 것을 나중에 library형태로 API를 전달해야 할 때, typescript를 쓰는 게 조금 더 명확하고 개발일을 더 쉽게 만들어줌
// 왜냐 이렇게 함수의 interface만 봐도 얘가 정확하게 무엇을 하는 함수인지 함수의 이름과, 전달되어야 하는 파라미터와 그의 데이터타입, 그리고 어떤 값이 return되는지를 확실하게 확인하고 쓸 수 있기 때문에.

// 2. Parameters
// premitive type같은 경우에는 메모리에 value가 그대로 저장되어있기 때문에, value가 전달이 되고,
// object parameters 같은 경우에는 reference가 저장이 됨. 그래서 reference가 전달이 됨.
function changeName(obj) {
    obj.name = 'coder';
}
const woony = { name: 'woony' };
changeName(woony);
console.log(woony);
// changeName이라는 function은 전달된 obj에 이름을 무조건'coder'로 변경하는 함수야.
// 우리가 woony라는 const를 정의한 다음에 이 woony라는 object를 만들어서 할당해주면,
// 메모리에는 이 object가 만들어진 reference가 메모리에 들어가게 되고, 이 reference는 바로 이 object를 메모리 어딘가에 가리키고 있다.
// 그래서 changeName woony를 전달하게 되면 이 전달된 woony. woony가 가리키고 있는 곳의 이름을 'coder'로 변경하게 되는거지
// 그래서 console.log(woony) 의 결과값이 coder가 되는거야.
// 그래서 object는 reference로 전달되기 때문에, 함수 안에서 object의 값을 변경하게 되면, 그 변경된 사항이 그대로 메모리에 적용되기 때문에, 나중에 추후에 변경된 사항들을 이렇게 확인이 가능하다.

// 3. Default Parameters (added in ES6)
function showMessage(message, from) {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');
// showMessage를 보면 message와 from 2개의 parameter를 받아옵니다.
// 그래서 message가 누구로부터 왔는지(from) 출력하게 되는데,
// 근데 여기서 보면 showMessage를 호출할 때 하나만 message만 전달된 걸 볼 수 있는데,
// 그렇기 때문에 위에 console에서 message는 잘 출력이 되지만, from이 정의되어 있지 않기 때문에, undefined라고 나온다.
// 그래서 전에는 이렇게 조건문을 달아줬었는데,
function showMessage(message, from) {
    if (from === undefined) {
        from = "unknown";
    }
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');
// 요즘엔 이렇게 원하는 default값을 지정해 놓으면, 사용자가 parameter를 전달하지 않을 때, 값이 대체되어져 사용된다.
function showMessage(message, from = "unknown") {
    console.log(`${message} by ${from}`);
}

// 4. Rest Parameters (added in ES6)
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}
printAll('dream', 'coding', 'woony');
// 이렇게 ... 3개를 작성하게 되면, rest parameters라고 불리는데,
// 이것은 바로 배열 형태로 전달되어지게 된다.
// 그래서 printAll이라는 함수를 호출할 때 인자를 3개를 전달하고 있는데,
// 그래서 이 args는 3가지의 값이 담겨져 있는 배열이다.
// 그래서 for loop를 이용해서 처음부터 args의 갯수만큼 삥글삥글 돌면서 첫번째 출력 그다음 두번째 그다음 세번 째 출력을 하게 된다.
// 이렇게 배열같은 것을 출력하게 될 때는, 간단하게
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
    for (const arg of args) {
        console.log(arg);
    }
}
printAll('dream', 'coding', 'woony');
// 이런식으로 for of 문법을 이용해서 간단하게 출력할 수도 있다.
// args에 있는 모든 값들이 차례대로 하나씩 arg에 지정이 된거야
// 그리고 더 간단하게는,
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
    for (const arg of args) {
        console.log(arg);
    }
    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'woony');

// 5. Local scope
let globalMessage = 'global'; // flobal variable
function printMessage() {
    let message = "hello";
    console.log(message); // local variable
    console.log(globalMessage);
}
printMessage();
// 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다.
// block 안에 함수나 if 안에서 block안에서 변수를 선언하게 되면, 이것은 지역변수다.
// 지역변수는 지역적인 것이기 때문에, 안에서만 접근이 가능하다.
// 만약에 우리가 message를 밖에서 출력하게 된다면, error가 발생하게 된다.
// 하지만 안에서는 globalMessage를 볼 수 있고, 출력이 가능하다. 이게바로 scope이다.
// 그리고 이 원칙은 어느곳에서나 적용이 됩니다. 

let globalMessage = 'global'; // flobal variable
function printMessage() {
    let message = "hello";
    console.log(message); // local variable
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = "hello";
    }
    console.log(chileMessage) // error가 뜬다.
}
printMessage();
// 함수안에서 또다른 함수를 선언할 수 있는데, printMessage라는 함수안에, Anoter이라는 함수가 들어있는데,
// 이 자식은 부모에게서 정의된 message들을 확인할 수가 있어, 하지만 자식안에 정의된 childMessage를 바로 부모상위 위에서 보려고 한다면 error가 발생하게 됨

// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); //3
console.log(`sum: ${sum(1, 2)}`);
// parameters로 값들을 전달 받아서 계산된 값을 return 할 수 있다.
// sum 이라는 함수를 호출하게 되면, 1과2를 더해서 3이 reurn 되는 것을 확인 해 볼 수 있다.

// 7. Early return, early exit
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}
// good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic...
}

// 그 말은 upgradeUser라는 함수 안에서 user의 point가 10 이상일 경우에만, log를 upgrade 해주는 logic이 있다면,
// 이렇게 ~일 때 ~ 한다라고 작성하게 되면, block안에서 logic을 많이 작성하면 가독성이 떨어짐
// 그래서 이런 경우에는 for 와 else를 번갈아 쓰는 것보다
// 이렇게 조건이 맞지 않을 때는 return;을 해서 함수를 종료하고, 조건이 맞을때만 그 다음에 와서 필요한 logic들을 쭉 실행하는 것이 좋다.

// 1. Function expression
const print = function () {
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));
// 이렇게 함수에 이름이 없는 것을 annonymous function이라고 함. 이름이 있는 것은 named function.
// function declaration 과 function expression의 차이점은 expression은 이렇게 할당된 다음부터 호출이 가능한 반면에,
// print()를 우리가 선언하기 전에 호출하면 당연히 error가 나옴.
// 하지만 function declaration은 hoist가 됨. 함수가 선언되기 이전에 호출해도 가능함.
// 이것능 JS engine이 선언된 것을 제일 위로 올려주기 때문에 가능.

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}
// randomQuiz라는 function을 보면 정답과, 정답이 맞을 때 호출할 함수와, 정답이 틀리면 호출하게 될 함수가 있다.
// 이렇게 함수를 전달해서 야 네가 상황이 맞으면, 네가 원하면 이 전달된 함수를 불러라고 전달하는 것을 Callback 함수라고 한다.
// 즉 2가지의 callback functions가 parameter로 전달되어서 정답이 love you 인 경우에만 print Yes()라는 콜백 함수를 호출하게 되고,
// 정답이 아니면 printNo()라는 콜백함수를 호출하게 된다.
// 이 함수를 호출 하려면 정답과 printYes printNo expression 2가지를 전달해야되는데,
// annonymous function
const printYes = function () {
    console.log("yes!");
};
// named function
// 이렇게 이름을 쓰는 경우에는 우리가 debugging을 할 때 stack traces에 함수의 이름이 나오게 하기 위해서 쓰는 것.
const printNo = function print() {
    console.log("no!");
};
randomQuiz("wrong", printYes, printYes);
randomQuiz("love you", printYes, printNo);
// printYes라는 변수에 yes를 출력하는 함수를 할당해놓고,
// printNo라는 변수에  no를 출력하는 함수를 할당해줬다.
//그래서 randomQuiz를 호출할 때 answer와 printYes 와 printNo의 콜백함수를 각각 전달해주게 된다.

//  Arrow function
// 함수를 간결하게 만들어준다.
// 얘는 항상 이름이 없는 annonymous function이다.
const simplePrint = function () {
    console.log('simplePrint!');
};
// function expression을 쓰게되면 function이라는 keyword 도 써야되고 block도 써야되는데,
// arrow function은 이것들을 간단하게 만들어줌
// keword block 다 필요없음
const simplePrint = () => console.log("simplePrint!");
const add = (a, b) => a + b;
// 함수안에서 조금 더 다양한 일을 해야돼서 block을 사용하게 된다면,
const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
};
// block을 쓰게되면 return이라는 keyword를 사용해서 값을 return해줘야돼

// IIFE: Immediately Invoked Function Expression
function hello() {
    console.log("IIFE");
}
hello();
// 이렇게 함수가 끝나면 호출을 해줘야 되잖아.
// 근데 IIFE 형식으로 작성하면
(function hello() {
    console.log("IIFE");
})();
// 선언함과 동시에 바로 호출을 하려면 이렇게 함수의 선언을 ()로 묶은다음에, 함수를 호출하듯이 (); 를 붙여주면
// 바로 함수가 호출됨.

// Quiz
// function calculate(command, a, b)

function calculate(command, a, b) {
    switch (command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unknown command');
    }
}
console.log(calculate('add', 2, 3));

// command: add, substract, divide, multiply, remainder