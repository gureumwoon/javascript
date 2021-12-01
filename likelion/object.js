let person = {
    //key: value
    name: '이호준',
    age: 10,
    height: 30,
    weight: 40,
    이력: { '첫번째직장': '하나', '두번째직장': '둘' }
}
person.name
'이호준'
person['name']
'이호준'
person.이력.첫번째직장
'하나'
person['이력'].첫번째직장
'하나'

Object.keys(person)
Object.values(person)
Object.entries(person)

let data = object.entries(person);
data[0]
['10', 100]
// 이렇게 뽑으면 반복문 할 때 좋아

for (let i of data) {
    console.log(i[0], i[1]);
}
// or
for (let i of Object.entries(person)) {
    console.log(i[0], i[1]);
}
// or
for (const [key, value] of Object.entries(object1)) {
    console.log(${ key }: ${ value });
}

for (let [i, j] of object.entries(person)) {
    console.log(i, j);
}

배열: [값1, 값2, 값3]
    -> 인덱스[0], [1], [2] 로 값 접근

오브젝트: [(키 - 값)1, (키 - 값)2, (키 - 값)3]
    -> 키로 값 접근.key_name

console.log(Object.getOwnPropertyDescriptor(person, 'name'));
// value: '이호준',
// writable: true, // 변경 가능 여부, 기본값 false
// enumerable: true, // 열거(for) 가능 여부, 기본값 false
// configurable: true // 재정의 가능 여부, 기본값 false