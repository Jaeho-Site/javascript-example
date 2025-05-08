var funcs = [];

for (var i = 0; i < 3; i++) {
    funcs[i] = (function (id) { return id; })(i);
}

for (var j = 0; j < funcs.length; j++) {
    console.log(typeof funcs[j]);
}

// for 문의 변수 선언문에서 var 키워드로 선언한 i 변수는 "블록 레벨 스코프"가 아닌
// "함수레벨 스코프"이다.

// expectation
// 0, 1, 2

// result
// 3, 3, 3