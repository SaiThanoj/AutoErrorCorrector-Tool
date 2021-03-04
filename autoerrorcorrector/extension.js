// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const { JsxEmit } = require('typescript');
const vscode = require('vscode');
const vscode_1 = require("vscode");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    var out;
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "autoerrorcorrector" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand(
		'autoerrorcorrector.helloWorld', 
		function () {
		// The code you place here will be executed every time your command is executed
		var _f, _g, _h, _j, _k, _l;
		
			const currentFileUri = (_f = vscode_1.window.activeTextEditor) === null || _f === void 0 ? void 0 : _f.document.uri;
			if (!currentFileUri) {
				return;
			}
		   out = vscode_1.languages.getDiagnostics(currentFileUri);
		   console.log(out);
		// Display a message box to the user
		vscode.window.showInformationMessage("got it");
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
