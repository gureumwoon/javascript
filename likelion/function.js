function 함수하나() {
    let x = 10;
    console.log('함수하나 호출');
}
function 함수둘() {
    let y = 10;
    console.log('함수둘 호출');
}
함수하나()
함수하나 호출
함수둘()
함수둘 호출

// block scope, function scope
// 함수 안의 변수들은 바깥에서 못 써

let k = 10;
function viewk() {
    console.log(k);
}
function changek() {
    k += 10;
    console.log(k)
}
viewk()
changek()
viewk()
10
20
10

let k = 10;
function viewk() {
    console.log(k);
}
function changek() {
    let k = 20;
    console.log(k)
}
viewk()
changek()
viewk()

// 캡슐화, 추상화
function add(a, b) {
    return a + b;
}
add(10, 20);
30
//파라미터 : a,b 변수명
//아규먼트 : 10, 20 값
// 파선아실 parameter선언 argument 실행

function add(a = 100, b = 200) {
    return a + b;
}

add(10, 20);
30
add(10);
210
add();
300
add(b = 300)
500

아규먼트 순서, 갯수랑 파라미터 순서, 갯수가 같아야한다고 생각하면 될까요


구조분해할당도 기본값을 설정할 수 있으니까 매개변수를 객체로 받으면 어떨까요 ??

    function add({ a = 100, b = 200 }) {
        console.log(a + b);
    }

add({ b: 300 }); // 400

// 함수 안에서 선언된 변수는 나갈 수 없어 이게 '함수스코프'

let a = 100;
let b = 200;

{ a, b }
200
let c = { a, b }
undefined
c
{ a: 100, b: 200 }
let c = {
    'a': 100,
    'b': 200
}
undefined
c
{ a: 100, b: 200 }
{ 100, 200 }
200
let 오브 = {
    a,
    b
}
undefined
오브
{ a: 100, b: 200 }

키와 value값이 같은 경우의 es 6부터 value의 값은 생략가능한 원리 입니다.
let a = 100;
let b = 200;
let obj = { a: "a", b: "b" } => let obj = { a, b }

var는 function안에서만 지역변수취급이고... 밖에서는 전역변수취급라고 블로그글은 본거같은

스코프(scope) : 변수에 접근할 수 있는 범위
전역 스코프와 지역 스코프로 나뉜다.

전역 스코프는 중괄호 { }의 밖, 전역 스코프에서 선언된 것들을 전역 변수라고 한다.
지역 스코프는 중괄호 { }의 안, 지역 스코프에서 선언된 것들을 지역 변수라고 한다.

블록 스코프: 블록 { }이 생성될 때마다 새로운 스코프가 형성되는 것을 의미한다.

함수 스코프: 함수 내부에서 선언한 변수는 지역 변수, 함수 외부에서 선언한 변수는 모두 전역 변수로 취급한다.


이름으로 선언된건 호이스팅이 안된다...메모..


호이스팅은 자동적으로 자바스크립트 엔진이 읽어 올때 됩니다.아래 2가지 차이가 크다고 할 수 있는데, 나중에 호이스팅이랑 클로저 배우시면 좀더 수월하실거 같네요

💡 함수 선언문으로 선언된 함수는 함수 호이스팅이 발생한다.런타임 이전에 함수 객체가 생성이 되므로 함수가 정의되기 전에 함수를 호출할 수 있다.미리 함수 호출해도 가능, 클로저 상황에 많이 사용.

💡 함수 표현식으로 선언된 함수는 변수 호이스팅이 발생하며, undefined로 초기화된다.그러므로 함수 선언문으로 선언한 함수는 함수가 정의되기 전에 함수를 호출할 수 없다.