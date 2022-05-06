// interface Person {
//     name: string;
//     age: number;
// }

// interface와 다르게 type은 확장이 불가능함.
// 가급적 interface를 사용할 것.
type Person = {
    name: string;
    age: number;
}

var seho: Person = {
    name: '세호',
    age: 30
}

type MyString = string;
var str: MyString = 'hello';

type Todo = { id: string; title: string; done: boolean };
function getTodo(todo: Todo) {

}