let data = ['5', '4', '10', '2', '5'];
let 합계 = 0;
for (let i of data) {
    합계 += parseInt(i);
}
console.log(합계 / data.length);

// 다음 array의 각 자리수의 합을 구하시오.
let data = [11, 22, 33, 111, 2];
data + ''
data = data + ''
'11,22,33,111,2'.replace(',', '')
'1122,33,111,2'
'11,22,33,111,2'.replace(/,/g, '')
'1122331112'
data = '11,22,33,111,2'.replace(/,/g, '')
'1122331112'
let 합계 = 0;
for (let i of data) {
    합계 += parseInt(i);
}
합계
17
//or
let 합계 = 0;
for (let i of data) {
    합계 += +i;
}
합계
17
// 콤마 찍기 1
const n = 12345.6789;
const comma = n.toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

document.writeln(comma);

// 콤마 찍기 2
navigator.language
const n = 12345.6789;
n.toLocaleString('ko-KR');

// 콤마 찍기 3 -> 실무에서 볼 일 없음
let n = 12345678;
n += '';
reverse = '';
// 문자열 뒤집기
for (let i = 0; i < n.length; i++) {
    reverse = n[i] + reverse;
}
console.log(reverse);

let sample = '';
count = 0;
for (let i = 0; i < reverse.length; ++i) {
    if (count < 2) {
        sample += reverse[i];
        ++count;
    } else {
        sample += reverse[i];
        sample += ','
        count = 0;
    }
}
console.log(sample);

// 참고: 매서드 체이닝
'01001'.replace('0', '').replace('1', '#')
'01001'.replace(/0/g, ' ').replace(/1/g, '#')

// 문자열은 안 되고 배열은 수정이 가능하다.
과일[0] = '한라봉'
과일[0][0] = "ㅋㅋ"

let 전교점수 = [
    // 1반
    [[10, 20, 30, 40, 50],
    [20, 30, 40, 50, 60]],
    // 2반
    [[10, 20, 30, 40, 50],
    [20, 30, 40, 50, 60]],
];

// 1반
let a = [10, 20, 30, 40, 50];
let b = [20, 30, 40, 50, 60];
let 합계 = 0;
for (i of a) {
    합계 += i
}

let 행렬 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
행렬[0]
[1, 2, 3]
행렬[0][0]
1
행렬[0] + 행렬[0]
'1,2,31,2,3'
// 행렬의 연산에서는 in이 더 깔끔할 수도
let sample = [1, 2, 3]
for (let i in sample) {
    sample[i] *= 2 // sample[i] = sample[i] * 2
}
sample
[2, 4, 6]
for (let i of sample//sample요소의 index를 i한테 줌) {
    console.log(i) // sample[i] = sample[i] * 2
}
// sample 안에있는 값을 꺼내서 i한테 주는 거
// 값을 꺼내서 주는 거지 그게 sample과는 다르고 샘플에 저장하지 않는다는 거
in : sample 안의 요소 인덱스
of: sample 안의 요소


let 과일 = ['사과', '수박', '복숭아', '딸기', '바나나'];
let 과일선물 = ['체리', '멜론'];
let 꺼낸과일 = 과일.pop();
꺼낸과일
'바나나'
과일.push(꺼낸과일)
과일.push('한라봉');
과일.unshift('귤');

// splice(index,갯수)

let 과일 = ['복숭아', '딸기', '바나나'];
let 제주과일 = ['귤', '한라봉', '천혜향'];
과일.concat(제주과일);
제주과일.concat(과일);
과일
['복숭아', '딸기', '바나나']
제주과일
['귤', '한라봉', '천혜양']
과일.sort()// 사전식 정렬
['딸기', '바나나', '복숭아']
let data = [10, 20, 30, 11, 22, 25];
data.sort()
[10, 11, 20, 22, 25, 30]
data
[10, 11, 20, 22, 25, 30]


let data = [10, 20, 40, 11, 8, 50] 로 했더니
data.sort()
    (6)[10, 11, 20, 40, 50, 8] 
왜 8이 제일 뒤로가나요 ? !!
    //아스키 순서라서 정렬이 제대로 되지 않습니다. 숫자 같은 경우에는 그래서 오름차순은, 내림차순은 따로 명시해줘야합니다.

    data.reverse()
// reverse 역정렬이 아니라 역순이다.그냥 거꾸로 해준 거 순서대로 정렬이 아님
ascend//오름차순 
descend//내림차순

data.sort((a, b) => a - b)// 오름차순
[10, 11, 20, 22, 25, 30, 111]
data.sort((a, b) => b - a) // 내림차순
[111, 30, 25, 22, 20, 11, 10]
data.sort(function (a, b) { return a - b })
[10, 11, 20, 22, 25, 30, 111]
data.sort(function (a, b) { return b - a })
[111, 30, 25, 22, 20, 11, 10]