console.log("This is popup js");
$(document).ready(function(){
	console.log("This is inside query...");
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
		console.log(response.farewell);
  });
});
	//document.getElementById("validate").addEventListener('click',identifyProtocol);
});
function fun(){
	console.log("Hello Having fun");
}
 



