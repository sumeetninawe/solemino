/**
 * cmdExecutor: Class to encapsulate functions responsible for building and triggering appropriate API calls.
 * 
 */

const cmdExecutor = {};

cmdExecutor.execute = (cmd) => {
    console.log('Inside command Executor');
    console.log(cmd.cmdParts.key);
    console.log(cmd.cmdParts.verb);
    console.log(cmd.cmdParts.options);
    for(var x in cmd.optionsParts.m){
        console.log(x + ' ' + cmd.optionsParts.m[x]);
    }
    for(var y in cmd.optionsParts.m){
        console.log(y + ' ' + cmd.optionsParts.m[y]);
    }

}

module.exports = cmdExecutor;