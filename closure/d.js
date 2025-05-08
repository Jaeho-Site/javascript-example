var funcsA = [];
var funcsB = [];
var funcsWrong = [];

for (var i = 0; i < 3; i++) {
    // A: 매개변수로 i를 전달하여 id에 고정
    funcsA[i] = (function (id) { return id; })(i);

    // B: 즉시 실행하면서 i를 직접 참조
    funcsB[i] = (function () { return i; })();

    funcsWrong[i] = function () { return i; };
}

console.log("▶ funcsA");
for (var j = 0; j < funcsA.length; j++) {
    console.log(`funcsA[${j}] =`, typeof funcsA[j]);
}

console.log("▶ funcsB");
for (var j = 0; j < funcsB.length; j++) {
    console.log(`funcsB[${j}] =`, typeof funcsB[j]);
}

console.log("▶ funcsC");
for (var j = 0; j < funcsB.length; j++) {
    console.log(`funcsB[${j}] =`, typeof funcsWrong[j]);
}
