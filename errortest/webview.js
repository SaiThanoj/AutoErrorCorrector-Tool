"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const html = `
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Integrated Stackoverflow Search</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://apps.saurabhdaware.in/scripts/integrated-stackoverflow/style.css">
        <style>
        body{
            background-color:#ddd !important;
        }
        </style>
    </head>
    <body>
        <div style="padding:20px;">
            <label for="search" style="color:#111;font-weight:bold;">Search</label>
            <div style="display:flex;">
                <input id="search" style="display:inline-block;width:75%;padding:6px;flex:1;" type="search">
            </div>
            <div id="answers" style="margin-top:20px;">

            </div>
        </div>
        <script src="https://apps.saurabhdaware.in/scripts/integrated-stackoverflow/so.js"></script>
    </body>
</html>
`;
function getHtmlContent() {
    return html;
}
exports.getHtmlContent = getHtmlContent;
//# sourceMappingURL=webview.js.map