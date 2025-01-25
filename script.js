function firstChar(text) {
  // your code here
	if(text==" "||text ==""){
		return "";
	}
	else{
		let newText =text.trim();
	return newText.charAt(0);
		}
}



// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));

