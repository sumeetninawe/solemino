/**
 * CP: Command Processor
 * Description: Includes the main function aka first hit function in every command loop.
 * In future this may house additonal functionality related to command structure processing.
 */
const cmdValidator = require('./cmdValidator');
const cmdExecutor = require('./cmdExecutor');
const sessionValidator = require('./sessionValidator');
const readline = require('readline');
const DP = require('./../DP/main');
const CP = {};
let count = 0;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

CP.main = (cmd, context, filename, callback) => {
    //Validate the command structure
    //if valid - trigger processing
    //if invalid - trigger error output message
    console.log(count++);
    sessionValidator.getInstanceObject((sessionValidityObject, instanceInfo) => {
        if(sessionValidityObject.valid == true){
            cmdValidator.validate(cmd, (validityObject, cmdStructure) => {
                //Execution callback
                if(validityObject.valid == true){
                    if(cmdStructure == undefined){
                        validityObject.valid = false;
                        validityObject.errorMessages.push('Command structure not found.');
                        DP.print(validityObject);
                    }
                    validityObject.messages.push('Valid command. Executing.');
                    cmdExecutor.execute(cmdStructure);
                }else {
                    DP.print(validityObject);
                    sessionValidator.login(callback);
                }
            });
            callback();
        }else{
            DP.print(sessionValidityObject);
            sessionValidator.login({}, context, callback);
        }
    });    
}

module.exports = CP;