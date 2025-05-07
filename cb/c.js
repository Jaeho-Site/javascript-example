new Promise((resolve) => {
    setTimeout(() => resolve("1단계"), 10);
  })
  .then((res) => {
    console.log(res);  // "1단계"
    resolve("2단계");  
  })
  .then((res) => {
    console.log(res);  // "2단계"
    return "3단계";
  });