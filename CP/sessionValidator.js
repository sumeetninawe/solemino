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
const instanceInfo      = {};
instanceInfo.urlPrefix  = '';
instanceInfo.username   = '';
instanceInfo.password   = '';

SV.getInstanceObject = (cb) => {
    let validityObject = {};
    validityObject.valid = false;
    validityObject.errorMessages = [];
    validityObject.messages = [];
    if(instanceInfo.urlPrefix == '' || instanceInfo.urlPrefix == undefined){
        validityObject.valid = false;
        validityObject.errorMessages.push('Please login to the instance first.');
    }else{
        validityObject.valid = true;
        validityObject.messages = ''
    }
    cb(validityObject);
}

SV.login = (cb) => {
    let validityObject = {};
    validityObject.valid = false;
    validityObject.errorMessages = [];
    validityObject.messages = [];

    DP.inputValues(instanceInfo, cb);
}

module.exports = SV;