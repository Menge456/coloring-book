


const func = async () => {
  /* once i have a working way to run the python, come back here, change ping to the name of the function
  //func can prob stay the same, but remember to have a call for this function in preload
  */
  //let theFiles = document.getElementById('imageReceiver').files;
  //now call something that uses the first item's name, called changeImage
  //console.log(theFiles[0].name)
  let newImg =  await window.versions.changeImage();
  console.log(newImg);
  document.getElementById("putHere").innerHTML = "<a href=\'output.jpg\' download> yourColoringBookPage! </a>"
}

document.getElementById("myButton").addEventListener("click", func);

const information = document.getElementById('info');
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`