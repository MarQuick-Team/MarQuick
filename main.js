const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */

const editor = vscode.window.activeTextEditor;

function activate(context) {

	console.log('MarQuick Loaded!');

	initCommand(context, "helloWorld", () => {
		console.log('Hello World from MarQuick!');
	});

	initCommand(context, 'helloWorldPopup', () => {
		vscode.window.showInformationMessage('Hello World from MarQuick!');
	});

	initCommand(context, 'helloWorldWrite', () => {
		let edit = new vscode.WorkspaceEdit;
		edit.insert(editor.document.uri, editor.selection.active, "Hello World from MarQuick!");
		vscode.workspace.applyEdit(edit);
	});

}

function initCommand(context, commandName, commandFunction) {
	vscode.commands.registerCommand('marquick.' + commandName, commandFunction);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
