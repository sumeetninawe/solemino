/**
 * options: This file contains the logic for validation of options provided 
 * 
 * Every Validation should follow by query formation/code that would be required by API call function
 * 
 * List of valid options per verb: {[] = mandatory; () = optional}
 * 1. create    :- [<table_name>] (<fieldname>=<value>)
 * 2. update    :- [<table_name> <sys_id/number>] (<fieldname>=<value>)
 * 3. read      :- [<table_name>] (<sys_id/number>)
 *              :- Number of rows [-n <values> Default: 10]
 * 4. delete    :- [<table_name> <sys_id/number>]
 */

const options = {};

options.validate = (cmdParts, validityObject, cb) => {
    switch (cmdParts.verb){
        case 'read':
        options.forRead(cmdParts, validityObject, cb);
        break;
        case 'create':
        options.forCreate(cmdParts, validityObject, cb);
        break;
        case 'update':
        options.forUpdate(cmdParts, validityObject, cb);
        break;
        case 'delete':
        options.forDelete(cmdParts, validityObject, cb);
        break;
    }
};

options.forRead = (cmdParts, validityObject, cb) => {
    var options = cmdParts.options;
    var part = '';
    var partCount = 0;
    var optionsParts = {};
    optionsParts.m = {};
    optionsParts.m.table_name = undefined;
    optionsParts.o = {};
    optionsParts.o.field_value = undefined;

    for(var x in options){
        if(options[x] != ' '){
            if(options[x] == '\n'){
                optionsParts.o.field_value = part;
                //correct options processed
                //trigger execution callback with true flag
                validityObject.valid = true;
                var cmdStructure = {};
                cmdStructure.cmdParts = cmdParts;
                cmdStructure.optionsParts = optionsParts;
                cb(validityObject, cmdStructure);
            }
            part = part + options[x];
        }else{
            switch (partCount){
                case 0:
                optionsParts.m.table_name = part;
                part = '';
                break;
                default:
                //Extra params supplied
                validityObject.errorMessages.push('Invalid options supplied.');
                cb(validityObject);
                break;
            }
            partCount++;
        }
    }


}

module.exports = options;