
import { PythonShell } from 'python-shell';

function changeImage(){
    /*This isn't working how i'm expecting it to rn, but it's working as a way for the user to download their file
    const theFiles = document.getElementById("imageReceiver").files;
    print(theFiles[0]);
    */

    const theFiles = (document.getElementById('myForm') as HTMLFormElement).reset();
    
    
    let options = {
        pythonOptions: ['-u'], // get print results in real-time
          //scriptPath: 'path/to/my/scripts', //If you are having python_test.py script in same folder, then it's optional.
        args: [theFiles[0].name]
    };
    PythonShell.run('testAlgo.py', options).then(messages=>{
        console.log('finished');
      });
    let newShit = document.getElementById("downloadSpot")?.innerHTML;
    newShit == "<a href= \"output.png\"> "
    
}

