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

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

CP.main = (cmd, context, filename, callback) => {
    //Validate the command structure
    //if valid - trigger processing
    //if invalid - trigger error output message
   
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
            if(cmd.substring(0, 3) == 'now'){
                DP.print(sessionValidityObject);
                let questions = {};
                questions.urlPrefix = 'URL Prefix: ';
                questions.username = 'User Name: ';
                questions.password = 'Password: ';
                sessionValidator.login(questions, context, callback);
            }
            else{
                callback();
            }
            
         //   callback();
            /*rl.question('URL Prefix: ', (answer) => {
                console.log('ok so you are ' + answer);
                callback();
            });*/
        }        
    });    
    
    
    /*if(cmd.toString().substring(0, 3) == 'now'){
        console.log('triggering execution');
    }else{
        console.log('invalid command');
    }*/
}

module.exports = CP;