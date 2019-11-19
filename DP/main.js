/**
 * DP.main = class to encapsulate display functions for console.
 */

const main = {};

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

module.exports = main;