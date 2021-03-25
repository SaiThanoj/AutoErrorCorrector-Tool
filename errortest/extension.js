// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const webview_1 = require("./webview");

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "errortest" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('errortest.helloWorld', function () {
		// The code you place here will be executed every time your command is executed
		// var f;
		{
			// const currentFileUri = (f = vscode.window.activeTextEditor) === null || f === void 0 ? void 0 : f.document.uri;
			// if (!currentFileUri) {
			// 	return;
			// }
			var out = vscode.languages.getDiagnostics();
		}
		// Display a message box to the user
		vscode.window.showInformationMessage("cool");
		console.log(out);

		// formation of the error selection list
		let errorMessages = [];
		out.forEach((value) => {
			value[1].forEach((value) => {
				let error = value.message;
				if (value.source !== undefined) {
					error += ' ' + value.source;
				}
				errorMessages.push(error);
			});
		});
		// show the selection window
		vscode.window.showQuickPick(errorMessages)
			// process the response
			.then((value) => {
				if (value !== undefined)
					openBrowser(value);
			});
		
	});
	context.subscriptions.push(disposable);

	let stackOverdlowView = vscode.commands.registerCommand('extension.soView', () => {
		// Gotta play with this API :)
		// https://api.stackexchange.com/2.2/search/advanced?order=desc&sort=relevance&q=get+date+in+javascript&answers=1&site=stackoverflow
		// Create and show panel
		const panel = vscode.window.createWebviewPanel('stackOverflow', 'StackOverflow View', vscode.ViewColumn.Two, {
			enableScripts: true
		});
		// And set its HTML content
		panel.webview.html = webview_1.getHtmlContent();
	});
	context.subscriptions.push(stackOverdlowView);
}

// this method is called when your extension is deactivated
function deactivate() {
	
}

function openBrowser(str) {
	console.log(str);
	let searchQuery = "https://www.google.com/search?q=" + encodeURI(str + ' site:stackoverflow.com');
	vscode.env.openExternal(vscode.Uri.parse(searchQuery));
}

module.exports = {
	activate,
	deactivate
}
