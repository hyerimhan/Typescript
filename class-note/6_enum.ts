// 숫자형 이넘
// enum Shoes {
//   Nike = 10, //10
//   Adidas // 11 (처음 정의된 값에서 1씩 증가함)
// }

// var myShoes = Shoes.Nike;
// console.log(myShoes); // 정의가 되어있지 않으면 0

// 문자형 이넘
enum Shoes {
    Nike = "나이키",
    Adidas = "아디다스"
  }
  var myShoes = Shoes.Nike;
  console.log(myShoes); // '나이키'
  
  // 이넘 활용 사례 (구체적인 값 정하기)
  enum Answer {
    Yes = "Y",
    No = "N"
  }
  
  // function askQuestion(answer: string) {
  //   if (answer === "yes") {
  //     console.log("정답입니다.");
  //   }
  //   if (answer === "no") {
  //     console.log("오답입니다.");
  //   }
  // }
  // askQuestion("예스"); // O
  // askQuestion("y"); // O
  // askQuestion("Yes"); // O
  
  function askQuestion(answer: Answer) {
    if (answer === Answer.Yes) {
      console.log("정답입니다.");
    }
    if (answer === Answer.No) {
      console.log("오답입니다.");
    }
  }
  askQuestion(Answer.Yes); // O
  askQuestion("예스"); // X
  askQuestion("y"); // X
  askQuestion("Yes"); // X
  