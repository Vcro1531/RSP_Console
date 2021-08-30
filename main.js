const fs = require('fs');
const readline = require('readline');

const randomNum = Math.random() * 3
const randomNumFloor = Math.floor(randomNum)

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
});

rl.question('1. Login 2. Register : ', (Choose) => {
   if (Choose == 1) {

      rl.question('Please enter your ID : ', (IDvalue) => {
         // data폴더 안에 id가 있는지, 없으면 프로그램 종료.


         fs.readdir('./data', function (err, filelist) {
            fs.readFile(`./data/${IDvalue}`, 'utf8', function (err, data) {
               for (let i = 0; i < filelist.length; i++) {
                  if (IDvalue != filelist[i]) {
                     
                  } else {
                     rl.question('Please enter your Psword : ', (PswordValue) => {
                        fs.readFile(`data/${IDvalue}`, 'utf8', function (err, data) {
                           // id 파일 안에 있는 비밀번호를 읽고 입력한 비밀번호와 맞는지 확인
                           // 입력한 idvalue의 안에 폴더 내용과 입력한 pswordvalue 값이 맞는지 확인
                           if (PswordValue == data) {
                              console.log("Let's Start Game!\, Enter one of Rock, Scissors, or Paper");

                              rl.question('USER : ', (RSP) => {
                                 if (RSP == "Rock") {
                                    if (randomNumFloor == 0) {
                                       console.log("Ai : Rock");
                                       console.log("draw!");
                                       rl.close();
                                    }
                                    else if (randomNumFloor == 1) {
                                       console.log("Ai : Paper");
                                       console.log("lose!");
                                       rl.close();
                                    }
                                    else {
                                       console.log("Ai : Scissors");
                                       console.log("win!");
                                       rl.close();
                                    };
                                 } else if (RSP == "Scissors") {
                                    if (randomNumFloor == 0) {
                                       console.log("Ai : Scissors");
                                       console.log("draw!");
                                       rl.close();
                                    }
                                    else if (randomNumFloor == 1) {
                                       console.log("Ai : Rock");
                                       console.log("lose!");
                                       rl.close();
                                    }
                                    else {
                                       console.log("Ai : Paper");
                                       console.log("win!");
                                       rl.close();
                                    };
                                 }
                                 else if (RSP == "Paper") {
                                    if (randomNumFloor == 0) {
                                       console.log("Ai : Paper");
                                       console.log("draw!");
                                       rl.close();
                                    }
                                    else if (randomNumFloor == 1) {
                                       console.log("Ai : Scissors");
                                       console.log("lose!");
                                       rl.close();
                                    }
                                    else {
                                       console.log("Ai : Rock");
                                       console.log("win!");
                                       rl.close();
                                    };
                                 }
                                 else {
                                    console.log("You did not enter one of Rock, scissors, or Paper");
                                    rl.close();
                                 }
                              })
                           }
                           else {
                              console.log("wrong Password!");
                              rl.close();
                           }
                        });
                     })
                  }
               }
            })
         })
      })
   }
   else if (Choose == 2) {
      rl.question('Please make your ID : \n', (MakeID) => {
         rl.question('Please make your Psword : \n', (MakePsword) => {

            var data = MakePsword;
            fs.writeFile(`./data/${MakeID}`, data, 'utf8', function (error) {
               console.log('Sign Up Success!')
            })
            rl.close();
         })
      });
   }
   else {
      console.log("You don't enter 1 or 2");
      rl.close();
   }
});