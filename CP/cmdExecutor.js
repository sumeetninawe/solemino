/**
 * cmdExecutor: Class to encapsulate functions responsible for building and triggering appropriate API calls.
 * 
 * Parameters Expected:
 * Read: operation, tableName, recordId
 * 
 */

const cmdExecutor = {};

cmdExecutor.execute = (cmd) => {
    console.log('Inside command Executor');
    console.log(cmd.tableName);
    console.log(cmd.recordId);
    console.log(cmd.operation);

    switch(cmd.operation){
        case 'read':
        cmdExecutor.read(cmd);
        break;
        case 'create':
        cmdExecutor.create(cmd);
        break;
        case 'update':
        cmdExecutor.update(cmd);
        break;
        case 'delete':
        cmdExecutor.delete(cmd);
        break;
    }
}

cmdExecutor.read = (cmd) => {

}

cmdExecutor.create = (cmd) => {

}

cmdExecutor.update = (cmd) => {

}

cmdExecutor.delete = (cmd) => {

}

module.exports = cmdExecutor;