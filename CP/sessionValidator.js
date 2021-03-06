/**
 * sessionValidator: This module contains the logic to validate session to a particular servicenow instance. This essentially would have the
 * the governance of session maintenance and future.
 * 
 * Command Structure:-
 * now login
 * now logout
 * 
 * */


const SV                = {};
const DP                = require('./../DP/main');
const DB                = require('./../DB/main');
const instanceInfo      = {};
instanceInfo.urlPrefix  = '';
instanceInfo.username   = '';
instanceInfo.password   = '';

SV.getInstanceObject = (cb) => {
    let validityObject = {};
    validityObject.valid = false;
    validityObject.errorMessages = [];
    validityObject.messages = [];

    DB.getSessionRecord((result) => {
        if(result.length == 0){
            validityObject.valid = false;
            validityObject.errorMessages.push('Please login to the instance.');
        }else{
            validityObject.valid = true;
            validityObject.messages = ''
        }
        cb(validityObject, result[0]);      
    });    
}

SV.login = (questions, context, cb) => {
    let validityObject = {};
    validityObject.valid = false;
    validityObject.errorMessages = [];
    validityObject.messages = [];
    DP.inputValues(questions, instanceInfo, context, cb);
}

module.exports = SV;