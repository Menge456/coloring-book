"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var {PythonShell} = require("pyodide");
function changeImage() {
    /*This isn't working how i'm expecting it to rn, but it's working as a way for the user to download their file
    const theFiles = document.getElementById("imageReceiver").files;
    print(theFiles[0]);
    */
    var _a;
    var theFiles = document.getElementById('myForm').files;
    var options = {
        // get print results in real-time
        //scriptPath: 'path/to/my/scripts', //If you are having python_test.py script in same folder, then it's optional.
        args: [theFiles[0].name]
    };
    PythonShell.PythonShell.run('testAlgo.py', options).then(function (messages) {
        console.log('finished');
    });
    var newShit = (_a = document.getElementById("downloadSpot")) === null || _a === void 0 ? void 0 : _a.innerHTML;
    newShit == "<a href= \"output.png\"> ";
}
