import * as vscode from 'vscode';
import { registerAllCommands as ForEditorTitle } from './ForEditorTitle/registerCommands.js';
import readHtml from './backend/readHtml.js';

export function registerAllCommands(context) {
    // 1. Register old InputBox command (AddTableName)
    ForEditorTitle(context);

    // 2. Register new Webview command (AddTableNameHtml)
    const commandHtml = 'extension.editor.title.routesjs.addTableNameHtml';
    const showHtml = vscode.commands.registerCommand(commandHtml, (uri) => readHtml(context, uri));
    context.subscriptions.push(showHtml);
};
