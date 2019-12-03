const repl = require('repl');
const CP = require('./CP/main');

const replServer = repl.start({prompt: 'nowcli> ', eval: CP.main});