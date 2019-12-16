/**
 * DP.main = class to encapsulate display functions for console.
 */

const main = {};
const repl = require('repl');
const readline = require('readline');
const rl = readline.createInterface({
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

main.inputValues = (questions, instanceInfo, context, cb) => {
    questions = [{
        "question": "Instance Name: ",
        "answer": ""
    }, {
        "question": "User Name: ",
        "answer": ""
    }, {
        "question": "Password: ",
        "answer": ""
    }];
    let i = 0;
    let iteratorFunction = (q) => {

    }
    
    rl.question(questions[i].question, (answer) => {
        console.log(answer);
        i++;
        if(questions[i] != undefined){
            rl.question(questions[i], );
        }
    });
}

module.exports = main;