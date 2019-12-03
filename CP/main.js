/**
 * CP: Command Processor
 * Description: Includes the main function aka first hit function in every command loop.
 * In future this may house additonal functionality related to command structure processing.
 */
const cmdValidator = require('./cmdValidator');
const cmdExecutor = require('./cmdExecutor');
const sessionValidator = require('./sessionValidator');
const DP = require('./../DP/main');
const CP = {};

CP.main = (cmd, context, filename, callback) => {
    //Validate the command structure
    //if valid - trigger processing
    //if invalid - trigger error output message

    sessionValidator.getInstanceObject((sessionValidityObject) => {
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
        }else{
            DP.print(sessionValidityObject);
            sessionValidator.login(callback);
        }        
    });    
    callback();
    
    /*if(cmd.toString().substring(0, 3) == 'now'){
        console.log('triggering execution');
    }else{
        console.log('invalid command');
    }*/
}

module.exports = CP;