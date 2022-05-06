// 타입스크립트의 클래스 문법 - 기본적인 문법정도만 숙지
class Person {
  // 해당 클래스 안에서만 사용
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