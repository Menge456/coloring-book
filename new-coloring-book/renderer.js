


function func() {
  /* once i have a working way to run the python, come back here, change ping to the name of the function
  //func can prob stay the same, but remember to have a call for this function in preload
  */
  //let theFiles = document.getElementById('imageReceiver').files;
  //now call something that uses the first item's name, called changeImage
  //console.log(theFiles[0].name)
  let newImg =  window.versions.changeImage();
  console.log(newImg);
  document.getElementById("putHere").innerHTML = "<a href=\'output.jpg\' download> Here's your image! </a>"
}

/*
  lighten
  input: background colors where the backgroundColor returns something of the form rgb(x, y, z) where x y and z are numbers
  output: increased values for x, y, and z by a number (which will be determined through testing), if the numbers are already >= 255, return 255
*/
function lighten(theId){
 theId.classList.toggle("active")
}


document.getElementById("myButton").addEventListener("click", func);
