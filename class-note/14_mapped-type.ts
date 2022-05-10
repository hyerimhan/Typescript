type Heros = 'Hulk' | 'Capt' | 'Thor'
type HeroAges = { [ K in Heros ]: number} // K는 타입변수
const ages: HeroAges = {
    Hulk: 33,
    Capt: 100,
    Thor: 1000,
}

// for in 반복문 코드
// var arr = ['a', 'b', 'c'];
// for (var key in arr) { // key는 index
//     console.log(arr[key]);
// }