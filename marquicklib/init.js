const vscode = require('vscode');
const globalContext = require('../main.js');



function initCommand(commandName, commandFunction) {
	let context = globalContext;
	vscode.commands.registerCommand('marquick.' + commandName, commandFunction);
}

module.exports = {
	initCommand
}