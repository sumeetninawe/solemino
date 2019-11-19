/**
 * cmdValidator: This module contains the logic to validate command structure. This essentially would have the
 * the governance of command structure as well.
 * 
 * Command Structure:-
 * now <verb> <options>
 * Ex: now read incident <sys_id/number>
 * 1. All solemino commands should start with 'now'.
 * 2. All commands should have a 'verb' as second parameter. For all 'verb' implementations refer './verbs.js'.
 */

const verbs = require('./verbs');
const cmdValidator = {};

cmdValidator.parts = {};
cmdValidator.parts.key = '';
cmdValidator.parts.verb = '';
cmdValidator.parts.options = '';

cmdValidator.validate = (cmd, cb) => {
    //maintain a validity object throught validation process
    let validityObject = {};
    validityObject.valid = false;
    validityObject.errorMessages = [];
    validityObject.messages = [];

    //break the inputs and divide it into parts
    cmdValidator.makeParts(cmd);

    //check for now keyword first
    if(cmdValidator.parts.key == 'now'){
        //validate verb
        verbs.validate(cmdValidator.parts, validityObject, cb);
    }else{
        validityObject.errorMessages.push('Invalid command key: ' + cmdValidator.parts.key);
        //Execution callback
        cb(validityObject);
    }
    cmdValidator.flush();
}

cmdValidator.makeParts = (cmd) => {
    var part = '';
    var partCount = 0;
    for(var x in cmd){
        if(cmd[x] != ' '){
            if(cmd[x] == '\n'){
                cmdValidator.parts.options += part + ' ';
            }
            part = part + cmd[x];
        }else{
            switch (partCount){
                case 0:
                cmdValidator.parts.key = part;
                part = '';
                break;
                case 1:
                cmdValidator.parts.verb = part;
                part = '';
                break;
                default:
                cmdValidator.parts.options += part + ' ';
                part = '';
                break;
            }
            partCount++;
        }
    }
}

cmdValidator.flush = () => {
    cmdValidator.parts = {};
    cmdValidator.parts.key = '';
    cmdValidator.parts.verb = '';
    cmdValidator.parts.options = '';
}

module.exports = cmdValidator;