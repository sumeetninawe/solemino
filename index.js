const repl = require('repl');
const CP = require('./CP/main');

repl.start({prompt: 'nowcli> ', eval: CP.main});