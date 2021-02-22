const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */

const editor = vscode.window.activeTextEditor;

var globalContext;

function activate(context) {

	globalContext = context;

	console.log('MarQuick Loaded!');

	initCommand("helloWorld", () => {
		console.log('Hello World from MarQuick!');
	});

	initCommand('helloWorldPopup', () => {
		vscode.window.showInformationMessage('Hello World from MarQuick!');
	});

	initCommand('helloWorldWrite', () => {
		let edit = new vscode.WorkspaceEdit;
		edit.insert(editor.document.uri, editor.selection.active, "Hello World from MarQuick!");
		vscode.workspace.applyEdit(edit);
	});

}

function initCommand(commandName, commandFunction) {
	let context = globalContext;
	vscode.commands.registerCommand('marquick.' + commandName, commandFunction);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
