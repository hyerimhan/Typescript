// 클래스는 ES2015 (E6)부터 소개된 최신 문법

// class Person {
//   // 클래스 로직
//   // 초기화 메서드
//   constructor(name, age) {
//     console.log("생성 되었습니다.");
//     this.name = name;
//     this.age = age;
//   }
// }

// // 생성 되었습니다.
// var seho = new Person("세호", 30);
// console.log(seho);

// 자바스크립트의 프로토타입 (중복되는 값 상속하기)
var user = { name: "capt", age: 100 };
var admin = { name: "capt", age: 100, role: "admin" };

var admin = {};
admin.__proto__ = user; // admin에 user내용 상속받기

// 프로토타입 활용 사례
var obj = { a: 10 };
Object.keys(obj); // ["a"]
obj.hasOwnProperty("a"); // true

var user = {name: 'capt', age: 100};
var arr = [];
arr. // .다음은 기본 내장되어 있는 프로토타입 기본문법을 볼 수 있음.

// 프로토타입과 클래스와의 관계 (자바나 객체 지향언어가 익숙한 개발자들이 생성자 함수(function)을 클래스를 만들어 냄.)
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// var capt = new Person('캡틴', 100);
// // 위와 아래는 같은 코드
// class Person {
//   // 클래스 로직
//   // 초기화 메서드
//   constructor(name, age) {
//     console.log("생성 되었습니다.");
//     this.name = name;
//     this.age = age;
//   }
// }

// // 생성 되었습니다.
// var seho = new Person("세호", 30);
// console.log(seho);

// 타입스크립트의 클래스 문법
class Person {
  // 해당 클래서 안에서만 사용
  private name: string;
  // 기본
  public age: number; // =protected
  // 읽기만 가능
  readonly log: string;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}