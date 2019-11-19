/**
 * verbs: Contains all the verb validations and logic to trigger appropriate 'options' validations 
 * and then trigger appropriate actions.
 * 
 * List of verbs: create, delete, update, read
 */

const options = require('./options');
const verbs = {};
verbs.validVerbs = ['create', 'delete', 'read', 'update'];

verbs.validate = (cmdParts, validityObject, cb) => {
    if(verbs.validVerbs.indexOf(cmdParts.verb) > -1){
        //validate options for this verb
        options.validate(cmdParts, validityObject, cb);
    }else{
        validityObject.errorMessages.push('Invalid verb: ' + cmdParts.verb);
        //Execution callback
        cb(validityObject);
    }
}

module.exports = verbs;