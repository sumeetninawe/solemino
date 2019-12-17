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

main.questions = [];
main.i = 0;

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
 /*   let iteratorFunction = () => {
        rl.readline(questions[i].question, (answer) => {
            console.log('\n' + answer);
            i++;
            readline();
        });
    }*/
    let iteratorFunction = () => {
        
        var handler = (answer) =>{
            i++;
       //     console.log('\n' + questions.length + ' ' + i + ' ' + questions[i].question + ' ' + answer);
            if(questions[i].question != undefined)
                rl.question(questions[i].question,handler);
        }
        
        rl.question(questions[i].question, handler);
        
    }

    iteratorFunction();
}

/*main.iteratorFunction = () => {
    rl.question(main.questions[main.i].question, (answer) => {
        console.log('\n' + main.questions.length + ' ' + main.i + ' ' + main.questions[main.i].question + ' ' + answer);
        main.i++;
        if(main.questions[main.i].question)
            main.iteratorFunction();
    });
}*/

module.exports = main;