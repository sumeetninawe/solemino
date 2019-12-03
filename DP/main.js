/**
 * DP.main = class to encapsulate display functions for console.
 */

const main = {};
const readline      = require('readline');
const rl            = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

main.print = (validityObject) => {
    if(validityObject.valid == false)
        main.printError(validityObject.errorMessages);
    else if(validityObject.valid == true)
        main.printMessage(validityObject.messages);
}

main.printError = (e) => {
    for(let message in e){
        console.log('ERROR: ' + e[message]);
    }
}

main.printMessage = (m) => {
    for(let message in m){
        console.log('INFO: ' + m[message]);
    }
}

main.inputValues = (qA) => {
    qA = [{
        "question": "Instance Name: ",
        "answer": ""
    }, {
        "question": "User Name: ",
        "answer": ""
    }, {
        "question": "Password: ",
        "answer": ""
    }];
    
    /*qA.forEach((item, index) => {
        console.log(item.question);*/
        rl.question("How are you?", (answer) => {
            console.log("So you are " + answer);
            rl.close();
        });
    //});   
}

module.exports = main;