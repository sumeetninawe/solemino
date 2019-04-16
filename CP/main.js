/**
 * CP: Command Processor
 * Description: Includes the main function aka first hit function in every command loop.
 * In future this may house additonal functionality related to command structure processing.
 */
const cmdValidator = require('./cmdValidator');
const cmdExecutor = require('./cmdExecutor');
const DP = require('./../DP/main');
const CP = {};

CP.main = (cmd, context, filename, callback) => {
    console.log('reached CP.main function! ' + cmd.toString().substring(0, 3));
    //Validate the command structure
    //if valid - trigger processing
    //if invalid - trigger error output message

    cmdValidator.validate(cmd, (validityObject, cmdStructure) => {
        //Execution callback
        if(validityObject.valid == true){
            if(cmdStructure == undefined){
                validityObject.valid = false;
                validityObject.errorMessages.push('Command structure not found.');
                DP.print(validityObject);
            }
            cmdExecutor.execute(cmdStructure);
        }else
            DP.print(validityObject);
    });
    
    /*if(cmd.toString().substring(0, 3) == 'now'){
        console.log('triggering execution');
    }else{
        console.log('invalid command');
    }*/
}

module.exports = CP;