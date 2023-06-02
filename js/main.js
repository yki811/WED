'use strict '

// if文

// const score = 85;

// if (score >= 80) {
//  console.log("Great");
// }else if  (score >= 60) {
//  console.log("Good.");
// }else{
//   console.log("OK...");
// }

// score >= 80 ?  console.log("Great") : console.log("OK...");




// 論理演算子
// &&  なおかつ(AND)
// || もしくは(OR)
// ! ～ではない(NOT)



// const score = 60;
// const name = "taguchi";

// if (score >= 50) {
//   if (name === "taguchi") {
//     console.log("Good Job!");
//   }
// }


// if (score >=50 && name === "taguchi") {
// console.log("Good Job!");
// }


// switch文

// const signal = "pink";

// switch (signal) {
//   case "red":
//     console.log("stop!");
//     break;

//   case "yellow":
//     console.log("caution!");
//     break;

//   case "blue":
//   case "green":
//     console.log("go!");
//     break;

// default:
//   console.log ("wrong signal!");
//   break;
// }




// for文

// for ( let i = 1; i <= 10; i ++) {
//   console.log(`hello ${i}`);
// }


// while文

// let i = 50;
// while(i > 0){
//   console.log(`${i} HP left!`);
//   i -= 15;
// }


// 関数

// function showAd (message = "Ad") {
//  console.log("------");
//  console.log(`--- ${message}---`);
//  console.log("------");
// }

// showAd();
// showAd("specialpromotion");




// return のある関数 関数宣言

// function sum(a,b,c){
//   return a + b + c ;
// }
// sum(1,2,3);
// sum(3,4,5);

// const total = sum(1,2,3)  + sum(3,4,5);
// console.log(total);



// return　のある関数　関数式

// const sum = function (a,b,c) {
//   return a + b + c ;
//  };

//  const total = sum(1,2,3)  + sum(3,4,5);
// console.log(total);



//関数式をより簡単に書き換える
// アロー関数

// const sum = (a,b,c) => a + b + c;
// const total = sum(1,2,3) + sum (3,4,5);

// console.log(total);


// const double = (a) => a * 2;

// console.log(double(12));


// forEach文（配列に有効な繰り返し処理）

// const scores = [80, 90, 40, 70];

// scores.forEach ( (score, index) => {
//   console.log(`index: ${index} score: ${score}`);
// })


// 配列の要素を変更してみよう
// 先頭に要素を追加・消去　unshift(); / shift();
// 末尾に要素を追加・消去　push();  /  pop();

// const a = [10, 40, 12, 22];
// a.push(9, 18);
// a.shift();

// a.forEach(score => {
//   console.log(`score:${score}です`);
// })

// 配列の途中の要素変更
// splice(消去が始まる位置のindex番号, 消去数)
// splice(変化が始まる位置, 消去数, 追加する要素)

// const numbers =[90, 40, 70, 60, 50];
// numbers.splice(2, 2,36, 22);

// numbers.forEach(number =>{
//   console.log(`number: ${number}です`);
// })


// スプレッド構文
// 配列を結合したり、配列の要素を関数に渡すことができる。

// const otherScores = [10, 20];
// const scores = [60, 70, 90, 80,...otherScores];

// console.log(scores);


// スプレッド構文は、関数の引数にもよく使われる。

// const otherScores = [10, 20];

// function sum (a,b) {
//   console.log(a+b);
// }

// const sum = ((a,b) => {
// console.log(a+b);
// })

// sum(...otherScores);


// 分割代入
// 配列の値をそれぞれ定数に割り当てる

// const scores =[80, 90, 40, 70];
// const [a, b, c, d] = scores;

// console.log(b);
// console.log(scores[0]);

// 分割代入は、値の交換にもよく使われる。

// let x =30;
// let y =70;

// [x,y]=[y,x];

// console.log(x);

