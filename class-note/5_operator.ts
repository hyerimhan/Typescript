// function logMessage(value: any) {
//     console.log(value);
// }
// logMessage('hello');
// logMessage(100);

// 유니온타입(=or)
var sehp: string | number | boolean;
function logMessage(value: string | number) {
    if (typeof value == 'number') {
        value.toLocaleString();
    }
    if(typeof value == 'string') {
        value.toString();
    }
    throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(100);

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

// function askSomeone(someone: Developer | Person) {
//     someone.name; // O
//     // someone.skill // X
//     // someone.age // X
// }
// askSomeone({ name: '디벨로퍼', skill: '웹개발' });
// askSomeone({ name: '캡틴', age: 100 });

// 인터섹션 (=and)
function askSomeone(someone: Developer & Person) {
    someone.name; // O
    someone.skill // O
    someone.age // O
}
askSomeone({ name: '디벨로퍼', skill: '웹개발', age: 34 });

var seho: string | number | boolean;
var capt: string & number & boolean;