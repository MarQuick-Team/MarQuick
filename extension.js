const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */

const editor = vscode.window.activeTextEditor;

function activate(context) {

	console.log('MarQuick Loaded!');

	vscode.commands.registerCommand('marquick.helloWorld', function () {
		console.log('Hello World from MarQuick!');
	});

	vscode.commands.registerCommand('marquick.helloWorldPopup', function () {
		vscode.window.showInformationMessage('Hello World from MarQuick!');
	});

	vscode.commands.registerCommand('marquick.helloWorldWrite', function () {
		let edit = new vscode.WorkspaceEdit;
		edit.insert(editor.document.uri, editor.selection.active, "Hello World from MarQuick!");
		vscode.workspace.applyEdit(edit);
	});

}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
