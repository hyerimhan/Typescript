// 인터페이스
interface Developer {
    name: string;
    skill: string;
}

// interface Person {
//     name: string;
// }

class Person {
    name: string;
}

var developer: Developer;
var person: Person;

// 객체가 더 많거나 구조적으로 더 큰 속성이 오른쪽, 객체가 더 적거나 구조적으로 더 작은 속성이 왼쪽
developer = person; // X interface
developer = new Person(); // X class
person = developer; // O

// 함수
var add = function (a: number) {
    // ...
};

var sum = function (a: number, b: number) {
    // ...
};

// 함수에서는 객체가 더 많거나 구조적으로 더 큰 속성이 왼쪽, 객체가 더 적거나 구조적으로 더 작은 속성이 오른쪽
sum = add; // O
add = sum; // X sum의 두개의 인자를 받아야하는데 add는 한개의 인자만 있기때문에 받아줄 수 없음.

//  제네릭
interface Empty < T > {
    // ...
}
var Empty1: Empty < string > ;
var Empty2: Empty < number > ;
Empty1 = Empty2; // O
Empty2 = Empty1; // O

interface notEmpty < T > {
    data: T;
}

var notEmpty1: notEmpty < string > ;
var notEmpty2: notEmpty < number > ;
notEmpty1 = notEmpty2; // X
notEmpty2 = notEmpty1; // X