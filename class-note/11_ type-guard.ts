interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function introduce(): Developer | Person {
    return {
        name: "Tony",
        age: 33,
        skill: "Iron Making"
    }
}

var tony = introduce();
// 유니온타입은 공통된 속성만 접근할 수 있음.
console.log(tony.skill); // skill이 아닌 공통된 속성인 name만 접근가능

// 유니온타입에서 공통되지 않는 속성 사용하는 방법
if ((tony as Developer).skill) {
    var skill = (tony as Developer).skill;
    console.log(skill);
} else if ((tony as Person).age) {
    var age = (tony as Person).age;
    console.log(age);
}

// 타입 가드 정의(is) true false
function isDeveloper(target: Developer | Person): target is Developer {
    // 넘겨받은 파라미터가 해당 타입인지 구분
    return (target as Developer).skill !== undefined; // skill이라는 값이 있을 때
}

if (isDeveloper(tony)) {
    console.log(tony.skill);
} else {
    console.log(tony.age);
}