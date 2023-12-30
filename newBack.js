const {PythonShell} = require("python-shell");

function changeImage(event){
     /*This isn't working how i'm expecting it to rn, but it's working as a way for the user to download their file
    const theFiles = document.getElementById("imageReceiver").files;
    print(theFiles[0]);
    */
   let theFiles = document.getElementById('myForm').files;
   let options = {
    // get print results in real-time
    //scriptPath: 'path/to/my/scripts', //If you are having python_test.py script in same folder, then it's optional.
    args: [theFiles[0].name]
};
   PythonShell.PythonShell.run('testAlgo.py', options).then(function (messages) {
    console.log('finished');
});
   let newElem = document.getElementById("downloadSpot").innerHTML;
   newElem = "<a href= \"output.png\">";
}