let lotto = [];
for (let i = 0; i < 6; i++) {
    let count = Math.floor(Math.random() * 45) + 1;
    for (let j in lotto) {
        if (count == lotto[j]) {
            count = Math.floor(Math.random() * 45) + 1;
        }
    }
    lotto.push(count);
}
lotto.sort(function (a, b) {
    return a - b;
});

console.log('이번주 로또 번호:' + lotto);


function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
console.log('이번주 로또 번호:' + lotto);

// 한별님 클로저 문제

let view;
function initialize() {
    view = '산';
    return {
        closure: function () {
            console.log('view has been set!');
            return view;
        }
    }
}
let result = initialize()


initialize();
initialize();
initialize();
console.log(view)

// 시찬님 로또

var lotto = [];
while (lotto.length < 6) {
    var num = parseInt(Math.random() * 45 + 1);
    if (lotto.indexOf(num) == -1) {
        lotto.push(num);
    }
}
lotto.sort((a, b) => a - b);


function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
let count = new Set();
while (count.size < 6) {
    count.add(randomNum(1, 45));
}

// 준홍님 코드 로또

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function tryLotto(...input) {
    if (input.length !== 6) {
        console.log('숫자를 6개 입력해야 합니다.');
        return;
    } else if (input.length !== new Set(input).size) {
        console.log('숫자를 중복되지 않게 입력해야 합니다.');
        return;
    } else if (input.some(v => !Number.isInteger(v) || v > 45 || v < 1)) {
        console.log('1부터 45까지 숫자 중 하나를 입력해야 합니다.');
        return;
    }

    const selected = [];
    let count = 0;
    while (count < 7) {
        const selectedNum = randomNum(1, 46);
        if (!selected.includes(selectedNum)) {
            count++;
            selected.push(selectedNum);
        }
    }
    console.log(`당첨번호: ${selected.slice(0, 6).join(' ')} | 보너스: ${selected[6]}`);
    const nums = input.filter(v => selected.slice(0, 6).includes(v));
    switch (nums.length) {
        case 0: case 1: case 2:
            console.log('꽝!');
            break;
        case 3:
            console.log('★ 5등 당첨! ★');
            break;
        case 4:
            console.log('★★ 4등 당첨! ★★');
            break;
        case 5:
            if (input.includes(selected[6])) {
                console.log('★★★★ 2등 당첨!! ★★★★');
                nums.push(`보너스 ${selected[6]}`);
            } else console.log('★★★ 3등 당첨!! ★★★');
            break;
        case 6:
            console.log('★★★★★ 1등 당첨!!! ★★★★★');
    }
    if (nums.length > 0) console.log(`내가 맞춘 번호: ${nums.join(' ')}`);
}


tryLotto(1, 2, 3, 4, 5, 6);


