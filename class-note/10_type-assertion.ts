// 타입 단언(type assertion) - 사용자가 정의한 타입으로 간주
var a; // : any
a = 20; // : number
a = "a";
var b = a as string; // 전 : any 후 : string

// DOM API 조작
// <div id="app">hi</div>
var div = document.querySelector("div") as HTMLDivElement; // document에 div Element가 있을것이다. 라고 단언하기
