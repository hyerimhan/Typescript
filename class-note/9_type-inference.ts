// 타입추론 - 타입스크립트가 어떻게 타입을 해석하는지
// 타입 추론 기본1
var a = "abc";

// function getB(b?: number): string
function getB(b = 10) {
  var c = "hi"; // string
  return b + c; // 함수 function으로 반환, '10hi'로 반환하기 때문에 string으로 반환함
}
10 + "10"; // 1010

// 타입 추론 기본2 - 인터페이스와 제네릭을 이용한 타입 추론
// interface Dropdown<T> {
//     value: T;
//     title: string;
// }

// var shoppingItem: Dropdown<string> = {
//     value: 'abc',
//     title: 'hello'
// }

// 타입 추론 기본3 - 인터페이스와 제네릭을 이용한 타입 추론2
interface Dropdown<T> {
  value: T;
  title: string;
}

// 인터페이스 확장
interface DetailedDropdown<K> extends Dropdown<K> {
  descripttion: string;
  tag: K;
  // 암묵적으로 위의 인터페이스 Dropdown<T>가 들어옴.
}

// DetailedDropdown<string>이 위의 인터페이스 확장에 'K'에 반환됨.
var detailedItem: DetailedDropdown<string> = {
  title: "abc",
  descripttion: "ab",
  value: "a",
  tag: "a"
};

// Best Common Type - 타입스크립트가 해석하는 방식(가장 근접한 타입을 추론함.)
var arr = [1, 2, true, true, "a"]; // var arr: (number | boolean | string)[]
