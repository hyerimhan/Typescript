// function logText(text) {
//     console.log(text);
//     return text;
// }
// logText(10); // 숫자 10
// logText('하이'); // 문자열 하이
// logText(true); // 진위값 true

// function logText<T>(text: T): T {
//     console.log(text);
//     return text;
// }
// logText<string>('하이');

// function logText(text: string) {
//     console.log(text);
//     // text.split('').reverse().join('');
//     return text;
// }

// function logNumber (num: number) {
//     console.log(num);
//     return num;
// }

// 기존 문법과 제네릭의 차이점 - 유니온 타입을 이용한 선언 방식의 문제점
// function logText(text: string | number) {
//     console.log(text);
//     return text;
// }

// const a = logText('a');
// logText(10);
// const num = logNumber(10);
// logText(true);

// 제네릭의 장점과 타입 추론에서의 이점
function logText < T > (text: T): T {
    console.log(text);
    return text;
}

const str = logText < string > ("abc");
str.split("");
const login = logText < boolean > (true);
// logText('a')
// logText(10)

// 인터페이스에 제네릭을 선언하는 방법
// interface Dropdown {
//     value: string;
//     selected: boolean;
// }

// const obj: Dropdown = {value: 'abc', selected: false};

interface Dropdown < T > {
    value: T;
    selected: boolean;
}

const obj: Dropdown < string > = {
    value: "abc",
    selected: false
};

// 제네릭의 타입 제한
// length가 배열이기 때문에 제네릭에 []를 붙인다.
// function logTextLength<T>(text: T[]): T[] {
//     console.log(text.length);
//     text.forEach(function (text) {
//         console.log(text);
//     });
//     return text;
// }
// logTextLength<string>(['hi', 'abc']);

// 제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
    length: number;
}
// 인터페이스에서 정의한 값은 그대로 가져가고 추가로 정의할 수 있음.
function logTextLength < T extends LengthType > (text: T): T {
    text.length;
    return text;
}
// logTextLength(10); // X 숫자는 length가 내부속성으로 지원되지 않음.
logTextLength({
    length: 10
}); // O

// 제네릭 타입 제한 3 - keyof
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

// interface에 정의된 타입중 한개의 타입만 받겠다.
function getShoppingItemOption < T extends keyof ShoppingItem > (itemOption: T): T {
    return itemOption;
}

// getShoppingItemOption(10); // X
// getShoppingItemOption<string>('a'); // X

// 자동완성 ctrl + space
getShoppingItemOption("name"); // O