const repl = require('repl');
const CP = require('./CP/main');
const replServer = repl.start({prompt: 'nowcli> ', eval: CP.main});
//let i=0;
//const replServer = repl.start({prompt: 'nowcli> ', eval:console.log(++i)});