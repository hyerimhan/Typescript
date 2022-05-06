// * 연산자를 이용한 타입 정의 - Union Type
// function logMessage(value: any) {
//   console.log(value);
// }
// logMessage('hello');
// logMessage(100);

var seho: string | number | boolean;
function logMessage(value: string | number) {
  if (typeof value === "number") {
    value.toLocaleString();
  }
  if (typeof value === "string") {
    value.toString();
  }
  throw new TypeError("value must be string or number");
}
logMessage("hello");
logMessage(100);

// --------------------------------------------------------
interface Devloper {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

// function askSomeone(someone: Devloper | Person) {
//   // someone.name; // O
//   // someone.skill; // X
//   // someone.age; // X
// }
// // 데이터를 따라서 따로따로 넘기기
// askSomeone({ name: "디벨로퍼", skill: "웹 개발" });
// askSomeone({ name: "캡틴", age: 100 });

// * 연산자를 이용한 타입 정의 - Intersection Type
// var seho: string | number | boolean;
// var capt: string & number & boolean; // var capt: never

function askSomeone(someone: Devloper & Person) {
  someone.name; // O
  someone.skill; // O
  someone.age; // O
}
askSomeone({ name: "디벨로퍼", skill: "웹 개발", age: 34 }); // age도 설정해야함.