const vscode = require('vscode');
const init = require('./marquicklib/init')
const figlet = require('figlet');
/**
 * @param {vscode.ExtensionContext} context
 */

const editor = vscode.window.activeTextEditor;

var globalContext;

function activate(context) {

	let globalContext = context;

	console.log('MarQuick Loaded!');

	init.initCommand("helloWorld", () => {
		console.log('Hello World from MarQuick!');
	});

	init.initCommand('helloWorldPopup', () => {
		vscode.window.showInformationMessage('Hello World from MarQuick!');
	});

	init.initCommand('helloWorldWrite', () => {
		let edit = new vscode.WorkspaceEdit;
		edit.insert(editor.document.uri, editor.selection.active, "Hello World from MarQuick!");
		vscode.workspace.applyEdit(edit);
	});

	initCommand('figletText', () => {
		let edit = new vscode.WorkspaceEdit;
		let figletText = figlet('Hello World!!', function(err, data) {
			if (err) {
				console.log('Something went wrong...');
				console.dir(err);
				return;
			}
			return data;
		});
		edit.insert(editor.document.uri, editor.selection.active, "```\n" + figletText + "\n```");
		vscode.workspace.applyEdit(edit);
	});
}



// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate,
	globalContext
}
